"use client";

/* eslint-disable @next/next/no-img-element */

import { ChangeEvent, DragEvent, FormEvent, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  HISTORY_STORAGE_KEY,
  HISTORY_UPDATE_EVENT,
  MAX_HISTORY_ITEMS,
  historySnapshot,
  parseHistory,
  persistHistory,
  serverHistorySnapshot,
  subscribeToHistory,
  type GenerationHistoryItem,
  type GenerationResult,
  type ModelId,
  type OutputType,
} from "./history";

type SearchResult = {
  title: string;
  imageUrl: string;
  thumbnailUrl: string;
  contextUrl: string;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const modelLabels: Record<ModelId, string> = {
  "openai:gpt-image@2": "Model 1",
  "ideogram:4@0": "Model 2",
};

const outputOptions: Array<{ id: OutputType; label: string; detail: string; glyph: string }> = [
  { id: "logo", label: "Logo", detail: "A standalone symbol", glyph: "◇" },
  { id: "app-icon", label: "Mobile app logo", detail: "Bold at small sizes", glyph: "▣" },
  { id: "mascot", label: "Mascot", detail: "A character with personality", glyph: "✦" },
  { id: "poster", label: "Poster + app name", detail: "A portrait brand poster", glyph: "▤" },
  { id: "logo-with-name", label: "Logo + name", detail: "A complete brand lockup", glyph: "◫" },
];

function outputLabel(outputType: OutputType) {
  return outputOptions.find((option) => option.id === outputType)?.label ?? "Logo";
}

function historyDate(timestamp: number) {
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(timestamp);
}

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("We couldn’t read that image."));
    reader.readAsDataURL(file);
  });
}

export function LogoMaker({ apiAccessKey }: { apiAccessKey: string }) {
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
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const historyValue = useSyncExternalStore(subscribeToHistory, historySnapshot, serverHistorySnapshot);
  const history = useMemo(() => parseHistory(historyValue), [historyValue]);

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
      const searchParams = new URLSearchParams({ letmein: apiAccessKey, q: appName.trim() });
      const response = await fetch(`/api/logo/search?${searchParams}`);
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
      const generateParams = new URLSearchParams({ letmein: apiAccessKey });
      const response = await fetch(`/api/logo/generate?${generateParams}`, {
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
      const historyItem: GenerationHistoryItem = {
        id: payload.images[0]?.imageUUID || crypto.randomUUID(),
        createdAt: Date.now(),
        appName: appName.trim(),
        context: context.trim(),
        result: payload,
      };
      const nextHistory = [historyItem, ...history.filter((item) => item.id !== historyItem.id)].slice(0, MAX_HISTORY_ITEMS);
      persistHistory(nextHistory);
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

  function restoreHistoryItem(item: GenerationHistoryItem) {
    setAppName(item.appName);
    setContext(item.context);
    setOutputType(item.result.outputType);
    setModel(item.result.model);
    setResult(item.result);
    setActiveImage(0);
    setProgress(100);
    setError("");
    setIsHistoryOpen(false);
  }

  function clearHistory() {
    setIsHistoryOpen(false);
    window.localStorage.removeItem(HISTORY_STORAGE_KEY);
    window.dispatchEvent(new Event(HISTORY_UPDATE_EVENT));
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
          <Link href="/logo/history">History</Link>
        </nav>
        <p className="topbar-context">One focused direction</p>
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
                    <span className="poly-model-radio" /><span><strong>Model 1</strong><small>Best match to a reference</small></span><em>Recommended</em>
                  </label>
                  <label className={model === "ideogram:4@0" ? "is-selected" : ""}>
                    <input type="radio" name="model" value="ideogram:4@0" checked={model === "ideogram:4@0"} onChange={() => setModel("ideogram:4@0")} />
                    <span className="poly-model-radio" /><span><strong>Model 2</strong><small>Best for names + typography</small></span>
                  </label>
                </div>
                {model === "ideogram:4@0" && sourceImage ? <p className="poly-model-note">Model 2 builds from your written brief; choose Model 1 to transform the uploaded reference directly.</p> : null}
              </fieldset>

              {error ? <p className="poly-error" role="alert"><span>!</span>{error}</p> : null}
              <button className="poly-create-button" type="submit" disabled={isGenerating || !appName.trim() || !context.trim()}>
                <span>{isGenerating ? `Creating a direction… ${progress}%` : result ? "Create a new variation" : "Create a variation"}</span>
                <span aria-hidden="true">{isGenerating ? "◌" : "✦"}</span>
              </button>
              <p className="poly-showcase-note">Generated images may appear in the community showcase.</p>
            </form>
          </div>

          <aside className="poly-preview-panel" aria-live="polite">
            <div className="poly-preview-head">
              <span>{result ? selectedOutput.label : "Preview"}</span>
              <span className="poly-preview-tools">
                <span>{dimensions}</span>
                <Link href="/logo/history">Browse all</Link>
                <button type="button" onClick={() => setIsHistoryOpen((value) => !value)} aria-expanded={isHistoryOpen} aria-controls="logo-history">
                  History{history.length ? ` · ${history.length}` : ""}
                </button>
              </span>
            </div>
            {isHistoryOpen ? (
              <section className="poly-history-panel" id="logo-history" aria-label="Generation history">
                <div className="poly-history-head">
                  <div><strong>Generation history</strong><small>Saved only in this browser</small></div>
                  {history.length ? <button type="button" onClick={clearHistory}>Clear all</button> : null}
                </div>
                {history.length ? (
                  <div className="poly-history-list">
                    {history.map((item) => (
                      <button className="poly-history-item" type="button" key={item.id} onClick={() => restoreHistoryItem(item)}>
                        <img src={item.result.images[0].imageURL} alt="" />
                        <span>
                          <strong>{item.appName}</strong>
                          <small>{outputLabel(item.result.outputType)} · {modelLabels[item.result.model]} · {historyDate(item.createdAt)}</small>
                          <em>{item.context}</em>
                        </span>
                        <b aria-hidden="true">→</b>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="poly-history-empty"><span>◇</span><strong>No saved generations yet</strong><small>Your next result will be saved here automatically.</small></div>
                )}
              </section>
            ) : null}
            <div className={`poly-preview-canvas${isGenerating ? " is-generating" : ""}${currentImage ? " has-result" : ""}`}>
              {currentImage ? (
                <><img className="poly-result-image" src={currentImage.imageURL} alt={`${selectedOutput.label} variation ${activeImage + 1} for ${appName}`} /><span className="poly-result-badge">Variation {activeImage + 1} of {result?.images.length}</span></>
              ) : isGenerating ? (
                <div className="poly-generating-state"><div className="poly-loader"><i /><i /><i /></div><strong>Creating one<br />focused direction.</strong><small>{progress}% · This can take a minute</small><div className="poly-progress"><span style={{ width: `${progress}%` }} /></div></div>
              ) : sourceImage ? (
                <div className="poly-source-preview"><img src={sourceImage} alt="Source image preview" /><span>Source ready</span></div>
              ) : (
                <div className="poly-preview-empty"><span className="poly-empty-mark">◇</span><strong>Your idea<br />will appear here.</strong><small>Clean background. Strong personality.</small></div>
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
                <small>{modelLabels[result.model]} · One focused direction</small>
              </div>
            ) : (
              <div className="poly-preview-foot"><span><i className="dot-coral" /> 1 variation</span><span><i className="dot-blue" /> Ready to refine</span></div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
