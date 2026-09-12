// Original concepts, copy, layouts, and SVG illustrations by GPT 6.
// Shared infrastructure is limited to the gallery's DesignCanvas wrapper.
const { useState, useRef, useEffect } = React;

function ODArrow({ diagonal = false }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ODDialog({ title, onClose, children }) {
  const ref = useRef(null);
  const opener = useRef(document.activeElement);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
      if (opener.current?.isConnected) opener.current.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="od-dialog"
      aria-label={title}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="od-dialog-head">
        <h2>{title}</h2>
        <button aria-label="Close dialog" onClick={onClose}>
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}

const odFilms = [
  {
    title: "The shape of elsewhere",
    genre: "A dream in three acts",
    time: "18:30",
    duration: "92 min",
    director: "Mara Sato",
    color: "#f16b35",
  },
  {
    title: "Radio for the moon",
    genre: "For the beautifully lost",
    time: "20:15",
    duration: "108 min",
    director: "Eli Navarro",
    color: "#b8b8dd",
  },
  {
    title: "Nothing stays still",
    genre: "A little less predictable",
    time: "22:30",
    duration: "84 min",
    director: "Nora Vale",
    color: "#a6c79b",
  },
];

function OffscriptArt({ color }) {
  return (
    <svg
      viewBox="0 0 540 530"
      role="img"
      aria-label="Original cinema poster: an optical eye made from offset black rings on a vivid field"
    >
      <rect width="540" height="530" fill={color} />
      <g
        fill="none"
        stroke="#21221b"
        strokeWidth="16"
        transform="rotate(-23 270 265)"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <ellipse
            key={i}
            cx="270"
            cy="265"
            rx={44 + i * 23}
            ry={48 + i * 16}
          />
        ))}
      </g>
      <path d="m0 364 540-140v76L0 440Z" fill={color} />
      <ellipse
        cx="271"
        cy="263"
        rx="51"
        ry="75"
        fill="#21221b"
        transform="rotate(28 271 263)"
      />
      <circle cx="288" cy="244" r="13" fill="#f6f4c9" />
      <g fill="#21221b" fontFamily="monospace" fontSize="11">
        <text x="25" y="34">
          OFFSCRIPT PRESENTS / 001
        </text>
        <text x="25" y="502">
          LOOK A LITTLE LONGER.
        </text>
        <text x="435" y="502">
          35 MM ↗
        </text>
      </g>
    </svg>
  );
}

function ODOffscript() {
  const [film, setFilm] = useState(0);
  const [dialog, setDialog] = useState(null);
  const [reminder, setReminder] = useState(false);
  const current = odFilms[film];
  return (
    <main className="od-design os">
      <header className="os-header">
        <a
          className="os-logo"
          href="#offscript-top"
          aria-label="Offscript home"
        >
          offscript<span>✳</span>
        </a>
        <span className="od-mono">
          AN INDEPENDENT PICTURE HOUSE
          <br />
          OPEN MINDS. LIGHTS DOWN.
        </span>
        <nav aria-label="Cinema">
          <button onClick={() => setDialog("programme")}>
            The programme <span>↗</span>
          </button>
          <button onClick={() => setDialog("about")}>
            Our little cinema <span>↗</span>
          </button>
        </nav>
        <span className="os-open">
          <i /> EVERY NIGHT, SOMETHING ELSE
        </span>
      </header>
      <section className="os-hero" id="offscript-top">
        <div className="os-copy">
          <div className="od-mono os-kicker">
            <span>SEASON 04 — THE UNEXPECTED</span>
            <span>SEP / OCT</span>
          </div>
          <h1>
            Stay for
            <br />
            the <em>strange.</em>
          </h1>
          <p>
            Films that follow you home.
            <br />
            For people who take the long way there.
          </p>
          <button className="os-cta" onClick={() => setDialog("programme")}>
            Find your next favourite <ODArrow diagonal />
          </button>
          <div className="os-footnote">
            <span className="os-star">✳</span>
            <span>
              Small cinema. Wide open world.
              <br />
              <b>52 seats. No bad ones.</b>
            </span>
          </div>
        </div>
        <div className="os-poster">
          <OffscriptArt color={current.color} />
          <div className="os-poster-caption">
            <span className="od-mono">TONIGHT’S OPENING FRAME</span>
            <strong>{current.title}</strong>
            <span>
              {current.director} · {current.duration}
            </span>
          </div>
          <span className="os-ticket">
            TAKE A CHANCE
            <br />
            <b>ON SOMETHING.</b>
          </span>
        </div>
      </section>
      <section className="os-programme" aria-label="Tonight’s screenings">
        <div className="os-tonight">
          <span className="od-mono">THE LIGHTS GO DOWN</span>
          <h2>
            Tonight<span>↘</span>
          </h2>
        </div>
        {odFilms.map((item, i) => (
          <button
            key={item.title}
            className={film === i ? "os-screening selected" : "os-screening"}
            aria-pressed={film === i}
            onClick={() => {
              setFilm(i);
              setReminder(false);
            }}
          >
            <span className="od-mono">
              {item.time}
              <span>0{i + 1}</span>
            </span>
            <strong>{item.title}</strong>
            <small>{item.genre}</small>
            <span className="os-screening-arrow">↗</span>
          </button>
        ))}
      </section>
      <footer className="os-bottom od-mono">
        <span>GOOD FILMS DESERVE GOOD COMPANY.</span>
        <span>EST. FOR THE CURIOUS — NOT THE ALGORITHM</span>
        <span>● ALL WELCOME</span>
      </footer>
      {dialog && (
        <ODDialog
          title={
            dialog === "about"
              ? "A room for the unexpected."
              : "Make a night of it."
          }
          onClose={() => setDialog(null)}
        >
          {dialog === "about" ? (
            <>
              <p>
                Offscript is an imagined, 52-seat independent cinema with a soft
                spot for strange stories, first-time filmmakers, and
                conversations after the credits.
              </p>
              <p>Every screening in this interactive design is fictional.</p>
            </>
          ) : (
            <>
              <p>
                Tonight at Offscript. Choose a film to keep a reminder in this
                preview.
              </p>
              <div className="od-choice-list">
                {odFilms.map((item, i) => (
                  <button
                    key={item.title}
                    aria-pressed={film === i}
                    onClick={() => {
                      setFilm(i);
                      setReminder(false);
                    }}
                  >
                    <span>{item.time}</span>
                    <strong>{item.title}</strong>
                    <span>{film === i ? "●" : "○"}</span>
                  </button>
                ))}
              </div>
              <button className="od-primary" onClick={() => setReminder(true)}>
                {reminder
                  ? "Reminder saved for this visit ✓"
                  : `Save ${current.time} screening`}
              </button>
              <p role="status">
                {reminder
                  ? `${current.title} is on your list. This is a demo reminder, not a ticket reservation.`
                  : "No payment or booking is made."}
              </p>
            </>
          )}
        </ODDialog>
      )}
    </main>
  );
}

const odSources = [
  {
    title: "The city at walking speed",
    author: "Leah Moreno",
    kind: "Essay",
    year: "2025",
    heading: "The distance between places",
    quote:
      "A neighbourhood is not a collection of buildings. It is the space between the things we do every day.",
    excerpt:
      "To understand a city, begin with a walk. Notice where a conversation can pause, where a tree interrupts the pavement, where a bench catches the last of the afternoon light.",
    note: "Proximity is an emotional measure, too. Connect this to the idea of a familiar route.",
    color: "#f2e5b9",
  },
  {
    title: "Small rituals, shared streets",
    author: "Owen Park",
    kind: "Field notes",
    year: "2024",
    heading: "A place to linger",
    quote: "The best public spaces make room for an activity nobody planned.",
    excerpt:
      "The corner shop opens at seven. By eight, three neighbours have stopped to talk. Nothing has been designed as a gathering place, and yet a gathering place has appeared.",
    note: "Look for the unplanned meeting places in the next field visit.",
    color: "#dfdfed",
  },
  {
    title: "An atlas of ordinary places",
    author: "Ida Chen",
    kind: "Book",
    year: "2023",
    heading: "What a map leaves out",
    quote:
      "Every shortcut is a tiny act of authorship. We draw the city again with our feet.",
    excerpt:
      "Official maps show streets, boundaries, and parcels. Our mental maps remember the smell of a bakery, the quiet side of a square, and a doorway where we waited for a friend.",
    note: "A map of memories could be more useful than a map of distances.",
    color: "#d9e8dc",
  },
];

function ODMarginalia() {
  const [selected, setSelected] = useState(0);
  const [tab, setTab] = useState("Sources");
  const [query, setQuery] = useState("");
  const [note, setNote] = useState("");
  const [draft, setDraft] = useState("");
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState("");
  const source = odSources[selected];
  const matches = odSources
    .map((item, index) => ({ ...item, index }))
    .filter((item) =>
      `${item.title} ${item.author} ${item.kind}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    );
  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(
        `${source.author}. “${source.title}.” ${source.year}. Fictional reference.`,
      );
      setCopied("Citation copied");
    } catch {
      setCopied(`${source.author}. “${source.title}.” ${source.year}.`);
    }
  };
  return (
    <main className="od-design mg">
      <aside className="mg-rail">
        <div className="mg-brand">
          <span>
            m<span>′</span>
          </span>
          marginalia
        </div>
        <div className="mg-workspace">
          <span className="mg-avatar">JK</span>
          <div>
            Jules’ workspace<small>A place for loose threads</small>
          </div>
        </div>
        <span className="od-mono mg-rail-label">YOUR DESK</span>
        <button
          className={tab === "Sources" ? "mg-rail-active" : undefined}
          aria-pressed={tab === "Sources"}
          onClick={() => {
            setQuery("");
            setTab("Sources");
          }}
        >
          ◫ <span>The library</span>
          <small>03</small>
        </button>
        <button
          className={tab === "Connections" ? "mg-rail-active" : undefined}
          aria-pressed={tab === "Connections"}
          onClick={() => setTab("Connections")}
        >
          ⌘ <span>Connections</span>
          <small>03</small>
        </button>
        <button
          className={tab === "Notes" ? "mg-rail-active" : undefined}
          aria-pressed={tab === "Notes"}
          onClick={() => setTab("Notes")}
        >
          ✎ <span>My notes</span>
          <small>{note ? "02" : "01"}</small>
        </button>
        <div className="mg-collection">
          <span className="od-mono">ON THE SHELF</span>
          <button
            onClick={() => {
              setTab("Sources");
              setQuery("");
            }}
          >
            <i /> Human-scale cities <small>3</small>
          </button>
          <p>
            A collection for thinking
            <br />
            out loud, slowly.
          </p>
        </div>
        <div className="mg-rail-bottom">
          <span className="mg-flower">✳</span>
          <p>
            Good ideas start
            <br />
            in the margins.
          </p>
          <span className="od-mono">KEEP FOLLOWING THE THREAD.</span>
        </div>
      </aside>
      <div className="mg-main">
        <header className="mg-top">
          <span>
            Library <span>/</span> <b>Human-scale cities</b>
          </span>
          <label className="mg-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Find a source…"
              aria-label="Find a source"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setTab("Sources");
              }}
            />
          </label>
        </header>
        <section className="mg-heading">
          <div>
            <span className="od-mono">COLLECTION 001 · PERSONAL RESEARCH</span>
            <h1>
              Human-scale cities<span>↙</span>
            </h1>
            <p>On belonging, everyday rituals, and the places in between.</p>
          </div>
          <button
            className="mg-add"
            onClick={() => {
              setDraft(note);
              setEditing(true);
            }}
          >
            + Add a note
          </button>
        </section>
        <div
          className="mg-tabs"
          role="tablist"
          aria-label="Research views"
          onKeyDown={(event) => {
            const tabs = ["Sources", "Connections", "Notes"];
            const index = tabs.indexOf(tab);
            const next = {
              ArrowRight: (index + 1) % 3,
              ArrowLeft: (index + 2) % 3,
              Home: 0,
              End: 2,
            }[event.key];
            if (next === undefined) return;
            event.preventDefault();
            setTab(tabs[next]);
            event.currentTarget.querySelectorAll('[role="tab"]')[next].focus();
          }}
        >
          {["Sources", "Connections", "Notes"].map((item, i) => (
            <button
              key={item}
              role="tab"
              aria-selected={tab === item}
              tabIndex={tab === item ? 0 : -1}
              aria-controls="mg-panel"
              id={`mg-tab-${item}`}
              onClick={() => setTab(item)}
            >
              {item}
              <span>{i === 2 ? (note ? "02" : "01") : "03"}</span>
            </button>
          ))}
          <span>JUST YOU & YOUR CURIOSITY</span>
        </div>
        <div
          id="mg-panel"
          role="tabpanel"
          aria-labelledby={`mg-tab-${tab}`}
          className="mg-panel"
        >
          {tab === "Sources" ? (
            <>
              <div className="mg-source-list">
                <div className="mg-list-label od-mono">
                  3 SOURCES <span>RECENT FIRST ↓</span>
                </div>
                {matches.length ? (
                  matches.map((item) => (
                    <button
                      key={item.title}
                      aria-pressed={selected === item.index}
                      onClick={() => {
                        setSelected(item.index);
                        setCopied("");
                      }}
                      className={
                        selected === item.index
                          ? "mg-source selected"
                          : "mg-source"
                      }
                    >
                      <div
                        className="mg-book"
                        style={{ background: item.color }}
                      >
                        <span>{item.kind === "Book" ? "Aa" : "¶"}</span>
                      </div>
                      <div>
                        <span className="od-mono">
                          {item.kind} · {item.year}
                        </span>
                        <strong>{item.title}</strong>
                        <small>{item.author}</small>
                      </div>
                      <span className="mg-source-dot">
                        {selected === item.index ? "●" : "↗"}
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="mg-empty">
                    No sources found. Try “city” or “Ida”.
                  </p>
                )}
                <div className="mg-source-note">
                  <span>↳</span>
                  <p>
                    You don’t need more tabs.
                    <br />
                    You need a thread to follow.
                  </p>
                </div>
              </div>
              <article className="mg-reader">
                <div className="mg-reader-meta od-mono">
                  <span>READING ROOM / 0{selected + 1}</span>
                  <span>6 MIN READ</span>
                </div>
                <span className="mg-reader-kind">
                  {source.kind} · {source.author}
                </span>
                <h2>{source.heading}</h2>
                <p>{source.excerpt}</p>
                <blockquote>
                  <mark>{source.quote}</mark>
                  <span className="mg-annotation">01</span>
                </blockquote>
                <p>
                  The details are small. Their effect is not. They turn the
                  space we move through into a place we feel part of.
                </p>
                <div className="mg-margin-note">
                  <span className="od-mono">↳ A THOUGHT TO KEEP</span>
                  <p>{note || source.note}</p>
                </div>
                <div className="mg-reader-bottom">
                  <span className="od-mono">FICTIONAL RESEARCH SAMPLE</span>
                  <button onClick={copyCitation}>Copy citation ↗</button>
                </div>
                <p className="mg-copy-status" role="status">
                  {copied}
                </p>
              </article>
            </>
          ) : tab === "Connections" ? (
            <section className="mg-alternative">
              <span className="od-mono">FOLLOW THE THREAD</span>
              <h2>Three ways of seeing a place.</h2>
              {odSources.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setSelected(i);
                    setTab("Sources");
                  }}
                >
                  <span>0{i + 1}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.quote}</p>
                  </div>
                  <ODArrow />
                </button>
              ))}
            </section>
          ) : (
            <section className="mg-alternative">
              <span className="od-mono">NOT FINISHED. JUST NOTICED.</span>
              <h2>Thoughts in the margins.</h2>
              <blockquote>{source.note}</blockquote>
              {note && <blockquote>{note}</blockquote>}
              <button
                className="mg-add"
                onClick={() => {
                  setDraft(note);
                  setEditing(true);
                }}
              >
                Write a thought +
              </button>
            </section>
          )}
        </div>
        <footer className="mg-bottom">
          <span>
            <i /> All changes stay in this preview
          </span>
          <span className="od-mono">A LITTLE ORDER. ROOM FOR WONDER.</span>
        </footer>
      </div>
      {editing && (
        <ODDialog title="A thought to keep" onClose={() => setEditing(false)}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNote(draft.trim());
              setEditing(false);
            }}
          >
            <label className="od-field">
              Your note
              <textarea
                autoFocus
                required
                maxLength={500}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="What does this connect to?"
              />
            </label>
            <button className="od-primary" type="submit">
              Keep this thought
            </button>
          </form>
        </ODDialog>
      )}
    </main>
  );
}

function ODCeramic({ type = "vase" }) {
  // The objects are hand-drawn vector studies, not product photographs.
  return (
    <svg
      viewBox="0 0 360 290"
      role="img"
      aria-label={
        type === "vase"
          ? "Original illustration of a terracotta loop vase"
          : type === "stool"
            ? "Original illustration of a green sculptural wooden stool"
            : "Original illustration of a butter-yellow mushroom lamp"
      }
    >
      <ellipse cx="181" cy="257" rx="105" ry="13" fill="#242e5617" />
      {type === "vase" ? (
        <>
          <path
            d="M132 107c-37 3-65 33-65 69s27 64 62 64h39v-30h-36c-23 0-39-14-39-35 0-22 16-39 39-40Z"
            fill="#a8492a"
          />
          <path
            d="M137 55h88l-6 89c4 25 27 40 30 68 3 33-24 47-65 47s-68-14-65-47c3-28 27-43 30-68Z"
            fill="#c76740"
          />
          <path
            d="M197 64h26l-6 81c4 25 28 42 29 67 2 26-15 38-39 43 17-21 14-50-1-76-10-18-17-34-15-58Z"
            fill="#b35330"
          />
          <ellipse cx="181" cy="56" rx="45" ry="10" fill="#e58d60" />
          <ellipse cx="181" cy="56" rx="33" ry="5" fill="#703a2b" />
          <path
            d="M157 89c1 36-3 63-18 88"
            fill="none"
            stroke="#e29369"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </>
      ) : type === "stool" ? (
        <>
          <path
            d="m111 155 13 100h28l9-105m48 0 8 105h28l13-100"
            fill="#3a5839"
          />
          <path d="m125 155 8 94h12l5-94m72 0 6 94h12l7-94" fill="#52784b" />
          <path d="M101 99q79-25 158 0l11 57q-89 40-178 0Z" fill="#688756" />
          <ellipse cx="181" cy="100" rx="80" ry="27" fill="#8caa74" />
          <ellipse
            cx="181"
            cy="100"
            rx="49"
            ry="16"
            fill="none"
            stroke="#688756"
          />
          <path
            d="M109 143q75 31 146 0"
            fill="none"
            stroke="#a2b88b"
            strokeWidth="2"
          />
        </>
      ) : (
        <>
          <path d="M170 137h24l14 101h-53Z" fill="#c6a657" />
          <ellipse cx="181" cy="240" rx="48" ry="12" fill="#b69547" />
          <ellipse cx="181" cy="235" rx="47" ry="11" fill="#e4c77b" />
          <path d="M79 144a102 91 0 0 1 204 0Z" fill="#e8cc84" />
          <ellipse cx="181" cy="143" rx="102" ry="14" fill="#b49a60" />
          <ellipse cx="181" cy="143" rx="70" ry="7" fill="#fbefba" />
          <path
            d="M100 117q14-39 55-49"
            fill="none"
            stroke="#f8e7ae"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

const odObjects = [
  {
    id: "vase",
    name: "A handle on things",
    detail: "Terracotta loop vase",
    category: "Objects",
    era: "STUDIO POTTERY / C. 1980",
    price: "€68",
    color: "#f2c5b5",
    description:
      "An expressive loop handle, warm terracotta, and small marks from a life well lived. A hand-drawn concept object, 24 cm tall.",
  },
  {
    id: "stool",
    name: "The good little stool",
    detail: "Painted solid-wood stool",
    category: "Seating",
    era: "SOLID TIMBER / C. 1970",
    price: "€145",
    color: "#e2e8d9",
    description:
      "A generous round seat on gently tapered legs. Moss-green painted timber with softened edges. A hand-drawn concept object, 42 cm tall.",
  },
  {
    id: "lamp",
    name: "A softer sort of light",
    detail: "Mushroom table lamp",
    category: "Lighting",
    era: "WARM METAL / C. 1965",
    price: "€120",
    color: "#dedaec",
    description:
      "A low dome, a slender stem, a warm pool of light. Butter-yellow metal with a gentle patina. A hand-drawn concept object, 32 cm tall.",
  },
];

function ODOddments() {
  const [category, setCategory] = useState("Everything");
  const [saved, setSaved] = useState([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [object, setObject] = useState(null);
  const toggle = (id) =>
    setSaved((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
  const objects = odObjects.filter(
    (item) =>
      (category === "Everything" || item.category === category) &&
      (!savedOnly || saved.includes(item.id)),
  );
  return (
    <main className="od-design om">
      <div className="om-strip od-mono">
        <span>LESS NEW STUFF. MORE GOOD STUFF.</span>
        <span>INDEPENDENT OBJECTS. SECOND CHAPTERS.</span>
        <span>BASED EVERYWHERE ↗</span>
      </div>
      <header className="om-header">
        <button
          className="om-logo"
          onClick={() => {
            setCategory("Everything");
            setSavedOnly(false);
          }}
        >
          oddments<span>®</span>
        </button>
        <p>
          A considered collection
          <br />
          of things worth keeping.
        </p>
        <button
          className="om-saved"
          aria-pressed={savedOnly}
          onClick={() => setSavedOnly(!savedOnly)}
        >
          {savedOnly ? "All objects" : "Your little collection"}{" "}
          <span>({saved.length.toString().padStart(2, "0")})</span>{" "}
          <ODArrow diagonal />
        </button>
      </header>
      <section className="om-intro">
        <div>
          <span className="od-mono">THE ALREADY-LOVED OBJECT CLUB</span>
          <h1>
            Good things.
            <br />
            <span>Again.</span>
            <svg viewBox="0 0 180 85" fill="none" aria-hidden="true">
              <path
                d="M6 53C70 8 163 3 168 33c6 33-133 64-137 26C27 24 124 9 162 19"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </h1>
        </div>
        <div className="om-intro-right">
          <div className="om-stamp">
            A LITTLE ODD.<span>1/1</span>A LOT TO LOVE.
          </div>
          <p>
            Not perfect. Better.
            <br />
            Objects with a past, looking for
            <br />
            someone with a little imagination.
          </p>
          <span className="od-mono">THE SEPTEMBER EDIT — 003 FINDS</span>
        </div>
      </section>
      <nav className="om-filters" aria-label="Object categories">
        <div>
          {["Everything", "Objects", "Seating", "Lighting"].map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
              {item === "Everything" && <span>03</span>}
            </button>
          ))}
        </div>
        <span className="od-mono">
          {savedOnly ? "YOUR SAVED OBJECTS" : "ONE OF EACH. ALWAYS."}{" "}
          <span>↓</span>
        </span>
      </nav>
      <section className="om-grid" aria-label="Available objects">
        {objects.length ? (
          objects.map((item, i) => (
            <article className="om-product" key={item.id}>
              <div
                className="om-product-image"
                style={{ background: item.color }}
              >
                <span className="om-number od-mono">
                  Nº 00{odObjects.indexOf(item) + 1}
                </span>
                <button
                  className="om-heart"
                  aria-label={`${saved.includes(item.id) ? "Unsave" : "Save"} ${item.name}`}
                  aria-pressed={saved.includes(item.id)}
                  onClick={() => toggle(item.id)}
                >
                  {saved.includes(item.id) ? "♥" : "♡"}
                </button>
                <button
                  className="om-object"
                  onClick={() => setObject(item)}
                  aria-label={`View ${item.name}`}
                >
                  <ODCeramic type={item.id} />
                </button>
                <span className="om-image-label od-mono">{item.era}</span>
                {i === 0 && (
                  <span className="om-small-stamp">
                    GOOD
                    <br />
                    AGAIN ↗
                  </span>
                )}
              </div>
              <button
                className="om-product-info"
                onClick={() => setObject(item)}
              >
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.detail}</small>
                </span>
                <span>
                  {item.price} <ODArrow diagonal />
                </span>
              </button>
            </article>
          ))
        ) : (
          <div className="om-empty">
            <h2>
              {savedOnly
                ? "Your next favourite is out there."
                : "Nothing in this corner yet."}
            </h2>
            <p>
              Save an object with the heart button to start your collection.
            </p>
            <button
              onClick={() => {
                setSavedOnly(false);
                setCategory("Everything");
              }}
            >
              Browse all three finds ↗
            </button>
          </div>
        )}
      </section>
      <footer className="om-bottom od-mono">
        <span>NOTHING MASS-PRODUCED ABOUT YOUR TASTE.</span>
        <span>ILLUSTRATED CONCEPT OBJECTS · NO CHECKOUT</span>
        <span>KEEP THE GOOD GOING ↗</span>
      </footer>
      {object && (
        <ODDialog title={object.name} onClose={() => setObject(null)}>
          <div
            className="om-dialog-object"
            style={{ background: object.color }}
          >
            <ODCeramic type={object.id} />
          </div>
          <p>{object.description}</p>
          <p>
            <strong>{object.price}</strong> · {object.era}
          </p>
          <button
            className="od-primary"
            aria-pressed={saved.includes(object.id)}
            onClick={() => toggle(object.id)}
          >
            {saved.includes(object.id)
              ? "Remove from your collection ♥"
              : "Save to your collection ♡"}
          </button>
          <p className="od-mono">CONCEPT STORE. NO PURCHASES ARE PROCESSED.</p>
        </ODDialog>
      )}
    </main>
  );
}

function ODBotanical() {
  return (
    <svg
      viewBox="0 0 520 600"
      role="img"
      aria-label="Original botanical study of fern fronds and an intricate underground root network"
    >
      <defs>
        <pattern
          id="od-bot-grid"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30 0H0V30"
            fill="none"
            stroke="#394c3710"
            strokeWidth=".7"
          />
        </pattern>
      </defs>
      <rect width="520" height="600" fill="url(#od-bot-grid)" />
      <g stroke="#344b32" fill="none">
        <path
          d="M249 377Q226 214 141 94M248 376Q270 195 363 55M248 375Q286 267 433 213M247 376Q182 274 65 235M249 377Q238 174 252 37"
          strokeWidth="3"
        />
        {Array.from({ length: 12 }, (_, i) => {
          const y = 103 + i * 20;
          const x = 255 + (325 - y) * 0.31;
          return (
            <g key={`r${i}`} transform={`translate(${x} ${y}) rotate(27)`}>
              <path
                d={`M0 0Q-51 -44 -62 -31Q-37 -4 0 0Q51 -37 64 -24Q35 1 0 0`}
                fill={i % 2 ? "#768563" : "#536b48"}
                strokeWidth=".6"
              />
            </g>
          );
        })}
        {Array.from({ length: 10 }, (_, i) => {
          const y = 130 + i * 22;
          const x = 151 + (y - 120) * 0.37;
          return (
            <g key={`l${i}`} transform={`translate(${x} ${y}) rotate(-36)`}>
              <path
                d="M0 0Q-48-35-55-22Q-31 3 0 0Q44-34 52-21Q25 3 0 0"
                fill={i % 2 ? "#768563" : "#536b48"}
                strokeWidth=".6"
              />
            </g>
          );
        })}
        {Array.from({ length: 8 }, (_, i) => (
          <g
            key={`c${i}`}
            transform={`translate(${250 - i * 0.7} ${68 + i * 27})`}
          >
            <path
              d="M0 0Q-33-28-38-17Q-21 3 0 0Q32-28 37-17Q20 3 0 0"
              fill="#72835b"
              strokeWidth=".5"
            />
          </g>
        ))}
        <path
          d="M23 377Q126 371 249 377T498 377"
          strokeDasharray="3 5"
          strokeWidth="1"
        />
        {Array.from({ length: 17 }, (_, i) => {
          const x = 38 + i * 27;
          const end = 437 + Math.sin(i * 2) * 34 + (i % 4) * 27;
          return (
            <g
              key={`root${i}`}
              stroke="#705844"
              strokeWidth={i % 3 === 0 ? "1.6" : ".8"}
            >
              <path
                d={`M249 377Q${x} 410 ${x + 8} ${end}q-12 25 ${i % 2 ? 16 : -20} 46`}
              />
              <path
                d={`M${x + 11} ${end - 15}q-27 8-32 30m30-17q29 10 32 34`}
              />
            </g>
          );
        })}
      </g>
      <g fill="#576046" fontFamily="monospace" fontSize="10">
        <text x="28" y="40">
          FIG. 01
        </text>
        <text x="390" y="40">
          DRYOPTERIS
        </text>
        <text x="342" y="348">
          WHAT WE SEE ↑
        </text>
        <text x="342" y="405">
          WHAT WE MISS ↓
        </text>
        <text x="28" y="579">
          A STUDY IN CONNECTION
        </text>
        <text x="438" y="579">
          1 : 4
        </text>
      </g>
    </svg>
  );
}

function ODUnderstory() {
  const [reading, setReading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [index, setIndex] = useState(false);
  return (
    <main className="od-design us">
      <header className="us-header">
        <svg
          className="us-mark"
          width="36"
          height="40"
          viewBox="0 0 36 40"
          aria-hidden="true"
        >
          <path
            d="M18 37V3M18 14Q5 14 5 4q13 0 13 10M18 23Q32 23 32 12q-14 0-14 11M18 32Q4 32 4 21q14 0 14 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="od-mono">
          A JOURNAL OF THE
          <br />
          MORE-THAN-HUMAN WORLD
        </span>
        <a
          href="#understory-top"
          className="us-logo"
          onClick={() => setReading(false)}
        >
          understory<span>↟</span>
        </a>
        <button onClick={() => setIndex(true)}>
          The field notes <span>↗</span>
        </button>
        <button
          className="us-bookmark"
          aria-pressed={saved}
          onClick={() => setSaved(!saved)}
        >
          {saved ? "Saved ✓" : "Keep this story +"}
        </button>
      </header>
      <div className="us-issue od-mono">
        <span>ISSUE 08 / THE UNSEEN</span>
        <span>LOOK CLOSER. THERE’S A WORLD DOWN THERE.</span>
        <span>AUTUMN 2026</span>
      </div>
      <section className="us-feature" id="understory-top">
        <div className="us-story">
          <span className="us-kicker">Ecology & other entanglements</span>
          <h1>
            The forest
            <br />
            doesn’t end
            <br />
            at the <em>floor.</em>
          </h1>
          <div className="us-rule" />
          <p className="us-deck">
            Beneath the quiet of a woodland is a world of exchange. An
            invitation to pay attention to what holds us all together.
          </p>
          <div className="us-author">
            <span>EL</span>
            <div>
              Words by Elin Lake
              <small>Illustrated field essay · 8 min read</small>
            </div>
          </div>
          <button className="us-read" onClick={() => setReading(!reading)}>
            {reading ? "Back to the cover" : "Follow the story underground"}
            <ODArrow diagonal />
          </button>
          <span className="us-page od-mono">
            01 — 08 <span>SCROLL SLOWLY. NOTICE MORE.</span>
          </span>
        </div>
        <figure className="us-plate">
          <ODBotanical />
          <figcaption>
            <span>Plate I. The visible is only the beginning.</span>
            <span className="od-mono">ORIGINAL BOTANICAL STUDY</span>
          </figcaption>
        </figure>
      </section>
      {reading ? (
        <article className="us-essay">
          <button className="us-back" onClick={() => setReading(false)}>
            ← Back to the cover
          </button>
          <span className="od-mono">01 / BELOW THE SURFACE</span>
          <h2>A different kind of busy.</h2>
          <p>
            At first, the woodland seems still. A fern leans into the light. A
            leaf lands without ceremony. Underfoot, yesterday’s fallen branches
            are becoming something else.
          </p>
          <p>
            Kneel down and the scale changes. The forest floor is layered with
            small lives and slow transformations. It asks for a different kind
            of attention: less interested in the tallest tree, more curious
            about what makes a tree possible.
          </p>
          <p>
            This is a fictional editorial sample about looking closely, written
            for the Understory design concept.
          </p>
          <button className="us-read" onClick={() => setSaved(!saved)}>
            {saved
              ? "Story kept in this preview ✓"
              : "Keep this essay for later +"}
            <ODArrow />
          </button>
        </article>
      ) : (
        <section className="us-bottom">
          <span className="od-mono">IN THIS ISSUE</span>
          <button onClick={() => setReading(true)}>
            <span>01</span>
            <strong>Below the surface</strong>
            <small>The world beneath our feet ↗</small>
          </button>
          <button onClick={() => setIndex(true)}>
            <span>02</span>
            <strong>A slower vocabulary</strong>
            <small>Learning to notice ↗</small>
          </button>
          <blockquote>
            “To look is one thing.
            <br />
            To notice is another.”
          </blockquote>
        </section>
      )}
      {index && (
        <ODDialog
          title="The field notes · Issue 08"
          onClose={() => setIndex(false)}
        >
          <p>
            A small collection about the things that escape a hurried glance.
          </p>
          <div className="od-choice-list">
            <button
              onClick={() => {
                setReading(true);
                setIndex(false);
              }}
            >
              <span>01</span>
              <strong>The forest doesn’t end at the floor</strong>
              <ODArrow />
            </button>
          </div>
          <h3>A slower vocabulary</h3>
          <p>
            Try this: sit in one place for five minutes. Write down a movement,
            a sound, and something you would have walked past. Return tomorrow.
          </p>
          <p className="od-mono">AN ORIGINAL, FICTIONAL JOURNAL CONCEPT</p>
        </ODDialog>
      )}
    </main>
  );
}

const odRooms = [
  {
    name: "Main hall",
    stage: "A",
    act: "Velvet Static",
    genre: "LIVE ELECTRONIC / 21:00–22:30",
    guests: 386,
    capacity: 450,
    next: "Moon Service",
    nextTime: "22:45",
    path: "M0 70 26 64 52 67 78 46 104 52 130 38 156 42 182 24 208 26 234 17 260 9",
    bars: [25, 40, 32, 55, 47, 65, 82, 76, 92, 88, 98, 93],
  },
  {
    name: "Listening room",
    stage: "B",
    act: "Soft Geography",
    genre: "AMBIENT / 20:30–23:00",
    guests: 72,
    capacity: 100,
    next: "Last record",
    nextTime: "23:00",
    path: "M0 76 26 62 52 63 78 51 104 59 130 40 156 42 182 35 208 40 234 26 260 25",
    bars: [22, 30, 29, 45, 36, 49, 56, 61, 54, 68, 70, 72],
  },
  {
    name: "Roof terrace",
    stage: "C",
    act: "Residents, all night",
    genre: "DOWNTEMPO / 19:00–00:00",
    guests: 118,
    capacity: 160,
    next: "Close terrace",
    nextTime: "00:00",
    path: "M0 64 26 58 52 43 78 32 104 27 130 32 156 19 182 15 208 24 234 21 260 24",
    bars: [30, 42, 56, 62, 68, 70, 84, 89, 75, 78, 72, 74],
  },
];

function ODStage({ room }) {
  return (
    <svg
      viewBox="0 0 620 290"
      role="img"
      aria-label={`Floor plan for ${room.name}: stage at the north end, audience in the centre, exits on both sides`}
    >
      <defs>
        <pattern
          id="od-floor-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path d="M20 0H0V20" fill="none" stroke="#3d423c" strokeWidth=".4" />
        </pattern>
      </defs>
      <rect x="20" y="10" width="580" height="270" fill="url(#od-floor-grid)" />
      <path
        d="M90 104V36h440v68m0 44v106H90V148"
        fill="none"
        stroke="#a6ada0"
        strokeWidth="2"
      />
      <path d="M190 36v49h240V36" fill="#363e2c" stroke="#a6ba89" />
      <text
        x="310"
        y="66"
        fill="#c5f27b"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="13"
      >
        STAGE {room.stage} / {room.act.toUpperCase()}
      </text>
      <path
        d="M250 85 180 226m190-141 70 141M310 85v141"
        fill="none"
        stroke="#9bb27a"
        strokeDasharray="4 5"
        opacity=".55"
      />
      {Array.from({ length: 9 }, (_, row) =>
        Array.from({ length: 19 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={158 + col * 17}
            cy={118 + row * 12}
            r="2.5"
            fill={(row * 19 + col) % 7 === 0 ? "#535b4d" : "#a9c488"}
            opacity={((row + col) % 4) / 5 + 0.4}
          />
        )),
      )}
      <g fontFamily="monospace" fontSize="10" fill="#c2c9b9">
        <text x="32" y="130">
          ← EXIT
        </text>
        <text x="543" y="130">
          EXIT →
        </text>
        <text x="115" y="244">
          BAR 01
        </text>
        <text x="462" y="244">
          BAR 02
        </text>
      </g>
      <rect
        x="276"
        y="218"
        width="68"
        height="34"
        fill="#242820"
        stroke="#929b84"
      />
      <text
        x="310"
        y="240"
        fill="#c5f27b"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="10"
      >
        FOH
      </text>
    </svg>
  );
}

function ODAfterhours() {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState("Overview");
  const [checked, setChecked] = useState(false);
  const [handover, setHandover] = useState(false);
  const room = odRooms[selected];
  const percent = Math.round((room.guests / room.capacity) * 100);
  return (
    <main className="od-design ah">
      <aside className="ah-rail">
        <div className="ah-logo">
          a<span>h</span>
          <i>↗</i>
        </div>
        <nav aria-label="Venue views">
          {[
            { label: "Overview", icon: "◫" },
            { label: "Running order", icon: "≡" },
            { label: "Crew", icon: "♧" },
          ].map((item) => (
            <button
              key={item.label}
              aria-label={item.label}
              aria-pressed={view === item.label}
              onClick={() => setView(item.label)}
            >
              {item.icon}
            </button>
          ))}
        </nav>
        <span className="ah-rail-tag">AFTERHOURS / VENUE OS</span>
        <button
          className="ah-avatar"
          onClick={() => setHandover(true)}
          aria-label="Open shift handover"
        >
          JB
        </button>
      </aside>
      <div className="ah-main">
        <header className="ah-header">
          <div>
            <span className="od-mono">THE FOUNDRY</span>
            <span className="ah-divider">/</span>
            <strong>Tonight, in motion.</strong>
          </div>
          <div className="ah-header-right">
            <span className="ah-live">
              <i /> DEMO LIVE
            </span>
            <span className="od-mono">SAT 12 SEP · 21:42</span>
            <button onClick={() => setHandover(true)}>
              Shift handover <ODArrow diagonal />
            </button>
          </div>
        </header>
        <section className="ah-title">
          <div>
            <span className="od-mono">NIGHT 028 / INDEPENDENT SOUNDS</span>
            <h1>
              {view === "Overview"
                ? "A good night. In sync."
                : view === "Crew"
                  ? "Good people. In position."
                  : "Every moment, accounted for."}
            </h1>
          </div>
          <div className="ah-weather">
            <span>17°</span>
            <span className="od-mono">
              CLEAR SKIES
              <br />
              TERRACE OPEN ↗
            </span>
          </div>
        </section>
        <div className="ah-rooms" role="group" aria-label="Choose a room">
          {odRooms.map((item, i) => (
            <button
              key={item.name}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <span className="ah-room-letter">{item.stage}</span>
              <span>
                <strong>{item.name}</strong>
                <small>
                  {item.guests} / {item.capacity} GUESTS
                </small>
              </span>
              <span className="ah-room-status">
                {i === selected ? "MONITORING ↗" : "LIVE ●"}
              </span>
            </button>
          ))}
        </div>
        {view === "Overview" ? (
          <>
            <div className="ah-dashboard">
              <section className="ah-floor">
                <div className="ah-panel-head">
                  <h2>On the floor</h2>
                  <span className="od-mono">
                    {room.name.toUpperCase()} / LIVE PLAN
                  </span>
                </div>
                <ODStage room={room} />
                <div className="ah-now">
                  <span className="ah-equalizer" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <div>
                    <span className="od-mono">PLAYING NOW</span>
                    <h3>{room.act}</h3>
                  </div>
                  <span className="od-mono">{room.genre}</span>
                  <span className="ah-now-arrow">↗</span>
                </div>
              </section>
              <section className="ah-capacity">
                <div className="ah-panel-head">
                  <h2>Room to move</h2>
                  <span>↗</span>
                </div>
                <div className="ah-count">
                  {room.guests}
                  <span>/ {room.capacity}</span>
                </div>
                <div
                  className="ah-capacity-bars"
                  aria-label={`${percent}% capacity`}
                >
                  {room.bars.map((bar, i) => (
                    <span key={i} style={{ height: `${bar}%` }} />
                  ))}
                </div>
                <div className="ah-capacity-label od-mono">
                  <span>19:00</span>
                  <span>21:42</span>
                </div>
                <div className="ah-meter">
                  <span style={{ width: `${percent}%` }} />
                </div>
                <div className="ah-capacity-bottom">
                  <span>
                    <i /> {percent}% capacity
                  </span>
                  <span>{room.capacity - room.guests} spaces</span>
                </div>
              </section>
            </div>
            <section className="ah-lower">
              <div className="ah-next">
                <span className="od-mono">UP NEXT / {room.nextTime}</span>
                <h3>{room.next}</h3>
                <span>
                  Stage {room.stage}{" "}
                  <span>
                    CHANGEOVER IN{" "}
                    {selected === 0 ? "63" : selected === 1 ? "78" : "138"} MIN
                    ↗
                  </span>
                </span>
              </div>
              <div className="ah-check">
                <span className="od-mono">MAIN HALL / CREW CHECK-IN</span>
                <h3>
                  {checked
                    ? "All set for the next act."
                    : "One last thing to check."}
                </h3>
                <button
                  onClick={() => setChecked(!checked)}
                  aria-pressed={checked}
                >
                  <span>{checked ? "☑" : "□"}</span>
                  {checked
                    ? "Backline confirmed · Jules B."
                    : "Confirm main hall’s backline"}
                  <span>↗</span>
                </button>
              </div>
              <div className="ah-pulse">
                <span className="od-mono">DOOR FLOW / LAST 60 MIN</span>
                <div>
                  <strong>+84</strong>
                  <span>
                    ARRIVALS
                    <br />
                    STEADY PACE ↗
                  </span>
                </div>
                <svg
                  viewBox="0 0 260 85"
                  role="img"
                  aria-label="Arrivals trending steadily upward"
                >
                  <path
                    d={room.path}
                    stroke="#c5f27b"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </section>
          </>
        ) : view === "Running order" ? (
          <section className="ah-table">
            <div className="ah-panel-head">
              <h2>The running order</h2>
              <span className="od-mono">THREE ROOMS. ONE NIGHT.</span>
            </div>
            {odRooms.map((item) => (
              <div key={item.name}>
                <span className="ah-room-letter">{item.stage}</span>
                <strong>{item.act}</strong>
                <span>{item.name}</span>
                <span className="od-mono">{item.genre}</span>
                <span className="ah-live">● ON AIR</span>
              </div>
            ))}
          </section>
        ) : (
          <section className="ah-table">
            <div className="ah-panel-head">
              <h2>The people behind the night</h2>
              <span className="od-mono">ALL 4 CHECKED IN</span>
            </div>
            {[
              ["JB", "Jules Bell", "Duty manager", "All rooms"],
              ["AM", "Ari Moon", "Sound engineer", "Main hall"],
              ["EK", "Em Kit", "Front of house", "Door & cloakroom"],
              ["SR", "Sam Reed", "Stage manager", "Main hall"],
            ].map((person) => (
              <div key={person[0]}>
                <span className="ah-room-letter">{person[0]}</span>
                <strong>{person[1]}</strong>
                <span>{person[2]}</span>
                <span>{person[3]}</span>
                <span className="ah-live">● IN POSITION</span>
              </div>
            ))}
          </section>
        )}
        <footer className="ah-footer od-mono">
          <span>
            <i /> A FICTIONAL NIGHT, FULLY IN VIEW
          </span>
          <span>
            {checked ? "BACKLINE CHECK COMPLETE" : "1 CREW TASK OPEN"}
          </span>
          <span>KEEP THE NIGHT MOVING. ↗</span>
        </footer>
      </div>
      {handover && (
        <ODDialog
          title="The night, handed over."
          onClose={() => setHandover(false)}
        >
          <p>Duty manager: Jules Bell · 21:42</p>
          <ul>
            {odRooms.map((item) => (
              <li key={item.name}>
                {item.name}: {item.guests} / {item.capacity} guests. {item.act}{" "}
                on stage.
              </li>
            ))}
          </ul>
          <p>
            {checked
              ? "Main hall backline is confirmed for the next act."
              : "Still to do: confirm the main hall’s backline."}
          </p>
          <button
            className="od-primary"
            onClick={() => {
              setChecked(true);
              setHandover(false);
            }}
          >
            Confirm backline & finish handover
          </button>
          <p className="od-mono">DEMO SHIFT. CHANGES APPLY TO THIS PREVIEW.</p>
        </ODDialog>
      )}
    </main>
  );
}

function ODRambleMap({ route, walking }) {
  return (
    <svg
      viewBox="0 0 390 345"
      role="img"
      aria-label={
        route === "green"
          ? "Illustrated walking loop through Moss Park, past a coffee shop, and along the canal"
          : "Illustrated canal loop passing a coffee shop and footbridge"
      }
    >
      <rect width="390" height="345" fill="#e7e7d8" />
      <path d="M-5 48Q71 3 129 61T258 63Q332 11 400 41V-5H-5Z" fill="#ced6b8" />
      <path d="M153 81q68-29 125 17l-3 119-107 17-62-78Z" fill="#bdcba4" />
      <path
        d="m170 99 42-9 49 25-5 83-70 12-55-64Z"
        fill="none"
        stroke="#a8b992"
        strokeDasharray="3 4"
      />
      <g fill="#d2d4c5" stroke="#c5c7b7">
        {[
          [25, 83, 49, 43],
          [36, 154, 44, 45],
          [14, 246, 57, 42],
          [94, 253, 45, 66],
          [307, 85, 51, 48],
          [310, 155, 66, 41],
          [292, 259, 45, 55],
          [165, 262, 44, 52],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="3" />
        ))}
      </g>
      <path
        d="M-20 334Q103 205 228 247T417 201"
        fill="none"
        stroke="#98b8bc"
        strokeWidth="28"
      />
      <path
        d="M-20 334Q103 205 228 247T417 201"
        fill="none"
        stroke="#c2dbd9"
        strokeWidth="2"
      />
      <g stroke="#f9f6e9" fill="none" strokeWidth="14">
        <path d="m-8 140 95-17 57-54 151 4 48-58M89-8 6 67m81 56 23 107 118 99M292 73l-2 152 80 111M-7 216l117 14 180-5 111-54" />
      </g>
      <g stroke="#aebd99" fill="none" strokeWidth="3">
        <path d="m148 131 94 39m-65-59 12 90" />
      </g>
      <path
        d={
          route === "green"
            ? "M110 231 88 126 145 73 290 73 290 225 110 231"
            : "M110 231 173 280 255 285 290 225 110 231"
        }
        fill="none"
        stroke="#355e46"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={walking ? undefined : "1 9"}
      />
      <g fill="#849d72">
        {[
          [158, 121],
          [227, 106],
          [251, 143],
          [164, 182],
          [234, 198],
          [200, 154],
          [32, 32],
          [320, 33],
          [349, 45],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="7" />
            <circle cx={x - 4} cy={y + 4} r="5" />
            <circle cx={x + 4} cy={y + 3} r="5" />
          </g>
        ))}
      </g>
      <g fontFamily="'DM Sans',sans-serif" fontSize="10" fill="#4c6048">
        <text x="174" y="149">
          MOSS PARK
        </text>
        <text x="26" y="103" transform="rotate(-9 26 103)">
          WILLOW ST.
        </text>
        <text x="301" y="147" transform="rotate(90 301 147)">
          FERN LANE
        </text>
        <text x="223" y="271" fill="#456d75" transform="rotate(7 223 271)">
          THE OLD CANAL
        </text>
      </g>
      <g transform="translate(88 122)">
        <circle r="15" fill="#fbf5e5" stroke="#355e46" />
        <text textAnchor="middle" y="5" fontSize="17">
          ☕
        </text>
      </g>
      <g transform="translate(288 75)">
        <circle r="14" fill="#fbf5e5" stroke="#355e46" />
        <path d="M-6 5H6M-5 0H5M-4-5v10M4-5v10" stroke="#355e46" fill="none" />
      </g>
      <circle cx="110" cy="231" r="15" fill="#f8f4e8" />
      <circle cx="110" cy="231" r="8" fill="#d06444" />
      <circle
        cx="110"
        cy="231"
        r="22"
        fill="none"
        stroke="#d06444"
        opacity=".35"
      />
      <g transform="translate(29 298)">
        <rect width="56" height="22" rx="11" fill="#fbf5e5" />
        <path d="M11 12h31m-31-3v6m31-6v6" stroke="#52634a" />
        <text x="13" y="-5" fontSize="9" fill="#52634a">
          100 m
        </text>
      </g>
    </svg>
  );
}

function ODRamble() {
  const [route, setRoute] = useState("green");
  const [walking, setWalking] = useState(false);
  const [savedRoutes, setSavedRoutes] = useState([]);
  const saved = savedRoutes.includes(route);
  const toggleSaved = () =>
    setSavedRoutes((items) =>
      items.includes(route)
        ? items.filter((item) => item !== route)
        : [...items, route],
    );
  const [tab, setTab] = useState("Explore");
  const [details, setDetails] = useState(false);
  return (
    <main className="od-design rm">
      <div className="rm-status">
        <span>9:41</span>
        <span aria-label="Full signal and battery">▂▄▆　▰</span>
      </div>
      <header className="rm-header">
        <span className="rm-logo">
          ramble<span>↝</span>
        </span>
        <button onClick={() => setDetails(true)} className="rm-location">
          Moss neighbourhood <span>⌄</span>
        </button>
      </header>
      {tab === "Explore" ? (
        <>
          <section className="rm-intro">
            <span className="od-mono">NO PERSONAL BESTS REQUIRED.</span>
            <h1>
              {walking ? (
                <>
                  You’re on
                  <br />
                  your way<span>↗</span>
                </>
              ) : (
                <>
                  A little out
                  <br />
                  of your way<span>↗</span>
                </>
              )}
            </h1>
            <p>
              {walking
                ? "Take your time. The good bits are between."
                : "A good day for the scenic route."}
            </p>
          </section>
          <div className="rm-map">
            <ODRambleMap route={route} walking={walking} />
            <div className="rm-map-label">
              <i />
              {walking
                ? "WALK IN PROGRESS · DEMO"
                : "A LITTLE LOOP. A LOT TO NOTICE."}
            </div>
            <button
              className="rm-map-info"
              aria-label="About this map"
              onClick={() => setDetails(true)}
            >
              i
            </button>
          </div>
          <section className="rm-route">
            <div
              className="rm-route-tabs"
              role="group"
              aria-label="Walking route"
            >
              {[
                ["green", "The green way"],
                ["canal", "By the water"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  aria-pressed={route === id}
                  disabled={walking}
                  onClick={() => setRoute(id)}
                >
                  {label}
                  {id === "green" ? " ↟" : " ≋"}
                </button>
              ))}
            </div>
            <div className="rm-route-title">
              <div>
                <span className="od-mono">
                  {route === "green"
                    ? "LEAFY STREETS & A COFFEE STOP"
                    : "SLOW WATER & WIDE OPEN SKY"}
                </span>
                <h2>
                  {route === "green"
                    ? "The long way home"
                    : "A moment by the canal"}
                </h2>
              </div>
              <button
                aria-label={saved ? "Unsave walk" : "Save walk"}
                aria-pressed={saved}
                onClick={toggleSaved}
              >
                {saved ? "♥" : "♡"}
              </button>
            </div>
            <div className="rm-stats">
              <span>
                <b>{route === "green" ? "2.4" : "1.8"}</b> km
              </span>
              <span>
                <b>{route === "green" ? "35" : "25"}</b> min-ish
              </span>
              <span>
                Mostly flat <span>↝</span>
              </span>
            </div>
            <button className="rm-start" onClick={() => setWalking(!walking)}>
              {walking
                ? "Finish this little wander"
                : "Let’s take a little wander"}
              <ODArrow />
            </button>
            <p className="rm-footnote" role="status">
              {walking
                ? "Preview walk active · no location is being tracked"
                : saved
                  ? "Kept in your saved walks for this visit."
                  : "Less tracking. More looking around."}
            </p>
          </section>
        </>
      ) : (
        <section className="rm-saved-view">
          <span className="od-mono">YOUR LITTLE DETOURS</span>
          <h1>
            {tab === "Saved" ? "Worth another wander." : "Go at your own pace."}
          </h1>
          <p>
            {tab === "Saved"
              ? savedRoutes.length
                ? `${savedRoutes.length} lovely ${savedRoutes.length === 1 ? "loop" : "loops"}, kept for a quieter moment.`
                : "Tap the heart on a route to keep it here."
              : "No streaks. No leaderboards. Just a little more time outside."}
          </p>
          {tab === "Saved" &&
            savedRoutes.map((id) => (
              <button
                key={id}
                disabled={walking && route !== id}
                onClick={() => {
                  setRoute(id);
                  setTab("Explore");
                }}
              >
                The {id === "green" ? "long way home" : "canal loop"}{" "}
                <ODArrow />
              </button>
            ))}
          {tab === "Saved" && walking && (
            <p className="rm-saved-hint">
              Finish your current wander to switch routes.
            </p>
          )}
          {tab === "You" && (
            <div className="rm-you-stat">
              <strong>{walking ? "1" : "0"}</strong>
              <span>{walking ? "wander in progress" : "things to prove"}</span>
            </div>
          )}
          <span className="rm-saved-flower">✳</span>
        </section>
      )}
      <nav className="rm-nav" aria-label="Ramble navigation">
        {[
          ["Explore", "↗"],
          ["Saved", "♡"],
          ["You", "◡"],
        ].map(([label, icon]) => (
          <button
            key={label}
            aria-current={tab === label ? "page" : undefined}
            onClick={() => setTab(label)}
          >
            <span aria-hidden="true">{icon}</span>
            {label}
          </button>
        ))}
      </nav>
      <div className="rm-home-indicator" />
      {details && (
        <ODDialog
          title="A neighbourhood, imagined."
          onClose={() => setDetails(false)}
        >
          <p>
            Moss is a fictional neighbourhood drawn for this walking-app
            concept. The park, café, footbridge, and canal are original vector
            artwork.
          </p>
          <p>
            Route lengths and walking times are illustrative. This preview does
            not request or track your location.
          </p>
          <button className="od-primary" onClick={() => setDetails(false)}>
            Back to the wander
          </button>
        </ODDialog>
      )}
    </main>
  );
}

function OriginalDirectionsApp() {
  return (
    <DesignCanvas>
      <DCSection
        id="original-landing"
        title="Independent Culture"
        subtitle="Offscript — optical print energy for an independent picture house."
      >
        <DCArtboard
          id="offscript"
          label="Offscript · Independent Cinema"
          width={1200}
          height={820}
        >
          <ODOffscript />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="original-saas"
        title="Research & Thinking"
        subtitle="Marginalia — a reading room with space for unfinished ideas."
      >
        <DCArtboard
          id="marginalia"
          label="Marginalia · Research Desk"
          width={1200}
          height={860}
        >
          <ODMarginalia />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="original-marketplace"
        title="Collectible Objects"
        subtitle="Oddments — illustrated objects finding a second chapter."
      >
        <DCArtboard
          id="oddments"
          label="Oddments · Objects with History"
          width={1200}
          height={880}
        >
          <ODOddments />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="original-editorial"
        title="Field Journals"
        subtitle="Understory — a botanical plate becomes an invitation to read."
      >
        <DCArtboard
          id="understory"
          label="Understory · The Living Forest"
          width={1200}
          height={880}
        >
          <ODUnderstory />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="original-dashboard"
        title="Live Culture"
        subtitle="Afterhours — stage plans, room capacity, and the people behind the night."
      >
        <DCArtboard
          id="afterhours"
          label="Afterhours · Venue Control"
          width={1200}
          height={880}
        >
          <ODAfterhours />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="original-mobile"
        title="Everyday Exploration"
        subtitle="Ramble — a deliberately uncompetitive companion for the scenic route."
      >
        <DCArtboard
          id="ramble"
          label="Ramble · Unhurried Walks"
          width={390}
          height={844}
        >
          <ODRamble />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <OriginalDirectionsApp />,
);
