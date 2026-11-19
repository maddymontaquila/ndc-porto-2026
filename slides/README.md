# Slides

Slides for NDC Porto 2026, featuring Aspire teammates. Built with [Reveal.js](https://revealjs.com) and Vite.

| Deck | Folder |
| --- | --- |
| Use agents to build agents with Aspire + Microsoft Agent Framework | `agents/` |
| Aspire is the map your coding agent is missing | `map/` |

Reveal.js is npm-managed; Poppins and Fira Code fonts, images and inline Lucide SVGs are local. The production build bundles everything needed to present without internet access. Resource links still need a connection.

The session decks begin with editable NDC Porto 2026 opener and title slides, followed by their speaker slides. Event and presenter details remain editable HTML. Each deck uses one-based numeric URLs (`#/1`, `#/2`, etc.) that automatically follow slide order.

The slides use local Poppins and Fira Code fonts. The agents deck includes its matching SpreaView session review QR image; the map deck closes with an editable thank-you slide.

## Presenting

Use Node.js 20.19+, 22.13+, or 24+. Run commands from this **`slides/` folder**:

```sh
npm ci
npm run dev
```

Open the landing page printed by Vite to choose a deck. Editing a source file updates the development preview.

Alternatively, run `aspire run` after `npm ci` to open the deck links in the Aspire
dashboard. `npm run aspire:build` checks the AppHost separately from the slide build.

Before the talk:

```sh
npm run build
npm run preview
```

Present from the preview URL printed by Vite. `dist/` is also ready to deploy to a static web host, at either the domain root or a subpath; keep its folder structure intact. No CDN or build server is needed to present the result. Opening source HTML directly from disk is no longer supported.

- `S` opens the speaker view (notes, timer, next slide)
- `F` goes full screen, `Esc` shows the slide overview
- Arrow keys or Space advance deliberate fragment builds before moving to the next slide; Left reverses them
- The dashboard view in “Aspire for AI dev” is an editable Aspire 17 illustration; use the live dashboard for current product details
- Slides are 1920×1080 and scale to fit the window without cropping; any extra space uses the deck's dark background, not white bars
- Transitions fade; reduced-motion preferences remove transitions while preserving click-to-reveal steps

Builds are intentionally limited to the dev/deploy comparison, four-piece overview and AppHost code in Aspireify, and the AI comparison and agent inner loop in the agents deck. The AppHost starts with Redis, then six clicks reveal configuration, Redis Commander, the frontend, its cache reference, Yarn and publishing. New code wipes in with a subtle current-line highlight; Left reverses the sequence, and reduced motion makes each reveal instant. The other slides stay fully visible on arrival.

In Aspireify, `#/audience-blanks` and `#/mad-lib` follow the Aspireify definition slide. Collect the eight audience answers before revealing the store brief; the reveal maps A to Azure and B to a generic container runtime. Start vibe coding the store, then return to the explanation slides while it builds. After the four-piece overview, cover adoption depth, production and AppHost wiring before the demo and recap. The password prompt is for an invented, disposable demo password, never a real credential.

In the agents deck, matching “Part 1 · Use AI” and “Part 2 · Build AI” dividers mark the two halves. Part 1 follows “What is Aspire?”, before the team’s AI-workflow slide. The agent inner loop comes before “Give your coding agent eyes.” Its five steps are Read the AppHost → Change code → `aspire start` → Operate → Inspect + verify. Operate covers testing user flows and running custom commands; Playwright MCP is a spoken example in the notes. Inspect + verify combines telemetry with resource and interaction inspection through MCPs. “Anatomy of a skill” explains discovery metadata, on-demand instructions, workflows and guardrails rather than teaching attendees to author their own Aspire skills. “Aspire for AI dev” bridges Demo 1 and the Part 2 divider. The framework introduction and “Modeling an agentic app in the AppHost” lead into the Agent Framework demo placeholder. The deck then closes with resources and Q&A, without a separate deployment section.

Demo 1, “Supercharge an app with Aspire + AI,” uses Barista Notes, an existing app built by someone else. The notes call for crediting its creator and demonstrating the Aspire + AI development loop rather than building a new app from scratch.

Aspireland app repository: [adamint/aspireland](https://github.com/adamint/aspireland).

“AI is how we build and ship Aspire” replaces PR-attribution statistics with the presenters’ firsthand statement that every teammate uses AI every day. It links concrete public examples, checked on 28 Oct 2026: `issue-investigation`, `pr-testing` and `backport-pr` in [microsoft/aspire’s skills](https://github.com/microsoft/aspire/tree/main/.agents/skills), plus `analyze-ci-failure` and `release-notes-generate` in its [agentic workflows](https://github.com/microsoft/aspire/tree/main/.github/workflows). Completed CI-analysis and release-note-generation runs are linked on the slide; notes distinguish assistance from autonomous approval. The dashboard illustration is editable and labeled as such; show the current Aspire 17 dashboard during the live demo.

## Editing the slides (people and agents)

- `AGENTS.md` – how slides are built and the rules to follow; coding agents working in this folder pick it up automatically (`CLAUDE.md` points to it)
- `docs/design-guidelines.md` – Aspire brand colors, type scale, layout and voice
- `docs/brand/tokens.json` – Aspire design system tokens
- `templates/index.html` – a runnable deck with one example of every slide layout; copy a section to start a new slide

## Layout

- `index.html` – landing page linking the session decks
- `apphost.mts` / `aspire.config.json` – Aspire hosting for the decks
- `package.json` / `package-lock.json` / `vite.config.js` – shared dependencies and slide build
- `eslint.config.mjs` / `tsconfig.apphost.json` – AppHost linting and type-checking
- `shared/deck.js` – shared Reveal.js configuration, npm imports and image previews
- `shared/fonts/` – Poppins and Fira Code (latin subsets, from Fontsource)
- `shared/img/` – Aspire logo and artwork, speaker photos
- `shared/deck.css` – shared slide styles

Each slide is a `<section>` with one `.slide` div holding its layout as inline styles, and speaker notes in `<aside class="notes">`.

The HTML decks and shared assets in this repository are the source of truth. Edit them directly and rebuild with Vite.
