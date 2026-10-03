# AI Interaction Log — HW#1

**Student:** Ahmed Alghaili (艾哈邁德·阿爾蓋利) · m1561025
**Live site:** https://alghailiahemd.netlify.app
**Tools used:** v0 by Vercel (starting template), Claude Code with Claude Opus 5.5 (audit, redesign, content updates), Emil Kowalski's design-engineering skill for Claude Code

**Starting point.** The site began as a community v0 recreation of the *Paperfolio* template. Before this homework I had already replaced the template text with my own projects, experience, and contact links (repository history, May 2026). The interactions below cover the HW#1 work: checking the site against the rubric, redesigning it, and correcting the content.

---

## Interaction 1 — Checking the site against the HW#1 requirements

**Prompt (verbatim):**
> "look this project my portgolio and now I have this task so I want you to check it and make this project ready for task 3 and 4 I will do it later after I finish everything" *(followed by the full HW#1 instructions)*

**AI output:**
- Read every component and compared it with the four required sections. It found these gaps: no Chinese name, no Student ID, no Education section, and no Contact item in the navigation.
- Found problems I hadn't noticed:
  - A hidden article card loaded an image from my local Windows path (`D:\Projects\...`), which would break on any other machine.
  - "More about me" and "See full resume" looked like links but went nowhere.
  - Unused template files still had "Lorem ipsum" testimonials.
  - The browser tab title still said "Paperfolio".
- Added an Education section and an EN/CN name + Student ID panel, linked the dead buttons, removed the unused files, and wrote a README that credits the original template.

**Iteration notes / human judgment:**
- The AI could not invent my Chinese name, Student ID, or degrees, so it left clearly marked placeholders in one file (`lib/student-info.ts`). I filled them in later (Interaction 5).
- I kept the template credit in the README. The design started from someone else's template, and saying so is part of using AI honestly.

---

## Interaction 2 — Design upgrade using a design-engineering skill

**Prompt (verbatim):**
> "/emil-design-eng" → "try to improve the design make it more attractive add more thing make it so good"

**AI output:**
- Took before-and-after screenshots on desktop and mobile to find real problems rather than guessing:
  - My photo had a frame baked into the image, which created a double border.
  - The Services grid ended on a single lonely card.
  - Service cards on mobile each filled a whole screen.
- Built a motion system:
  - custom easing curves
  - press feedback on buttons (`scale(0.97)`)
  - hover effects limited to real mouse pointers, so phones don't get stuck hover states
  - staggered scroll reveals and a scroll-progress bar
  - support for the "reduce motion" accessibility setting
- Added new pieces:
  - a sticky nav that highlights the current section
  - a "student ID card" in About
  - a Tech Stack section
  - project filter tabs
  - an experience timeline
  - a Contact section with a copy-email button

**Iteration notes / human judgment:**
- The AI replaced the template's fake company logos in Experience with icons for each role, because the logos suggested employers I never worked for.
- It removed a research tag ("X-ray") it had guessed but couldn't verify. That turned out to be the right call: when I later gave it the real paper title, the tag was correct, but it only went back on the site once it was confirmed.

---

## Interaction 3 — Removing what the AI over-added

**Prompts (verbatim):**
> "remove this 🤖 LLM · RAG and 👁️ Computer Vision and 3+ Years building AI · 3 Research papers · 9 Shipped projects from the hero section"
>
> "for this just make one the black one no need two" *(with a screenshot of the two crossing marquee strips)*

**AI output:** Removed the floating labels on the portrait and the stats box from the hero, and reduced the two crossing skill strips to the single black one. It also deleted the CSS that only the removed strip used.

**Iteration notes / human judgment:**
This was my main design judgment call. The AI's version was "more", but the hero felt busy: the floating labels covered my photo, and the stats repeated numbers already shown in the About section. Two crossing strips were visually noisy. I kept the AI's structural improvements and removed the decoration that didn't help someone understand who I am.

---

## Interaction 4 — Making the research section accurate

**Prompt (verbatim):**
> "first paper https://ieeexplore.ieee.org/document/11652557 https://doi.org/10.1109/ICCE-Taiwan71481.2026.11652557 seond paper: https://doi.org/10.32877/bt.v8i2.3155 [Google Scholar link] add the name of papers also remove the paper that underreview"

**AI output:**
- Looked both DOIs up in the Crossref registry instead of typing titles from memory, and used the official titles, venues, years, and author lists:
  - *Adaptive Transfer Learning Strategies for a Vision Transformer-Based Seismic Foundation Model* (IEEE ICCE-Taiwan 2026)
  - *YOLOv11n-Based Deep Learning Approach for Detecting Fractures in Pediatric X-Rays* (bit-Tech, 2025)
- Rebuilt the research cards with author lists, publication badges, and IEEE Xplore / DOI / Google Scholar buttons.
- Updated every other place that still said "3 papers" to "2".

**Iteration notes / human judgment:**
I removed the paper that is still under review. A portfolio for a course should only claim work that has been verified and published. The AI only noticed the stale "3 research publications" text in the About section because it searched the whole site after the change, which is a good habit to copy.

---

## Interaction 5 — Real identity and education details

**Prompt (verbatim):**
> "add this: Master's Degree in Artificial Intelligence 2026- still student, Chang Gung University (CGU) · Taoyuan, Taiwan; Bachelor of Informatics 2022 – 2025, Universitas Islam Indonesia (UII) · Yogyakarta, Indonesia • GPA: 3.87 / 4.00; student id: m1561025; for chines name just write it by your self"

**AI output:**
- Added both degrees, with a "Current student" badge for CGU and a GPA badge for UII.
- Set the Student ID and wrote a Chinese transliteration of my name in Traditional characters (used in Taiwan): 艾哈邁德·阿爾蓋利.
- Updated my location from Yogyakarta to Taoyuan, Taiwan across the site.

**Iteration notes / human judgment:**
- The AI explained the transliteration (艾哈邁德 = Ahmed, 阿爾蓋利 = Al-ghai-li). It also warned that if the university gave me an official Chinese name, that one should be used instead.
- Facts about me (degrees, GPA, ID) came from me. The AI's job was to present them, not to fill them in.
