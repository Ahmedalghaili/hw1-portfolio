# Ahmed Alghaili — Coursework Portfolio (HW#1)

Personal portfolio website built with generative AI as a collaborator, for HW#1 *Build Your CourseWork Website with Generative AI*.

- **Live site:** https://ahmedalghaili.github.io/hw1-portfolio/
- **Student:** Ahmed Alghaili (艾哈邁德·阿爾蓋利) · Student ID m1561025

## Sections

| Requirement | Where |
| --- | --- |
| About (name EN & CN, Student ID) | `components/about-section.tsx` — values in `lib/student-info.ts` |
| Education / Experience | `components/education-section.tsx`, `components/experience-section.tsx` |
| Research / Projects | `components/research-section.tsx`, `components/portfolio-section.tsx` |
| Contact / Links | `components/footer.tsx` (`#contact`) |

Visual elements: portrait photo, service illustrations, animated skills marquee. Layout is responsive from phone to desktop.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react icons.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
```

## Deployment

Hosted on **GitHub Pages** as a static export (`output: "export"` in `next.config.mjs`).
Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds with
`NEXT_PUBLIC_BASE_PATH=/<repo-name>` and publishes the `out/` folder.

Build the static site locally:

```bash
NEXT_PUBLIC_BASE_PATH=/hw1-portfolio pnpm build   # output in out/
```

## Credits

The starting layout is a community v0 recreation of the **Paperfolio** template by BRIX Templates. Content, sections, and structure were then adapted with AI assistance and manual edits. See `submission/AI_Interaction_Log.md`.
