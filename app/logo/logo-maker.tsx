"use client";

/* eslint-disable @next/next/no-img-element */

import { ChangeEvent, DragEvent, FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type ModelId = "openai:gpt-image@2" | "ideogram:4@0";
type OutputType = "logo" | "app-icon" | "mascot" | "poster" | "logo-with-name";

type GeneratedImage = { imageURL: string; imageUUID?: string };
type GenerationResult = {
  images: GeneratedImage[];
  model: ModelId;
  outputType: OutputType;
  width: number;
  height: number;
};

type SearchResult = {
  title: string;
  imageUrl: string;
  thumbnailUrl: string;
  contextUrl: string;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const outputOptions: Array<{ id: OutputType; label: string; detail: string; glyph: string }> = [
  { id: "logo", label: "Logo", detail: "A standalone symbol", glyph: "◇" },
  { id: "app-icon", label: "Mobile app logo", detail: "Bold at small sizes", glyph: "▣" },
  { id: "mascot", label: "Mascot", detail: "A character with personality", glyph: "✦" },
  { id: "poster", label: "Poster + app name", detail: "A portrait brand poster", glyph: "▤" },
  { id: "logo-with-name", label: "Logo + name", detail: "A complete brand lockup", glyph: "◫" },
];

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("We couldn’t read that image."));
    reader.readAsDataURL(file);
  });
}

export function LogoMaker() {
  const [appName, setAppName] = useState("");
  const [context, setContext] = useState("");
  const [outputType, setOutputType] = useState<OutputType>("app-icon");
  const [model, setModel] = useState<ModelId>("openai:gpt-image@2");
  const [sourceImage, setSourceImage] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const selectedOutput = outputOptions.find((option) => option.id === outputType) ?? outputOptions[0];
  const googleSearchUrl = useMemo(() => {
    const query = appName.trim() ? `${appName.trim()} logo` : "app logo";
    return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
  }, [appName]);

  useEffect(() => {
    if (!isGenerating) return;
    const timer = window.setInterval(() => {
      setProgress((value) => Math.min(92, value + (value < 35 ? 7 : value < 70 ? 3 : 1)));
    }, 850);
    return () => window.clearInterval(timer);
  }, [isGenerating]);

  async function acceptFile(file?: File) {
    setError("");
    if (!file) return;
    if (!file.type.match(/^image\/(png|jpe?g|webp)$/)) {
      setError("Please choose a PNG, JPG, or WEBP image.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("That image is over 5 MB. Choose a smaller version and try again.");
      return;
    }
    try {
      setSourceImage(await fileToDataUrl(file));
      setSourceName(file.name);
      setImageUrl("");
      setResult(null);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "We couldn’t read that image.");
    }
  }

  function selectSearchResult(item: SearchResult) {
    setSourceImage(item.imageUrl);
    setSourceName(item.title || "Google image result");
    setImageUrl("");
    setSearchResults([]);
    setResult(null);
    setError("");
  }

  async function searchExistingLogo() {
    setError("");
    if (!appName.trim()) {
      setError("Add the app name before searching for an existing logo.");
      return;
    }
    setIsSearching(true);
    try {
      const response = await fetch(`/api/logo/search?q=${encodeURIComponent(appName.trim())}`);
      const payload = await response.json() as { configured?: boolean; items?: SearchResult[]; error?: string };
      if (!payload.configured) {
        window.open(googleSearchUrl, "_blank", "noopener,noreferrer");
        return;
      }
      if (!response.ok) throw new Error(payload.error || "Logo search didn’t respond.");
      setSearchResults(payload.items ?? []);
      if (!payload.items?.length) setError("No clear logo results found. Try the Google Images link or upload a reference.");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Logo search didn’t respond.");
    } finally {
      setIsSearching(false);
    }
  }

  function usePublicImageUrl() {
    setError("");
    try {
      const parsed = new URL(imageUrl.trim());
      if (parsed.protocol !== "https:") throw new Error();
      setSourceImage(parsed.toString());
      setSourceName(parsed.hostname);
      setSearchResults([]);
      setResult(null);
    } catch {
      setError("Paste a complete public HTTPS image URL.");
    }
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsDragging(false);
    void acceptFile(event.dataTransfer.files[0]);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!appName.trim() || !context.trim()) {
      setError("Add an app name and a short line of context first.");
      return;
    }

    setIsGenerating(true);
    setProgress(7);
    setResult(null);
    setActiveImage(0);
    try {
      const response = await fetch("/api/logo/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          appName: appName.trim(),
          context: context.trim(),
          outputType,
          model,
          sourceImage: sourceImage || undefined,
        }),
      });
      const payload = await response.json() as GenerationResult & { error?: string };
      if (!response.ok || !payload.images?.length) {
        throw new Error(payload.error || "The image model didn’t return a result. Try again.");
      }
      setProgress(100);
      setResult(payload);
    } catch (reason) {
      setProgress(0);
      setError(reason instanceof Error ? reason.message : "Something went wrong while creating your images.");
    } finally {
      setIsGenerating(false);
    }
  }

  function clearResult() {
    setResult(null);
    setActiveImage(0);
    setProgress(0);
    setError("");
  }

  const currentImage = result?.images[activeImage] ?? result?.images[0];
  const dimensions = result
    ? `${result.width} × ${result.height}`
    : outputType === "poster" ? "Portrait" : outputType === "logo-with-name" ? "Landscape" : "Square";

  return (
    <main className="poly-page logo-maker-page">
      <header className="topbar logo-topbar">
        <Link href="/" className="brand" aria-label="unslop.site home">
          <span className="brand-mark">u.</span>
          <span>unslop.site</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Gallery</Link>
          <Link href="/logo" className="active" aria-current="page">Logo Maker</Link>
        </nav>
        <p className="topbar-context">Three creative directions</p>
      </header>

      <section className="poly-studio poly-studio-compact" id="studio" aria-label="Logo and mascot studio">
        <div className="poly-workbench">
          <div className="poly-form-panel">
            <div className="poly-form-head">
              <span>01</span>
              <div><strong>Set the direction</strong><small>The useful bits, nothing more.</small></div>
              <span className="poly-status">{result ? "Complete" : isGenerating ? "Rendering" : "In progress"}</span>
            </div>
            <form className="poly-form" onSubmit={handleSubmit}>
              <div className="poly-field-grid">
                <label>
                  <span>App name</span>
                  <input name="appName" placeholder="e.g. Acorn" value={appName} onChange={(event) => { setAppName(event.target.value); setSearchResults([]); }} maxLength={60} autoComplete="organization" required />
                </label>
                <label>
                  <span>Short context</span>
                  <textarea name="context" placeholder="A friendly habit tracker for busy people" value={context} onChange={(event) => setContext(event.target.value)} rows={2} maxLength={240} required />
                  <small>What it does, who it’s for, and the feeling to capture.</small>
                </label>
              </div>

              <fieldset className="poly-output-fieldset">
                <legend>02 · What would you like to make?</legend>
                <div className="poly-output-grid">
                  {outputOptions.map((option) => (
                    <label key={option.id} className={outputType === option.id ? "is-selected" : ""}>
                      <input type="radio" name="outputType" value={option.id} checked={outputType === option.id} onChange={() => { setOutputType(option.id); setResult(null); }} />
                      <span className="poly-output-glyph" aria-hidden="true">{option.glyph}</span>
                      <span><strong>{option.label}</strong><small>{option.detail}</small></span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="poly-source-block">
                <div className="poly-source-row">
                  <div>
                    <span className="poly-label">03 · Find a source image</span>
                    <p>If a logo already exists, start with the clearest version.</p>
                  </div>
                  <button className="poly-search-button" type="button" onClick={() => void searchExistingLogo()} disabled={isSearching || !appName.trim()}>
                    {isSearching ? "Searching…" : "Find existing logo"} <span>↗</span>
                  </button>
                </div>

                {searchResults.length ? (
                  <div className="poly-search-results" aria-label="Logo image search results">
                    {searchResults.map((item) => (
                      <button type="button" key={item.imageUrl} onClick={() => selectSearchResult(item)} title={item.title}>
                        <img src={item.thumbnailUrl} alt={item.title} />
                      </button>
                    ))}
                    <a href={googleSearchUrl} target="_blank" rel="noreferrer">More on Google ↗</a>
                  </div>
                ) : null}

                <label className={`poly-dropzone${isDragging ? " is-dragging" : ""}${sourceImage ? " has-source" : ""}`} onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={() => setIsDragging(false)} onDrop={handleDrop}>
                  <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event: ChangeEvent<HTMLInputElement>) => void acceptFile(event.target.files?.[0])} />
                  {sourceImage ? (
                    <><img src={sourceImage} alt="Selected source" /><span className="poly-source-meta"><strong>{sourceName || "Source image"}</strong><small>Click or drop to replace</small></span></>
                  ) : (
                    <><span className="poly-upload-icon">↥</span><strong>Drop a source image here</strong><small>or choose a PNG, JPG, or WEBP · 5 MB max</small></>
                  )}
                </label>

                <div className="poly-url-row">
                  <span>or</span>
                  <input aria-label="Public image URL" type="url" placeholder="Paste a public image URL" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
                  <button type="button" onClick={usePublicImageUrl} disabled={!imageUrl.trim()}>Use URL</button>
                </div>
                <p className="poly-rights-note">Use an image you own or have permission to adapt.</p>
              </div>

              <fieldset className="poly-model-fieldset">
                <legend>04 · Pick your maker</legend>
                <div className="poly-model-grid">
                  <label className={model === "openai:gpt-image@2" ? "is-selected" : ""}>
                    <input type="radio" name="model" value="openai:gpt-image@2" checked={model === "openai:gpt-image@2"} onChange={() => setModel("openai:gpt-image@2")} />
                    <span className="poly-model-radio" /><span><strong>OpenAI Image</strong><small>Best match to a reference</small></span><em>Recommended</em>
                  </label>
                  <label className={model === "ideogram:4@0" ? "is-selected" : ""}>
                    <input type="radio" name="model" value="ideogram:4@0" checked={model === "ideogram:4@0"} onChange={() => setModel("ideogram:4@0")} />
                    <span className="poly-model-radio" /><span><strong>Ideogram 4</strong><small>Best for names + typography</small></span>
                  </label>
                </div>
                {model === "ideogram:4@0" && sourceImage ? <p className="poly-model-note">Ideogram 4 builds from your written brief; choose OpenAI Image to transform the uploaded reference directly.</p> : null}
              </fieldset>

              {error ? <p className="poly-error" role="alert"><span>!</span>{error}</p> : null}
              <button className="poly-create-button" type="submit" disabled={isGenerating || !appName.trim() || !context.trim()}>
                <span>{isGenerating ? `Creating 3 directions… ${progress}%` : result ? "Create 3 new variations" : "Create 3 variations"}</span>
                <span aria-hidden="true">{isGenerating ? "◌" : "✦"}</span>
              </button>
            </form>
          </div>

          <aside className="poly-preview-panel" aria-live="polite">
            <div className="poly-preview-head"><span>{result ? selectedOutput.label : "Preview"}</span><span>{dimensions}</span></div>
            <div className={`poly-preview-canvas${isGenerating ? " is-generating" : ""}${currentImage ? " has-result" : ""}`}>
              {currentImage ? (
                <><img className="poly-result-image" src={currentImage.imageURL} alt={`${selectedOutput.label} variation ${activeImage + 1} for ${appName}`} /><span className="poly-result-badge">Variation {activeImage + 1} of {result?.images.length}</span></>
              ) : isGenerating ? (
                <div className="poly-generating-state"><div className="poly-loader"><i /><i /><i /></div><strong>Exploring three<br />different directions.</strong><small>{progress}% · This can take a minute</small><div className="poly-progress"><span style={{ width: `${progress}%` }} /></div></div>
              ) : sourceImage ? (
                <div className="poly-source-preview"><img src={sourceImage} alt="Source image preview" /><span>Source ready</span></div>
              ) : (
                <div className="poly-preview-empty"><span className="poly-empty-mark">◇</span><strong>Your three ideas<br />will appear here.</strong><small>Clean background. Strong personality.</small></div>
              )}
            </div>
            {result && currentImage ? (
              <div className="poly-result-actions">
                <div className="poly-variation-strip">
                  {result.images.map((image, index) => (
                    <button type="button" key={image.imageUUID || image.imageURL} className={index === activeImage ? "is-active" : ""} onClick={() => setActiveImage(index)} aria-label={`Show variation ${index + 1}`}>
                      <img src={image.imageURL} alt="" />
                    </button>
                  ))}
                </div>
                <a href={currentImage.imageURL} target="_blank" rel="noreferrer">Open full size <span>↗</span></a>
                <button type="button" onClick={clearResult}>Clear result</button>
                <small>{result.model === "openai:gpt-image@2" ? "OpenAI Image 2" : "Ideogram 4"} · Three creative directions</small>
              </div>
            ) : (
              <div className="poly-preview-foot"><span><i className="dot-coral" /> 3 variations</span><span><i className="dot-blue" /> Ready to refine</span></div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
