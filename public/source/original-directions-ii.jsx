// Six original concepts. Shared gallery framing and local fonts are reused;
// compositions, copy, vector artwork, and product behaviours are authored here.
const { useState, useRef, useEffect } = React;

function V2Arrow({ back = false }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={back ? "M20 12H5m6-6-6 6 6 6" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function V2Dialog({ title, onClose, children }) {
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
      className="v2-dialog"
      aria-label={title}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="v2-dialog-head">
        <h2>{title}</h2>
        <button onClick={onClose} aria-label="Close dialog">
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}

const shelfBooks = [
  {
    id: "garden",
    title: "A garden, anywhere",
    author: "Nora Green",
    category: "Nature",
    cover: "#d8e5ad",
    ink: "#264c36",
    subtitle: "SMALL SPACES. WILD POSSIBILITIES.",
    symbol: "leaf",
  },
  {
    id: "city",
    title: "The city we share",
    author: "Amir Sol",
    category: "City life",
    cover: "#f5ad82",
    ink: "#603823",
    subtitle: "A FIELD GUIDE TO BELONGING",
    symbol: "grid",
  },
  {
    id: "fiction",
    title: "All the windows lit",
    author: "M. A. Lune",
    category: "Fiction",
    cover: "#c4c9e5",
    ink: "#303e64",
    subtitle: "STORIES FOR THE WAY HOME",
    symbol: "window",
  },
];

function ShelfCover({ book }) {
  return (
    <div
      className={`cs-cover cs-cover-${book.symbol}`}
      style={{ background: book.cover, color: book.ink }}
      aria-hidden="true"
    >
      <span>{book.author}</span>
      <strong>{book.title}</strong>
      <svg viewBox="0 0 120 120" fill="none">
        {book.symbol === "leaf" ? (
          <g stroke="currentColor" strokeWidth="2">
            <path d="M60 110V16M60 49Q10 44 16 13q44 1 44 36M60 83q50-2 45-38-44 3-45 38" />
            <path d="M21 20 60 51l39 1M60 89 24 59" />
          </g>
        ) : book.symbol === "grid" ? (
          <g stroke="currentColor" strokeWidth="2">
            {[20, 45, 70, 95].map((x) => (
              <path key={x} d={`M${x} 10v100M10 ${x}h100`} />
            ))}
            <circle
              cx="58"
              cy="58"
              r="34"
              fill={book.cover}
              stroke="currentColor"
            />
            <path d="M39 61h38M58 42v38" />
          </g>
        ) : (
          <g fill="currentColor">
            <path d="M20 103V40a40 40 0 0 1 80 0v63Z" />
            <path d="M58 8v95M20 49h80" stroke={book.cover} strokeWidth="5" />
            <circle cx="81" cy="29" r="12" fill={book.cover} />
          </g>
        )}
      </svg>
      <small>{book.subtitle}</small>
    </div>
  );
}

function CommonShelf() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All books");
  const [saved, setSaved] = useState([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [dialog, setDialog] = useState(null);
  const resultRef = useRef(null);
  const books = shelfBooks.filter(
    (book) =>
      (filter === "All books" || book.category === filter) &&
      (!savedOnly || saved.includes(book.id)) &&
      `${book.title} ${book.author} ${book.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const reset = () => {
    setQuery("");
    setFilter("All books");
    setSavedOnly(false);
  };
  return (
    <main className="v2-design cs">
      <a className="cs-skip" href="#cs-search">
        Skip to catalogue search
      </a>
      <div className="cs-notice">
        FICTIONAL LIBRARY CONCEPT{" "}
        <span>
          No real library services or accounts.{" "}
          <button onClick={() => setDialog("about")}>About this demo</button>
        </span>
      </div>
      <header className="cs-header">
        <button className="cs-brand" onClick={reset}>
          <svg width="31" height="35" viewBox="0 0 31 35" aria-hidden="true">
            <path
              d="M2 30V5h7v25m4 0V2h7v28m5 0L22 7l6-1 3 23M0 33h31"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <span>
            Common
            <br />
            Shelf
          </span>
        </button>
        <span className="cs-descriptor">
          A library for the curious.
          <br />A place for everyone.
        </span>
        <nav aria-label="Library services">
          <button
            onClick={() => {
              reset();
              resultRef.current?.scrollIntoView({ block: "nearest" });
            }}
          >
            Find a book
          </button>
          <button onClick={() => setDialog("visit")}>Plan a visit</button>
          <button onClick={() => setDialog("membership")}>
            Explore membership
          </button>
        </nav>
        <button
          className="cs-saved"
          aria-pressed={savedOnly}
          onClick={() => {
            setSavedOnly(!savedOnly);
            setFilter("All books");
            setQuery("");
          }}
        >
          {savedOnly ? "All books" : "Reading list"} <span>{saved.length}</span>
        </button>
      </header>
      <section className="cs-hero">
        <div>
          <span className="v2-mono">ROOM FOR YOUR NEXT IDEA</span>
          <h1>
            Your next chapter
            <br />
            starts <em>here.</em>
          </h1>
          <p>
            Find something to read. Discover a place to think.
            <br />
            Make a little space for possibility.
          </p>
        </div>
        <div className="cs-shelf-art" aria-hidden="true">
          <span className="cs-book-spine">
            EVERYDAY
            <br />
            WONDER <i>01</i>
          </span>
          <span className="cs-book-spine">
            ROOM TO GROW <i>02</i>
          </span>
          <span className="cs-book-spine">
            A DIFFERENT
            <br />
            POINT OF VIEW <i>03</i>
          </span>
          <span className="cs-book-spine">
            YOUR
            <br />
            NEXT
            <br />
            CHAPTER <i>04</i>
          </span>
          <div className="cs-shelf-base" />
          <span className="cs-shelf-caption v2-mono">
            MANY STORIES. ONE COMMON SHELF.
          </span>
        </div>
      </section>
      <form
        className="cs-search"
        id="cs-search"
        onSubmit={(event) => {
          event.preventDefault();
          resultRef.current?.focus();
        }}
      >
        <label htmlFor="cs-query">Search the demo catalogue</label>
        <div>
          <span aria-hidden="true">⌕</span>
          <input
            id="cs-query"
            type="search"
            placeholder="Try nature, cities, or fiction"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">
            Find a book <V2Arrow />
          </button>
        </div>
      </form>
      <section className="cs-task-row" aria-label="Explore library services">
        <button onClick={() => setDialog("membership")}>
          <span className="cs-task-icon" aria-hidden="true">
            ＋
          </span>
          <span>
            <strong>Explore membership</strong>
            <small>See how a library card could work</small>
          </span>
          <V2Arrow />
        </button>
        <button onClick={() => setDialog("visit")}>
          <span className="cs-task-icon" aria-hidden="true">
            ⌂
          </span>
          <span>
            <strong>Find your kind of space</strong>
            <small>Reading, studying, or being together</small>
          </span>
          <V2Arrow />
        </button>
        <button onClick={() => setDialog("help")}>
          <span className="cs-task-icon" aria-hidden="true">
            ?
          </span>
          <span>
            <strong>Find help getting started</strong>
            <small>Understand the catalogue and reading list</small>
          </span>
          <V2Arrow />
        </button>
      </section>
      <section
        className="cs-catalogue"
        ref={resultRef}
        tabIndex={-1}
        aria-label="Catalogue results"
      >
        <div className="cs-section-head">
          <h2>{savedOnly ? "Your next reads" : "A few places to begin"}</h2>
          <span role="status">
            {books.length} {books.length === 1 ? "book" : "books"} · sample
            catalogue
          </span>
        </div>
        <div className="cs-filters" role="group" aria-label="Book topics">
          {["All books", "Nature", "City life", "Fiction"].map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="cs-books">
          {books.length ? (
            books.map((book) => (
              <article key={book.id}>
                <ShelfCover book={book} />
                <div>
                  <span className="v2-mono">{book.category}</span>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <button
                    aria-pressed={saved.includes(book.id)}
                    onClick={() =>
                      setSaved((items) =>
                        items.includes(book.id)
                          ? items.filter((id) => id !== book.id)
                          : [...items, book.id],
                      )
                    }
                    aria-label={`${saved.includes(book.id) ? "Remove" : "Save"} ${book.title}`}
                  >
                    {saved.includes(book.id)
                      ? "Saved to your list ✓"
                      : "Save to reading list +"}
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="cs-empty">
              <h3>
                {savedOnly
                  ? "Your reading list is waiting."
                  : "No books found just yet."}
              </h3>
              <p>
                Try a broader word, choose another topic, or explore all three
                sample books.
              </p>
              <button onClick={reset}>
                Show all books <V2Arrow />
              </button>
            </div>
          )}
        </div>
      </section>
      <footer className="cs-footer">
        <strong>
          Many stories.
          <br />
          One common shelf.
        </strong>
        <p>
          Fictional books and services for a design study.
          <br />
          No official library destination has been verified.
        </p>
        <button onClick={() => setDialog("about")}>
          Read the concept notes <V2Arrow />
        </button>
      </footer>
      {dialog && (
        <V2Dialog
          title={
            {
              about: "A library, imagined.",
              visit: "Find your kind of space",
              membership: "Explore a library membership",
              help: "A hand with your next chapter",
            }[dialog]
          }
          onClose={() => setDialog(null)}
        >
          {dialog === "about" ? (
            <>
              <p>
                Common Shelf is an independent design concept. The library,
                books, and authors are fictional; it is not an official public
                service.
              </p>
              <p>
                No official destination, branch details, eligibility rules,
                fees, or opening hours have been verified. No personal
                information is collected.
              </p>
            </>
          ) : dialog === "visit" ? (
            <>
              <p>
                This prototype explores three kinds of library space: a quiet
                reading room, shared study tables, and a place for community
                groups.
              </p>
              <p>
                Real branch addresses, access arrangements, facilities, and
                opening hours are not verified. Check your own library’s
                official information before visiting.
              </p>
            </>
          ) : dialog === "membership" ? (
            <>
              <ol>
                <li>Find your local library’s official website.</li>
                <li>Check its membership requirements and fees, if any.</li>
                <li>Apply through its official service.</li>
              </ol>
              <p>
                This fictional library has no application form. Eligibility,
                documents, fees, and processing time have not been verified.
              </p>
            </>
          ) : (
            <>
              <p>
                Search by a title, author, or topic. Save any of the three
                sample books, then open “Reading list” to find it again.
              </p>
              <p>
                The reading list stays in this preview until the page reloads.
                No library account, reservation, or loan is created.
              </p>
            </>
          )}
          <button className="v2-primary" onClick={() => setDialog(null)}>
            Back to the library
          </button>
        </V2Dialog>
      )}
    </main>
  );
}

const counterProjects = [
  {
    name: "Kite Archive",
    tag: "CULTURE / DIGITAL COLLECTION",
    description:
      "An archive that invites exploration. A clear way into a wonderfully untidy collection of art, objects, and ideas.",
    color: "#d8aba7",
    year: "01",
  },
  {
    name: "Form Supply",
    tag: "COMMERCE / INDEPENDENT MAKERS",
    description:
      "A catalogue that lets the work speak. Materials, process, and the person behind every object, all in the same place.",
    color: "#aaba9c",
    year: "02",
  },
  {
    name: "Open Index",
    tag: "TOOLS / KNOWLEDGE SYSTEMS",
    description:
      "Less searching, more understanding. A research tool that turns disconnected notes into an index you can actually use.",
    color: "#b7bfd4",
    year: "03",
  },
];

function CounterformArt({ project }) {
  return (
    <svg
      viewBox="0 0 550 400"
      role="img"
      aria-label={`Original folded-paper monogram for ${project.name}`}
    >
      <rect width="550" height="400" fill={project.color} />
      <g stroke="#703b35" strokeWidth=".6" opacity=".45">
        <path
          d="M35 35h480v330H35ZM35 200h480M275 35v330M35 35l480 330M515 35 35 365"
          fill="none"
        />
        <circle cx="275" cy="200" r="140" fill="none" />
      </g>
      <g
        transform={
          project.year === "02"
            ? "rotate(-8 275 200)"
            : project.year === "03"
              ? "rotate(8 275 200)"
              : undefined
        }
      >
        {project.year === "01" ? (
          <>
            <path d="m123 87 116 45v205l-116-47Z" fill="#752e30" />
            <path
              d="m239 132 91-84 102 44-99 88 91 112-105 48-80-129Z"
              fill="#f7edd7"
            />
            <path d="m239 132 91-84v83l-91 80Z" fill="#ad5552" />
            <path d="m333 180 91 112-105 48-80-129 53 55Z" fill="#d27b71" />
            <path d="m123 87 116 45 91-84-114-31Z" fill="#f7edd7" />
          </>
        ) : project.year === "02" ? (
          <>
            <path d="M149 58h265v72H247v62h130v72H247v96h-98Z" fill="#374d40" />
            <path d="m149 58 49 28v274l-49-28Z" fill="#647e61" />
            <path
              d="m149 58 49 28h168l48-28Zm98 134 40 26h60l30-26Z"
              fill="#f7edd7"
            />
            <path
              d="m247 130-49-44h168v44Zm0 134-49-46h149v46Z"
              fill="#aec29f"
            />
          </>
        ) : (
          <>
            <path
              d="m274 34 147 86v170l-147 85-147-85V120Zm0 84-75 44v85l75 44 75-44v-85Z"
              fill="#f7edd7"
              fillRule="evenodd"
            />
            <path d="m274 34 147 86-72 42-75-44Z" fill="#667aa0" />
            <path d="m421 120v170l-147 85v-84l75-44v-85Z" fill="#3a4d70" />
            <path d="m127 120 72 42v85l75 44v84l-147-85Z" fill="#899ac0" />
            <path d="m199 162 75-44 75 44-75 44Z" fill="#b7bfd4" />
          </>
        )}
      </g>
      <g fill="#643632" fontFamily="monospace" fontSize="9">
        <text x="21" y="22">
          COUNTERFORM / STUDY {project.year}
        </text>
        <text x="435" y="379">
          FORM ↔ FUNCTION
        </text>
      </g>
    </svg>
  );
}

function Counterform() {
  const [selected, setSelected] = useState(0);
  const [dialog, setDialog] = useState(null);
  const [brief, setBrief] = useState("");
  const [savedBrief, setSavedBrief] = useState("");
  const project = counterProjects[selected];
  return (
    <main className="v2-design cf">
      <header className="cf-header">
        <button className="cf-brand" onClick={() => setSelected(0)}>
          counter<span>form</span>
          <svg width="27" height="27" viewBox="0 0 27 27" aria-hidden="true">
            <path
              d="M1 1h11v25H1Zm14 0h11L15 13l11 13H15Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span className="v2-mono">
          SMALL STUDIO.
          <br />
          CONSIDERED SYSTEMS.
        </span>
        <nav aria-label="Studio">
          <button
            onClick={() =>
              document
                .getElementById("cf-work")
                ?.scrollIntoView({ block: "nearest" })
            }
          >
            Selected work <span>03</span>
          </button>
          <button onClick={() => setDialog("method")}>How we work</button>
          <button className="cf-contact" onClick={() => setDialog("brief")}>
            Start a conversation <V2Arrow />
          </button>
        </nav>
      </header>
      <section className="cf-hero">
        <div className="cf-statement">
          <span className="v2-mono">DESIGN + ENGINEERING, IN GOOD COMPANY</span>
          <h1>
            Ideas need
            <br />a <span>working</span>
            <br />
            form<span className="cf-stop">.</span>
          </h1>
          <div className="cf-intro">
            <span className="cf-index">[01—03]</span>
            <p>
              We turn the complicated into the considered.
              <br />
              Independent websites, useful tools, and digital
              <br />
              places with a point of view.
            </p>
          </div>
          <button className="cf-text-link" onClick={() => setDialog("method")}>
            Meet the way we work <V2Arrow />
          </button>
        </div>
        <div className="cf-project" id="cf-work">
          <div className="cf-project-top v2-mono">
            <span>SELECTED WORK / {project.year}</span>
            <span>CONCEPT SERIES, 2026</span>
          </div>
          <button
            className="cf-art-button"
            onClick={() => setDialog("project")}
            aria-label={`View ${project.name} case study`}
          >
            <CounterformArt project={project} />
          </button>
          <div className="cf-project-name">
            <div>
              <span className="v2-mono">{project.tag}</span>
              <h2>{project.name}</h2>
            </div>
            <button
              aria-label={`Read about ${project.name}`}
              onClick={() => setDialog("project")}
            >
              ↗
            </button>
          </div>
          <div className="cf-select" aria-label="Select a project">
            {counterProjects.map((item, i) => (
              <button
                key={item.name}
                aria-label={item.name}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <span>0{i + 1}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="cf-principles">
        <span className="v2-mono">
          NOT A PRODUCTION LINE.
          <br />A SHARED WORKBENCH.
        </span>
        {[
          ["01", "Find the real question.", "Strategy & structure"],
          ["02", "Make every detail count.", "Identity & interface"],
          ["03", "Build it to keep working.", "Engineering & care"],
        ].map(([num, title, sub]) => (
          <button key={num} onClick={() => setDialog("method")}>
            <span className="v2-mono">{num} /</span>
            <h3>{title}</h3>
            <p>{sub}</p>
          </button>
        ))}
      </section>
      <footer className="cf-footer v2-mono">
        <span>GOOD WORK COMES FROM PAYING ATTENTION.</span>
        <span>INDEPENDENT BY DESIGN.</span>
        <span>COUNTERFORM © 2026</span>
      </footer>
      {dialog && (
        <V2Dialog
          title={
            dialog === "project"
              ? project.name
              : dialog === "method"
                ? "A shared workbench."
                : "What are you making?"
          }
          onClose={() => setDialog(null)}
        >
          {dialog === "project" ? (
            <>
              <CounterformArt project={project} />
              <p>{project.description}</p>
              <p>
                Scope: content structure, visual identity, interface design, and
                a working frontend. This is an original fictional case study,
                not a client claim.
              </p>
            </>
          ) : dialog === "method" ? (
            <>
              <ol>
                <li>
                  <strong>Find the real question.</strong> Work out who this is
                  for, what they need, and what stands in the way.
                </li>
                <li>
                  <strong>Make every detail count.</strong> Build a visual
                  language around the idea, then test it with real content.
                </li>
                <li>
                  <strong>Build it to keep working.</strong> Turn the direction
                  into clear, maintainable interfaces.
                </li>
              </ol>
              <button className="v2-primary" onClick={() => setDialog("brief")}>
                Try the brief builder
              </button>
            </>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSavedBrief(brief.trim());
              }}
            >
              <p>
                A local scratchpad for your project idea. Nothing is sent to the
                studio.
              </p>
              <label className="v2-field">
                Project idea
                <textarea
                  required
                  maxLength={600}
                  value={brief}
                  onChange={(event) => {
                    setBrief(event.target.value);
                    setSavedBrief("");
                  }}
                  placeholder="A website, a useful tool, a question worth exploring…"
                />
              </label>
              <button className="v2-primary" type="submit">
                Keep this brief in the preview
              </button>
              <p role="status">
                {savedBrief &&
                  "Brief kept for this visit. Nothing has been sent."}
              </p>
            </form>
          )}
        </V2Dialog>
      )}
    </main>
  );
}

const intervalColors = [
  { name: "Persimmon", body: "#da6748", side: "#ad432f", light: "#f39d7a" },
  { name: "Chalk", body: "#e2ddce", side: "#aaa695", light: "#f9f4e6" },
  { name: "Ink", body: "#414f59", side: "#253139", light: "#78838a" },
];

function IntervalObject({ color, fraction }) {
  const gradientId = `iv-case-${React.useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox="0 0 660 510"
      role="img"
      aria-label={`Original industrial illustration of the Interval timer in ${color.name}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor={color.light} />
          <stop offset=".48" stopColor={color.body} />
          <stop offset="1" stopColor={color.side} />
        </linearGradient>
      </defs>
      <ellipse cx="325" cy="427" rx="200" ry="31" fill="#46647414" />
      <ellipse cx="325" cy="427" rx="145" ry="17" fill="#46647412" />
      <g transform="rotate(-12 330 240)">
        <path
          d="M175 108h264q45 0 45 45v217q0 39-38 43H189q-39 0-39-40V139Z"
          fill={color.side}
        />
        <rect
          x="145"
          y="90"
          width="330"
          height="305"
          rx="37"
          fill={`url(#${gradientId})`}
          stroke={color.side}
          strokeWidth="1.5"
        />
        <rect
          x="158"
          y="102"
          width="304"
          height="278"
          rx="29"
          fill="none"
          stroke={color.light}
          opacity=".8"
        />
        <circle
          cx="310"
          cy="230"
          r="110"
          fill="#eae5d6"
          stroke={color.side}
          strokeWidth="3"
        />
        <circle
          cx="310"
          cy="230"
          r="91"
          fill="none"
          stroke="#b8b5a8"
          strokeWidth="1"
        />
        {Array.from({ length: 60 }, (_, i) => (
          <line
            key={i}
            x1="310"
            y1="131"
            x2="310"
            y2={i % 5 === 0 ? "143" : "138"}
            stroke="#4a514e"
            strokeWidth={i % 5 === 0 ? "2" : "1"}
            transform={`rotate(${i * 6} 310 230)`}
          />
        ))}
        <circle
          cx="310"
          cy="230"
          r="74"
          fill="none"
          stroke="#d1cec0"
          strokeWidth="11"
        />
        <circle
          cx="310"
          cy="230"
          r="74"
          fill="none"
          stroke={color.body}
          strokeWidth="11"
          strokeDasharray={`${465 * fraction} 465`}
          transform="rotate(-90 310 230)"
        />
        <g transform={`rotate(${fraction * 360} 310 230)`}>
          <rect x="298" y="179" width="24" height="83" rx="12" fill="#3b4342" />
          <rect x="307" y="183" width="6" height="20" rx="3" fill="#f6f0df" />
        </g>
        <circle cx="310" cy="230" r="17" fill="#58605b" />
        <g
          fill="#414c48"
          fontFamily="monospace"
          fontSize="10"
          textAnchor="middle"
        >
          <text x="310" y="167">
            0
          </text>
          <text x="375" y="234">
            15
          </text>
          <text x="310" y="301">
            30
          </text>
          <text x="243" y="234">
            45
          </text>
        </g>
        <text
          x="182"
          y="361"
          fill="#f8ead5"
          fontFamily="sans-serif"
          fontSize="15"
          letterSpacing="2"
        >
          interval
        </text>
        <circle cx="431" cy="352" r="6" fill="#f2dcc1" />
        <path d="M278 408h72" stroke="#544e4630" strokeWidth="4" />
      </g>
      <g
        stroke="#687d85"
        fill="#687d85"
        fontFamily="monospace"
        fontSize="9"
        strokeWidth=".7"
      >
        <path d="M504 100h20v289h-20M514 100v289" fill="none" />
        <text x="536" y="210" stroke="none" transform="rotate(90 536 210)">
          82 MM OF QUIET
        </text>
        <path d="M140 463h331m-331-5v10m331-10v10" />
        <text x="280" y="486" stroke="none">
          MADE TO MAKE SPACE
        </text>
      </g>
    </svg>
  );
}

function Interval() {
  const [colorIndex, setColorIndex] = useState(0);
  const [duration, setDuration] = useState(25);
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [saved, setSaved] = useState(false);
  const [details, setDetails] = useState(false);
  const deadline = useRef(null);
  const color = intervalColors[colorIndex];
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      const next = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000),
      );
      setRemaining(next);
      if (next === 0) setRunning(false);
    }, 250);
    return () => clearInterval(timer);
  }, [running]);
  const toggleTimer = () => {
    if (running) {
      setRemaining(
        Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000)),
      );
      setRunning(false);
    } else {
      const seconds = remaining || duration * 60;
      setRemaining(seconds);
      deadline.current = Date.now() + seconds * 1000;
      setRunning(true);
    }
  };
  const changeDuration = (minutes) => {
    setDuration(minutes);
    setRemaining(minutes * 60);
    setSaved(false);
  };
  const clock = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
  return (
    <main className="v2-design iv">
      <header className="iv-header">
        <span className="iv-brand">
          interval<span>®</span>
        </span>
        <span className="v2-mono">OBJECTS FOR A MORE PRESENT DAY</span>
        <nav aria-label="Interval product">
          <button onClick={() => setDetails(true)}>The object</button>
          <button onClick={() => document.getElementById("iv-timer")?.focus()}>
            Try a little focus
          </button>
          <button onClick={() => setDetails(true)}>A note on attention</button>
        </nav>
      </header>
      <div className="iv-breadcrumb v2-mono">
        <span>THE EVERYDAY COLLECTION / OBJECT 004</span>
        <span>LESS, BUT WITH INTENTION.</span>
      </div>
      <section className="iv-product">
        <div className="iv-visual">
          <div className="iv-visual-title">
            <span className="v2-mono">SET IT. TURN TO WHAT MATTERS.</span>
            <h1>
              A little time
              <br />
              to <em>think.</em>
            </h1>
          </div>
          <IntervalObject color={color} fraction={remaining / 3600} />
          <div className="iv-visual-bottom v2-mono">
            <span>01 / THE FOCUS TIMER</span>
            <span>ORIGINAL OBJECT STUDY</span>
          </div>
        </div>
        <div className="iv-info">
          <span className="iv-edition v2-mono">
            THE GENTLE ART OF ONE THING AT A TIME
          </span>
          <h2>
            Meet your
            <br />
            quiet companion.
          </h2>
          <p>
            A small ritual for a scattered day. Turn the dial, put the phone
            down, and give one thing your undivided attention.
          </p>
          <div className="iv-finish">
            <span className="v2-mono">
              01 / FINISH <b>{color.name}</b>
            </span>
            <div role="group" aria-label="Timer finish">
              {intervalColors.map((item, i) => (
                <button
                  key={item.name}
                  aria-label={item.name}
                  aria-pressed={colorIndex === i}
                  onClick={() => {
                    setColorIndex(i);
                    setSaved(false);
                  }}
                  style={{ "--swatch": item.body }}
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
          <div className="iv-time-choice">
            <span className="v2-mono">02 / A LITTLE SPACE FOR YOURSELF</span>
            <div role="group" aria-label="Focus duration">
              {[10, 25, 45].map((minutes) => (
                <button
                  key={minutes}
                  disabled={running}
                  aria-pressed={duration === minutes}
                  onClick={() => changeDuration(minutes)}
                >
                  {minutes}
                  <span>MIN</span>
                </button>
              ))}
            </div>
          </div>
          <section
            className="iv-timer"
            id="iv-timer"
            tabIndex={-1}
            aria-label="Working focus timer"
          >
            <div>
              <span className="v2-mono">
                {running
                  ? "ONE THING AT A TIME"
                  : remaining === 0
                    ? "A LITTLE PAUSE, WELL EARNED"
                    : "YOUR NEXT LITTLE INTERVAL"}
              </span>
              <span
                className="iv-clock"
                role="timer"
                aria-label={`${Math.floor(remaining / 60)} minutes ${remaining % 60} seconds remaining`}
              >
                {clock}
              </span>
            </div>
            <button
              className="iv-reset"
              aria-label="Reset focus timer"
              onClick={() => {
                setRunning(false);
                setRemaining(duration * 60);
              }}
            >
              ↺
            </button>
          </section>
          <button className="iv-start" onClick={toggleTimer}>
            {running
              ? "Pause for a moment"
              : remaining === duration * 60 || remaining === 0
                ? "Begin a little focus"
                : "Continue your interval"}
            <V2Arrow />
          </button>
          <button
            className="iv-save"
            onClick={() => setSaved(!saved)}
            aria-pressed={saved}
          >
            {saved
              ? "Setup saved for this visit ✓"
              : "Keep this colour & duration +"}
          </button>
          <p className="iv-footnote">
            A working browser timer. A fictional physical object.
          </p>
        </div>
      </section>
      <footer className="iv-footer">
        <div>
          <span>01</span>
          <strong>
            One thing.<small>A quieter kind of productivity.</small>
          </strong>
        </div>
        <div>
          <span>02</span>
          <strong>
            Your pace.<small>Small intervals, open possibilities.</small>
          </strong>
        </div>
        <div>
          <span>03</span>
          <strong>
            No noise.<small>No accounts, no streaks, no scores.</small>
          </strong>
        </div>
      </footer>
      {details && (
        <V2Dialog
          title="An object for attention."
          onClose={() => setDetails(false)}
        >
          <p>
            Interval is an original industrial-design concept: a simple, tactile
            focus timer with three imagined finishes.
          </p>
          <p>
            The timer in this preview really counts down. Choose a duration,
            start, pause, and reset. It does not play an alarm, keep running
            after you close the page, or save your setup after a reload.
          </p>
          <p>
            The physical object is an illustration; there is no purchase or
            shipping flow.
          </p>
        </V2Dialog>
      )}
    </main>
  );
}

const gatherInitialExpenses = [
  {
    id: 1,
    title: "A place by the sea",
    category: "STAY",
    amount: 39000,
    icon: "⌂",
  },
  {
    id: 2,
    title: "Three train tickets",
    category: "TRAVEL",
    amount: 9600,
    icon: "↗",
  },
];
const gatherMoney = (cents) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: cents % 100 ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(cents / 100);

function Gather() {
  const [tab, setTab] = useState("The plan");
  const [expenses, setExpenses] = useState(gatherInitialExpenses);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const nextId = useRef(3);
  const funded = 84000;
  const spent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const available = funded - spent;
  const addExpense = (event) => {
    event.preventDefault();
    const cents = Math.round(Number(amount) * 100);
    if (
      !title.trim() ||
      !Number.isFinite(cents) ||
      cents <= 0 ||
      cents > available
    ) {
      setMessage(
        "Enter a description and an amount within the available fund.",
      );
      return;
    }
    setExpenses((items) => [
      ...items,
      {
        id: nextId.current++,
        title: title.trim(),
        category: "ADDED BY YOU",
        amount: cents,
        icon: "＋",
      },
    ]);
    setAdding(false);
    setTitle("");
    setAmount("");
    setMessage("Expense added to this demo fund.");
  };
  return (
    <main className="v2-design ga">
      <div className="ga-status">
        <span>9:41</span>
        <span aria-label="Full signal and battery">▂▄▆　▰</span>
      </div>
      <header className="ga-header">
        <span className="ga-brand">
          gather<span>:</span>
        </span>
        <span className="ga-demo v2-mono">DEMO FUND</span>
        <button
          className="ga-avatar"
          aria-label="View the group"
          onClick={() => setTab("The people")}
        >
          JL
        </button>
      </header>
      <section className="ga-heading">
        <span className="v2-mono">GOOD PLANS ARE BETTER TOGETHER.</span>
        <h1>
          The coast
          <br />
          is calling<span>↝</span>
        </h1>
        <div>
          <span>Our harbour weekend</span>
          <span className="ga-date">23—25 OCT</span>
        </div>
      </section>
      <section className="ga-fund" aria-label="Shared fund balance">
        <div className="ga-fund-top">
          <span className="v2-mono">STILL IN THE POT</span>
          <span className="ga-people" aria-label="Three contributors">
            <i>JL</i>
            <i>AK</i>
            <i>MR</i>
          </span>
        </div>
        <strong className="ga-balance">
          {gatherMoney(available - (available % 100))}
          <span>.{String(available % 100).padStart(2, "0")}</span>
        </strong>
        <p>For the good bits we haven’t planned yet.</p>
        <div
          className="ga-pot-bars"
          aria-label={`${gatherMoney(spent)} planned, ${gatherMoney(available)} available`}
        >
          {Array.from({ length: 28 }, (_, i) => (
            <span key={i} className={i / 28 < spent / funded ? "used" : ""} />
          ))}
        </div>
        <div className="ga-fund-total">
          <span>
            <i /> {gatherMoney(spent)} planned
          </span>
          <span>{gatherMoney(funded)} gathered</span>
        </div>
      </section>
      <nav className="ga-tabs" aria-label="Fund views">
        {["The plan", "The activity", "The people"].map((item) => (
          <button
            key={item}
            aria-pressed={tab === item}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </nav>
      <section className="ga-content">
        {tab === "The plan" ? (
          <>
            <div className="ga-section-head">
              <h2>
                A little organised.
                <br />
                <span>A lot to look forward to.</span>
              </h2>
              <button
                onClick={() => {
                  setMessage("");
                  setAdding(true);
                }}
                aria-label="Add an expense"
              >
                ＋
              </button>
            </div>
            <div className="ga-expenses">
              {expenses.map((expense) => (
                <article key={expense.id}>
                  <span className="ga-expense-icon" aria-hidden="true">
                    {expense.icon}
                  </span>
                  <div>
                    <strong>{expense.title}</strong>
                    <small>{expense.category}</small>
                  </div>
                  <span>
                    {gatherMoney(expense.amount)}
                    <small>
                      {expense.amount % 3
                        ? `${gatherMoney(Math.floor(expense.amount / 3))}–${gatherMoney(Math.ceil(expense.amount / 3))}`
                        : gatherMoney(expense.amount / 3)}{" "}
                      each
                    </small>
                  </span>
                  {expense.id > 2 && (
                    <button
                      className="ga-remove"
                      aria-label={`Remove ${expense.title}`}
                      onClick={() => {
                        setExpenses((items) =>
                          items.filter((item) => item.id !== expense.id),
                        );
                        setMessage("Expense removed from the demo fund.");
                      }}
                    >
                      ×
                    </button>
                  )}
                </article>
              ))}
            </div>
            {expenses.some((item) => item.amount % 3 !== 0) && (
              <p className="ga-rounding">
                Split equally. Any extra pennies go to Jules, then Ari.
              </p>
            )}
            <div className="ga-open-plan">
              <span aria-hidden="true">☀</span>
              <p>
                Leave some room for
                <br />
                <strong>“shall we just…?”</strong>
              </p>
              <span className="v2-mono">
                THE BEST PART
                <br />
                ISN’T IN THE PLAN.
              </span>
            </div>
          </>
        ) : tab === "The people" ? (
          <>
            <h2>The good company.</h2>
            {[
              ["JL", "Jules Lane"],
              ["AK", "Ari Kim"],
              ["MR", "Mina Reed"],
            ].map(([initials, name]) => (
              <article className="ga-person" key={initials}>
                <span>{initials}</span>
                <strong>
                  {name}
                  <small>Equal contribution</small>
                </strong>
                <b>£280</b>
              </article>
            ))}
            <p className="ga-note">
              Three fictional contributors. £840 gathered in total.
            </p>
          </>
        ) : (
          <>
            <h2>Every little bit.</h2>
            <div className="ga-activity">
              <p>
                <strong>£840 gathered</strong>
                <span>Three contributions of £280</span>
              </p>
              {expenses.map((expense) => (
                <p key={expense.id}>
                  <strong>{expense.title}</strong>
                  <span>{gatherMoney(expense.amount)} added to the plan</span>
                </p>
              ))}
            </div>
          </>
        )}
      </section>
      <p className="ga-message" role="status">
        {message}
      </p>
      <footer className="ga-footer">
        <span>Shared plans. Clear pennies.</span>
        <span className="v2-mono">NO REAL MONEY MOVES.</span>
      </footer>
      <div className="ga-home" />
      {adding && (
        <V2Dialog
          title="Add a little to the plan"
          onClose={() => setAdding(false)}
        >
          <form onSubmit={addExpense}>
            <p>Available in this fictional fund: {gatherMoney(available)}.</p>
            <label className="v2-field">
              What’s it for?
              <input
                required
                maxLength={60}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Breakfast by the water"
              />
            </label>
            <label className="v2-field">
              Amount in pounds
              <input
                type="number"
                inputMode="decimal"
                required
                min="0.01"
                max={available / 100}
                step="0.01"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="24.00"
              />
            </label>
            <button className="v2-primary" type="submit">
              Add demo expense
            </button>
            <p role="alert">{message}</p>
            <p className="v2-mono">
              A LOCAL PLANNING PREVIEW. NO PAYMENT IS MADE.
            </p>
          </form>
        </V2Dialog>
      )}
    </main>
  );
}

function SideplateArt({ slide }) {
  return (
    <svg
      viewBox="0 0 600 330"
      role="img"
      aria-label={
        slide === 0
          ? "Original supper-club illustration of a fork twirling long red ribbons of pasta"
          : slide === 1
            ? "Original overhead illustration of a shared table with four place settings"
            : "Original line drawing of a plate and a handwritten invitation"
      }
    >
      {slide === 0 ? (
        <>
          <g transform="rotate(-23 300 180)" stroke="#792b39" fill="none">
            <path
              d="M278-30v95m22-95v95m22-95v95m22-95v95M278 61q0 46 33 46t33-46M311 107v71"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {Array.from({ length: 6 }, (_, i) => (
              <path
                key={i}
                d="M280 134C205 90 374 66 369 116C362 152 202 159 236 203C258 231 391 226 369 263C356 288 268 279 283 319"
                transform={`translate(${i * 11 - 28} ${i * 2})`}
                strokeWidth="5"
                strokeLinecap="round"
              />
            ))}
          </g>
          <g fill="#792b39">
            <circle cx="136" cy="58" r="7" />
            <circle cx="461" cy="216" r="5" />
            <path d="m469 68 5 11 13 2-10 8 2 13-10-7-12 6 4-13-9-9 13-1Z" />
          </g>
        </>
      ) : slide === 1 ? (
        <>
          <rect x="80" y="65" width="440" height="210" rx="85" fill="#792b39" />
          <path
            d="M100 122h400M100 165h400M100 208h400M165 85v170m65-185v200m65-200v200m65-200v200m65-185v170"
            stroke="#faebbc"
            strokeWidth="1"
            opacity=".3"
          />
          {[
            [189, 123],
            [395, 123],
            [189, 224],
            [395, 224],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="38" fill="#f5dc7f" />
              <circle
                cx={x}
                cy={y}
                r="28"
                fill="none"
                stroke="#792b39"
                strokeWidth="2"
              />
              <path
                d={`M${x - 52} ${y - 25}v50m-5-50v15m10-15v15M${x + 50} ${y - 25}v50`}
                stroke="#f5dc7f"
                strokeWidth="3"
              />
            </g>
          ))}
          <path
            d="M280 132q40-5 38 30l-8 40h-33l-6-40q-2-15 9-30"
            fill="#b2bd7b"
          />
          <path
            d="M294 137v-38m0 21q-28 0-24-20 24-2 24 20m0-5q26-2 22-24-22 2-22 24"
            fill="#b2bd7b"
            stroke="#b2bd7b"
            strokeWidth="3"
          />
        </>
      ) : (
        <>
          <ellipse
            cx="295"
            cy="172"
            rx="155"
            ry="132"
            fill="none"
            stroke="#792b39"
            strokeWidth="3"
          />
          <ellipse
            cx="295"
            cy="172"
            rx="126"
            ry="105"
            fill="none"
            stroke="#792b39"
            strokeWidth="1.5"
          />
          <text
            x="295"
            y="165"
            textAnchor="middle"
            fontFamily="Newsreader,serif"
            fontStyle="italic"
            fontSize="48"
            fill="#792b39"
          >
            come hungry.
          </text>
          <text
            x="295"
            y="206"
            textAnchor="middle"
            fontFamily="Newsreader,serif"
            fontStyle="italic"
            fontSize="43"
            fill="#792b39"
          >
            leave happy.
          </text>
          <path
            d="M99 80v170m-10-170v40m20-40v40M490 80q-20 30 0 70v100"
            fill="none"
            stroke="#792b39"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function Sideplate() {
  const [slide, setSlide] = useState(0);
  const [saved, setSaved] = useState(false);
  const [details, setDetails] = useState(false);
  const move = (delta) => setSlide((value) => (value + delta + 3) % 3);
  return (
    <main className={`v2-design sp sp-slide-${slide}`}>
      <header className="sp-header">
        <span className="sp-brand">
          sideplate<span>↳</span>
        </span>
        <span className="v2-mono">
          A SUPPER CLUB
          <br />
          FOR GOOD COMPANY.
        </span>
        <span className="sp-count">
          0{slide + 1}
          <small>/03</small>
        </span>
      </header>
      <div className="sp-overline v2-mono">
        <span>AN OPEN INVITATION TO A FULL TABLE.</span>
        <span>THE SEPTEMBER EDIT</span>
      </div>
      <section
        className="sp-poster"
        aria-label={`Carousel slide ${slide + 1} of 3`}
        aria-roledescription="slide"
      >
        <div className="sp-title">
          <span className="sp-vertical v2-mono">
            PUT DOWN THE PHONE. PASS SOMETHING GOOD.
          </span>
          {slide === 0 ? (
            <h1>
              Less scroll.
              <br />
              More <em>supper.</em>
            </h1>
          ) : slide === 1 ? (
            <h1>
              Strangers.
              <br />
              Then <em>seconds.</em>
            </h1>
          ) : (
            <h1>
              Pull up
              <br />a <em>chair.</em>
            </h1>
          )}
        </div>
        <div className="sp-art">
          <SideplateArt slide={slide} />
          <div className="sp-seal">
            <span>
              THE GOOD
              <br />
              COMPANY
              <br />
              CLUB
            </span>
            <span>↙</span>
          </div>
        </div>
        <div className="sp-poster-bottom">
          <p>
            {slide === 0 ? (
              <>
                One table. A few new faces.
                <br />
                Something good in the middle.
              </>
            ) : slide === 1 ? (
              <>
                Bring your appetite.
                <br />
                We’ll make room for your story.
              </>
            ) : (
              <>
                No perfect introductions.
                <br />
                Just pass the bread.
              </>
            )}
          </p>
          <span className="sp-handwritten">
            {slide === 0
              ? "see you at the table."
              : slide === 1
                ? "there’s always a little more."
                : "your kind of evening."}
          </span>
        </div>
      </section>
      <section className="sp-event">
        <div>
          <span className="v2-mono">THE NEXT CHAPTER</span>
          <strong>Friday, 25 September</strong>
        </div>
        <div>
          <span className="v2-mono">THE OCCASION</span>
          <strong>A neighbourhood supper</strong>
        </div>
        <button
          onClick={() => setDetails(true)}
          aria-label="Read the invitation"
        >
          ↗
        </button>
      </section>
      <footer className="sp-controls">
        <button aria-label="Previous slide" onClick={() => move(-1)}>
          <V2Arrow back />
        </button>
        <div role="group" aria-label="Carousel slides">
          {["The invitation", "The table", "The details"].map((label, i) => (
            <button
              key={label}
              aria-label={label}
              aria-pressed={slide === i}
              onClick={() => setSlide(i)}
            >
              <span /> {label}
            </button>
          ))}
        </div>
        <button aria-label="Next slide" onClick={() => move(1)}>
          <V2Arrow />
        </button>
      </footer>
      <p className="sp-concept v2-mono">
        AN ORIGINAL, FICTIONAL EVENT SERIES. NO LIVE BOOKINGS.
      </p>
      {details && (
        <V2Dialog
          title="You’re good company."
          onClose={() => setDetails(false)}
        >
          <p>
            Sideplate is a fictional supper-club identity and a three-part
            social carousel. The date and invitation are sample content, not a
            scheduled event.
          </p>
          <p>
            Its idea is simple: a shared table, an unhurried meal, and a few
            people you haven’t met yet.
          </p>
          <button
            className="v2-primary"
            aria-pressed={saved}
            onClick={() => setSaved(!saved)}
          >
            {saved
              ? "Invitation saved for this visit ✓"
              : "Save this sample invitation"}
          </button>
        </V2Dialog>
      )}
    </main>
  );
}

const sonderMoods = [
  {
    name: "Drift",
    descriptor: "SLOW, WARM, OPEN",
    color: "#e1aa8c",
    duration: 14,
    notes: [130.81, 164.81, 196],
  },
  {
    name: "Gather",
    descriptor: "SOFT EDGES, SHARED SPACE",
    color: "#b8c794",
    duration: 10,
    notes: [146.83, 174.61, 220],
  },
  {
    name: "Rise",
    descriptor: "A LITTLE MORE LIGHT",
    color: "#b5bed9",
    duration: 7,
    notes: [164.81, 207.65, 246.94],
  },
];

function SonderArt({ mood }) {
  return (
    <svg
      viewBox="0 0 600 480"
      role="img"
      aria-label="Original kinetic sculpture: nested arches and a floating sphere arranged like a musical phrase"
    >
      <defs>
        <pattern
          id="sonder-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0H0v24"
            fill="none"
            stroke="#edf0e114"
            strokeWidth=".7"
          />
        </pattern>
        <clipPath id="sonder-window">
          <rect x="20" y="15" width="560" height="450" />
        </clipPath>
      </defs>
      <rect width="600" height="480" fill="url(#sonder-grid)" />
      <g clipPath="url(#sonder-window)">
        <g className="so-arch so-arch-one">
          <path
            d="M87 420V195a140 140 0 0 1 280 0v225h-66V195a74 74 0 0 0-148 0v225Z"
            fill={mood.color}
          />
          <path
            d="M104 420V195a123 123 0 0 1 246 0v225"
            fill="none"
            stroke="#f8e9d333"
            strokeWidth="1"
          />
        </g>
        <g className="so-arch so-arch-two">
          <path
            d="M230 70v196a140 140 0 0 0 280 0V70h-66v196a74 74 0 0 1-148 0V70Z"
            fill="#eee8d6"
          />
          <path
            d="M247 70v196a123 123 0 0 0 246 0V70"
            fill="none"
            stroke="#282e3240"
            strokeWidth="1"
          />
        </g>
        <g className="so-sphere">
          <circle cx="186" cy="322" r="48" fill="#d14e34" />
          <path
            d="M153 295q16-27 45-16"
            fill="none"
            stroke="#ed8262"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </g>
      <g fill="#b8bfb5" fontSize="9" fontFamily="monospace">
        <text x="20" y="20">
          FIG. 0{sonderMoods.indexOf(mood) + 1}
        </text>
        <text x="485" y="460">
          SHAPE / SOUND
        </text>
      </g>
    </svg>
  );
}

function Sonder() {
  const [selected, setSelected] = useState(0);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [moving, setMoving] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [tone, setTone] = useState(false);
  const [message, setMessage] = useState("");
  const [about, setAbout] = useState(false);
  const audioRef = useRef(null);
  const toneTimer = useRef(null);
  const mood = sonderMoods[selected];
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => {
      setReduced(media.matches);
      if (media.matches) setMoving(false);
    };
    media.addEventListener("change", change);
    return () => {
      media.removeEventListener("change", change);
      clearTimeout(toneTimer.current);
      if (audioRef.current?.state !== "closed") audioRef.current?.close();
    };
  }, []);
  const playTone = async () => {
    if (audioRef.current) return;
    setTone(true);
    try {
      const AudioEngine = window.AudioContext || window.webkitAudioContext;
      if (!AudioEngine) throw new Error("unavailable");
      const context = new AudioEngine();
      audioRef.current = context;
      await context.resume();
      setTone(true);
      setMessage(`${mood.name}: a short, original three-note chord.`);
      const start = context.currentTime;
      mood.notes.forEach((frequency) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.035, start + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 1.5);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + 1.6);
      });
      toneTimer.current = setTimeout(() => {
        context.close();
        audioRef.current = null;
        setTone(false);
      }, 1700);
    } catch {
      setTone(false);
      setMessage(
        "Audio is unavailable in this browser. You can still explore the shapes.",
      );
      if (audioRef.current?.state !== "closed") await audioRef.current?.close();
      audioRef.current = null;
    }
  };
  return (
    <main
      className={`v2-design so ${moving && !reduced ? "so-moving" : "so-paused"}`}
      style={{ "--so-tempo": `${mood.duration}s`, "--so-accent": mood.color }}
    >
      <header className="so-header">
        <span className="so-brand">
          sonder<span>·</span>
        </span>
        <span className="v2-mono">
          A SMALL SPACE
          <br />
          TO FEEL SOMETHING.
        </span>
        <nav aria-label="Sound studio">
          <button onClick={() => setAbout(true)}>The idea</button>
          <span className="v2-mono">EST. IN THE IN-BETWEEN</span>
        </nav>
        <button className="so-sound" onClick={playTone} disabled={tone}>
          {tone ? "Playing a little tone" : "Listen for a moment"}
          <span aria-hidden="true">◖))</span>
        </button>
      </header>
      <section className="so-hero">
        <div className="so-copy">
          <span className="v2-mono">
            SHAPES OF SOUND / AN INTERACTIVE STUDY
          </span>
          <h1>
            Somewhere
            <br />
            between
            <br />
            <em>sound</em> &<br />
            stillness.
          </h1>
          <p>
            Nothing to finish. Nowhere to get to.
            <br />A few shapes. A little resonance.
            <br />A moment that belongs to you.
          </p>
          <div className="so-copy-bottom">
            <span className="so-small-mark" aria-hidden="true">
              ∿
            </span>
            <span className="v2-mono">
              CHOOSE A MOOD.
              <br />
              SEE WHERE IT TAKES YOU.
            </span>
          </div>
        </div>
        <div className="so-sculpture">
          <div className="so-art-label v2-mono">
            <span>THE LISTENING ROOM</span>
            <span>0{selected + 1} / 03</span>
          </div>
          <SonderArt mood={mood} />
          <div className="so-art-caption">
            <span className="so-mood-word">{mood.name.toLowerCase()}.</span>
            <span className="v2-mono">
              {mood.descriptor}
              <br />
              AN ORIGINAL SYNTHESIZED CHORD
            </span>
          </div>
        </div>
      </section>
      <section className="so-console" aria-label="Motion and sound controls">
        <div className="so-moods" role="group" aria-label="Listening mood">
          {sonderMoods.map((item, i) => (
            <button
              key={item.name}
              aria-label={item.name}
              disabled={tone}
              aria-pressed={selected === i}
              onClick={() => {
                setSelected(i);
                setMessage("");
              }}
            >
              <span className="v2-mono">0{i + 1}</span>
              <strong>{item.name}</strong>
              <span className="so-mood-indicator" />
            </button>
          ))}
        </div>
        <button
          className="so-motion"
          disabled={reduced}
          aria-pressed={moving && !reduced}
          onClick={() => setMoving(!moving)}
        >
          <span aria-hidden="true">{moving && !reduced ? "Ⅱ" : "▷"}</span>
          {reduced
            ? "Reduced motion is on"
            : moving
              ? "Pause the motion"
              : "Let it move"}
        </button>
        <button className="so-play" disabled={tone} onClick={playTone}>
          {tone ? "Playing…" : "Play this tone"}
          <V2Arrow />
        </button>
      </section>
      <footer className="so-footer">
        <span className="v2-mono">DESIGNED TO BE FELT. NOT FINISHED.</span>
        <p role="status">
          {message || "Sound plays only when you ask. Take your time."}
        </p>
        <span className="v2-mono">SONDER / 2026</span>
      </footer>
      {about && (
        <V2Dialog title="A little resonance." onClose={() => setAbout(false)}>
          <p>
            Sonder is an original interactive study in form, rhythm, and
            attention. Each mood pairs a slowly moving sculpture with a short,
            synthesized three-note chord.
          </p>
          <p>
            Sound plays only after you press a listening button. Motion can be
            paused and respects your system’s reduced-motion setting. No
            recordings or external audio assets are used.
          </p>
        </V2Dialog>
      )}
    </main>
  );
}

function OriginalDirectionsTwo() {
  return (
    <DesignCanvas>
      <DCSection
        id="second-civic"
        title="Community Spaces"
        subtitle="Common Shelf — a fictional library organised around the reader."
      >
        <DCArtboard
          id="common-shelf"
          label="Common Shelf · A Library for Everyone"
          width={1200}
          height={1100}
        >
          <CommonShelf />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="second-agency"
        title="Independent Studios"
        subtitle="Counterform — digital craft with the precision of a working drawing."
      >
        <DCArtboard
          id="counterform"
          label="Counterform · Digital Craft Studio"
          width={1200}
          height={960}
        >
          <Counterform />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="second-product"
        title="Tools for Attention"
        subtitle="Interval — an illustrated physical object with a working browser timer."
      >
        <DCArtboard
          id="interval"
          label="Interval · A Little Time to Think"
          width={1200}
          height={910}
        >
          <Interval />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="second-financial"
        title="Money Together"
        subtitle="Gather — a shared weekend fund, down to the penny."
      >
        <DCArtboard
          id="gather"
          label="Gather · The Shared Trip Fund"
          width={430}
          height={940}
        >
          <Gather />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="second-social"
        title="Culture Carousels"
        subtitle="Sideplate — three invitations to put down the phone and pass the bread."
      >
        <DCArtboard
          id="sideplate"
          label="Sideplate · The Supper Club"
          width={720}
          height={900}
        >
          <Sideplate />
        </DCArtboard>
      </DCSection>
      <DCSection
        id="second-animation"
        title="Playable Motion"
        subtitle="Sonder — sculptural motion and original synthesized chords."
      >
        <DCArtboard
          id="sonder"
          label="Sonder · Shapes of Sound"
          width={1200}
          height={880}
        >
          <Sonder />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <OriginalDirectionsTwo />,
);
