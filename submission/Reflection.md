# Reflection: Building My Portfolio with Generative AI

**Ahmed Alghaili (艾哈邁德·阿爾蓋利) · m1561025**

## Process

I did not start from a blank page. My site began as a v0-generated recreation of the Paperfolio template, which I had already filled with my own projects and experience. For this homework I used Claude Code as a collaborator in the repository itself. First I pasted the HW#1 rubric and asked it to audit the site. Then I asked for a design upgrade guided by a design-engineering skill. After that I went through several rounds of corrections. I deployed through Netlify, connected to my GitHub repository.

## Human edits and judgment

The most useful thing the AI did was to show me what I had missed. It found that my site had no Chinese name, Student ID, or Education section, which are all required. It also found a template image that loaded from a path on my own laptop, and buttons that looked like links but went nowhere. I would probably have submitted with those errors.

The AI also tended to add too much. Its redesign put floating labels over my photo, a statistics box in the hero, and two crossing skill strips. I removed all three. The labels covered my face, the statistics repeated the About section, and the double strip was noise. I kept the structural improvements, such as the sticky navigation, the student ID card, the project filters, and the timeline, because they make the page easier to read.

Accuracy was where my judgment mattered most. I removed a paper that is still under review, because a portfolio should only claim verified work. Instead of letting the AI write paper titles from memory, I gave it the DOIs, and it pulled the official titles, venues, and author lists from Crossref. The AI could not know my degrees, GPA, or Student ID, so I supplied them. It proposed a Chinese transliteration of my name and pointed out that an official university name should take priority.

## Learnings on human–AI collaboration

First, AI is much better at checking than at deciding. Asking it to compare my site against the rubric was faster and more thorough than doing it myself. But choosing what belongs on the page stayed my job.

Second, more is not better. The AI optimizes for "impressive", and a person has to decide when something is enough.

Third, facts should come from sources, not from the model. Giving it DOIs instead of asking it to remember titles removed a whole class of possible errors.

Next time I would put the requirements in my very first prompt, so the generated structure meets them from the start instead of being fixed afterwards.
