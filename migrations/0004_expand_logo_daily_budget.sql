CREATE TABLE logo_daily_generation_budget_next (
  budget_day TEXT PRIMARY KEY
    CHECK (length(budget_day) = 10),
  generation_count INTEGER NOT NULL DEFAULT 0
    CHECK (generation_count >= 0),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

INSERT INTO logo_daily_generation_budget_next (
  budget_day,
  generation_count,
  updated_at
)
SELECT
  budget_day,
  generation_count,
  updated_at
FROM logo_daily_generation_budget;

DROP TABLE logo_daily_generation_budget;

ALTER TABLE logo_daily_generation_budget_next
  RENAME TO logo_daily_generation_budget;
