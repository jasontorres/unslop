CREATE TABLE IF NOT EXISTS logo_daily_generation_budget (
  budget_day TEXT PRIMARY KEY
    CHECK (length(budget_day) = 10),
  generation_count INTEGER NOT NULL DEFAULT 0
    CHECK (generation_count BETWEEN 0 AND 100),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
