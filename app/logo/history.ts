export type ModelId = "openai:gpt-image@2" | "ideogram:4@0";
export type OutputType = "logo" | "app-icon" | "mascot" | "poster" | "logo-with-name";

export type GeneratedImage = { imageURL: string; imageUUID?: string };

export type GenerationResult = {
  images: GeneratedImage[];
  model: ModelId;
  outputType: OutputType;
  width: number;
  height: number;
};

export type GenerationHistoryItem = {
  id: string;
  createdAt: number;
  appName: string;
  context: string;
  result: GenerationResult;
};

export const MAX_HISTORY_ITEMS = 250;
export const HISTORY_STORAGE_KEY = "unslop.logo-history.v1";
export const HISTORY_UPDATE_EVENT = "unslop:logo-history-updated";

const outputTypes: OutputType[] = ["logo", "app-icon", "mascot", "poster", "logo-with-name"];

function isHistoryItem(value: unknown): value is GenerationHistoryItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<GenerationHistoryItem>;
  const result = item.result;
  return typeof item.id === "string"
    && typeof item.createdAt === "number"
    && typeof item.appName === "string"
    && typeof item.context === "string"
    && Boolean(result)
    && Array.isArray(result?.images)
    && result.images.length > 0
    && result.images.every((image) => typeof image?.imageURL === "string")
    && (result.model === "openai:gpt-image@2" || result.model === "ideogram:4@0")
    && outputTypes.some((outputType) => outputType === result.outputType)
    && typeof result.width === "number"
    && typeof result.height === "number";
}

export function persistHistory(items: GenerationHistoryItem[]) {
  try {
    window.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(items.slice(0, MAX_HISTORY_ITEMS)));
    window.dispatchEvent(new Event(HISTORY_UPDATE_EVENT));
  } catch {
    // The current result still works if private browsing or storage quotas block persistence.
  }
}

export function historySnapshot() {
  return window.localStorage.getItem(HISTORY_STORAGE_KEY) ?? "";
}

export function serverHistorySnapshot() {
  return "";
}

export function subscribeToHistory(onStoreChange: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === HISTORY_STORAGE_KEY) onStoreChange();
  }
  window.addEventListener("storage", handleStorage);
  window.addEventListener(HISTORY_UPDATE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(HISTORY_UPDATE_EVENT, onStoreChange);
  };
}

export function parseHistory(value: string) {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(isHistoryItem).slice(0, MAX_HISTORY_ITEMS) : [];
  } catch {
    return [];
  }
}
