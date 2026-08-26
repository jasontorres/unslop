CREATE TABLE IF NOT EXISTS logo_browser_generation_limits (
  browser_id TEXT PRIMARY KEY
    CHECK (length(browser_id) = 36),
  generation_count INTEGER NOT NULL DEFAULT 0
    CHECK (generation_count BETWEEN 0 AND 10),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE INDEX IF NOT EXISTS logo_browser_generation_limits_updated_at_idx
  ON logo_browser_generation_limits (updated_at);
