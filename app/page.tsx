"use client";

import { ChangeEvent, DragEvent, FormEvent, useEffect, useMemo, useRef, useState } from "react";

type ModelId = "openai:gpt-image@2" | "ideogram:4@0";

type GenerationResult = {
  imageURL: string;
  imageUUID?: string;
  cost?: number;
  model: ModelId;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("We couldn’t read that image."));
    reader.readAsDataURL(file);
  });
}

export default function Home() {
  const [appName, setAppName] = useState("");
  const [context, setContext] = useState("");
  const [model, setModel] = useState<ModelId>("openai:gpt-image@2");
  const [sourceImage, setSourceImage] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GenerationResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const googleSearchUrl = useMemo(() => {
    const query = appName.trim() ? `${appName.trim()} app logo mascot` : "app logo mascot reference";
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
      const dataUrl = await fileToDataUrl(file);
      setSourceImage(dataUrl);
      setSourceName(file.name);
      setImageUrl("");
      setResult(null);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "We couldn’t read that image.");
    }
  }

  function usePublicImageUrl() {
    setError("");
    try {
      const parsed = new URL(imageUrl.trim());
      if (parsed.protocol !== "https:") throw new Error();
      setSourceImage(parsed.toString());
      setSourceName(parsed.hostname);
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
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          appName: appName.trim(),
          context: context.trim(),
          model,
          sourceImage: sourceImage || undefined,
        }),
      });
      const payload = (await response.json()) as GenerationResult & { error?: string };
      if (!response.ok || !payload.imageURL) {
        throw new Error(payload.error || "The image model didn’t return a result. Try again.");
      }
      setProgress(100);
      setResult(payload);
    } catch (reason) {
      setProgress(0);
      setError(reason instanceof Error ? reason.message : "Something went wrong while creating your mascot.");
    } finally {
      setIsGenerating(false);
    }
  }

  function resetStudio() {
    setResult(null);
    setProgress(0);
    setSourceImage("");
    setSourceName("");
    setImageUrl("");
    setError("");
  }

  return (
    <main className="poly-page">
      <nav className="poly-nav" aria-label="Main navigation">
        <a className="poly-brand" href="#top" aria-label="Facet home">
          <span className="poly-brand-gem" aria-hidden="true" />
          <span>facet</span>
        </a>
        <p>Low-poly identity studio</p>
        <a className="poly-nav-link" href="#studio">Make a mascot <span aria-hidden="true">↘</span></a>
      </nav>

      <section className="poly-hero" id="top">
        <div className="poly-hero-copy">
          <p className="poly-eyebrow"><span>✦</span> Image in. Character out.</p>
          <h1>Turn any idea into a <em>tiny icon.</em></h1>
          <p className="poly-deck">Find a reference, add a little context, and shape it into a low-poly cartoon mascot ready for your app.</p>
          <a className="poly-hero-cta" href="#studio">Start with a reference <span>↓</span></a>
        </div>
        <div className="poly-hero-art" aria-label="Colorful low-poly fox mascot example">
          <div className="poly-orbit poly-orbit-one" />
          <div className="poly-orbit poly-orbit-two" />
          <div className="poly-fox">
            <span className="fox-ear fox-ear-left" />
            <span className="fox-ear fox-ear-right" />
            <span className="fox-face" />
            <span className="fox-cheek fox-cheek-left" />
            <span className="fox-cheek fox-cheek-right" />
            <span className="fox-eye fox-eye-left" />
            <span className="fox-eye fox-eye-right" />
            <span className="fox-nose" />
          </div>
          <span className="poly-spark spark-one">✦</span>
          <span className="poly-spark spark-two">✦</span>
          <span className="poly-sticker">100%<br />your vibe</span>
        </div>
      </section>

      <section className="poly-studio" id="studio">
        <div className="poly-section-head">
          <div>
            <p className="poly-step-kicker">Three small steps</p>
            <h2>Build your character</h2>
          </div>
          <p>Start with the clearest image you can find. We’ll handle the angles.</p>
        </div>

        <div className="poly-workbench">
          <div className="poly-form-panel">
            <div className="poly-form-head">
              <span>01</span>
              <div><strong>Give us the idea</strong><small>The useful bits, nothing more.</small></div>
              <span className="poly-status">{result ? "Complete" : isGenerating ? "Rendering" : "In progress"}</span>
            </div>
            <form className="poly-form" onSubmit={handleSubmit}>
              <div className="poly-field-grid">
                <label>
                  <span>App name</span>
                  <input
                    name="appName"
                    placeholder="e.g. Acorn"
                    value={appName}
                    onChange={(event) => setAppName(event.target.value)}
                    maxLength={60}
                    autoComplete="organization"
                    required
                  />
                </label>
                <label>
                  <span>Short context</span>
                  <textarea
                    name="context"
                    placeholder="A friendly habit tracker for busy people"
                    value={context}
                    onChange={(event) => setContext(event.target.value)}
                    rows={3}
                    maxLength={240}
                    required
                  />
                  <small>What it does, who it’s for, and the feeling to capture.</small>
                </label>
              </div>

              <div className="poly-source-block">
                <div className="poly-source-row">
                  <div>
                    <span className="poly-label">02 · Find a source image</span>
                    <p>Already exists? Start with the clearest version you can find.</p>
                  </div>
                  <a className="poly-search-button" href={googleSearchUrl} target="_blank" rel="noreferrer">
                    Search Google Images <span>↗</span>
                  </a>
                </div>

                <label
                  className={`poly-dropzone${isDragging ? " is-dragging" : ""}${sourceImage ? " has-source" : ""}`}
                  onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }}
                  onDragOver={(event) => event.preventDefault()}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => void acceptFile(event.target.files?.[0])}
                  />
                  {sourceImage ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={sourceImage} alt="Selected source" />
                      <span className="poly-source-meta"><strong>{sourceName || "Source image"}</strong><small>Click or drop to replace</small></span>
                    </>
                  ) : (
                    <>
                      <span className="poly-upload-icon">↥</span>
                      <strong>Drop a source image here</strong>
                      <small>or choose a PNG, JPG, or WEBP · 5 MB max</small>
                    </>
                  )}
                </label>

                <div className="poly-url-row">
                  <span>or</span>
                  <input
                    aria-label="Public image URL"
                    type="url"
                    placeholder="Paste a public image URL"
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                  />
                  <button type="button" onClick={usePublicImageUrl} disabled={!imageUrl.trim()}>Use URL</button>
                </div>
              </div>

              <fieldset className="poly-model-fieldset">
                <legend>03 · Pick your maker</legend>
                <div className="poly-model-grid">
                  <label className={model === "openai:gpt-image@2" ? "is-selected" : ""}>
                    <input type="radio" name="model" value="openai:gpt-image@2" checked={model === "openai:gpt-image@2"} onChange={() => setModel("openai:gpt-image@2")} />
                    <span className="poly-model-radio" />
                    <span><strong>OpenAI Image</strong><small>Best match to a reference</small></span>
                    <em>Recommended</em>
                  </label>
                  <label className={model === "ideogram:4@0" ? "is-selected" : ""}>
                    <input type="radio" name="model" value="ideogram:4@0" checked={model === "ideogram:4@0"} onChange={() => setModel("ideogram:4@0")} />
                    <span className="poly-model-radio" />
                    <span><strong>Ideogram 4</strong><small>Best for text + symbols</small></span>
                  </label>
                </div>
                {model === "ideogram:4@0" && sourceImage ? <p className="poly-model-note">Ideogram 4 builds from your written brief; choose OpenAI Image to transform the uploaded reference directly.</p> : null}
              </fieldset>

              {error ? <p className="poly-error" role="alert"><span>!</span>{error}</p> : null}

              <button className="poly-create-button" type="submit" disabled={isGenerating || !appName.trim() || !context.trim()}>
                <span>{isGenerating ? `Shaping polygons… ${progress}%` : result ? "Make another version" : "Create my mascot"}</span>
                <span aria-hidden="true">{isGenerating ? "◌" : "✦"}</span>
              </button>
            </form>
          </div>

          <aside className="poly-preview-panel" aria-live="polite">
            <div className="poly-preview-head">
              <span>{result ? `${appName || "Your"} mascot` : "Preview"}</span>
              <span>1024 × 1024</span>
            </div>
            <div className={`poly-preview-canvas${isGenerating ? " is-generating" : ""}${result ? " has-result" : ""}`}>
              {result ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="poly-result-image" src={result.imageURL} alt={`Low-poly cartoon mascot generated for ${appName}`} />
                  <span className="poly-result-badge">Freshly faceted</span>
                </>
              ) : isGenerating ? (
                <div className="poly-generating-state">
                  <div className="poly-loader"><i /><i /><i /></div>
                  <strong>Finding the character<br />inside the shape.</strong>
                  <small>{progress}% · This can take a minute</small>
                  <div className="poly-progress"><span style={{ width: `${progress}%` }} /></div>
                </div>
              ) : sourceImage ? (
                <div className="poly-source-preview">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sourceImage} alt="Source image preview" />
                  <span>Source ready</span>
                </div>
              ) : (
                <div className="poly-preview-empty">
                  <span className="poly-empty-mark">◇</span>
                  <strong>Your new sidekick<br />will appear here.</strong>
                  <small>Clean background. Big personality.</small>
                </div>
              )}
            </div>
            {result ? (
              <div className="poly-result-actions">
                <a href={result.imageURL} target="_blank" rel="noreferrer">Open full size <span>↗</span></a>
                <button type="button" onClick={resetStudio}>Start fresh</button>
                <small>{result.model === "openai:gpt-image@2" ? "OpenAI Image 2" : "Ideogram 4"}{typeof result.cost === "number" ? ` · $${result.cost.toFixed(3)}` : ""}</small>
              </div>
            ) : (
              <div className="poly-preview-foot">
                <span><i className="dot-coral" /> Low-poly cartoon</span>
                <span><i className="dot-blue" /> Square export</span>
              </div>
            )}
          </aside>
        </div>
      </section>

      <footer className="poly-footer">
        <a className="poly-brand" href="#top"><span className="poly-brand-gem" />facet</a>
        <p>A small studio for turning familiar shapes into unforgettable app characters.</p>
        <span>Powered by Runware</span>
      </footer>
    </main>
  );
}
