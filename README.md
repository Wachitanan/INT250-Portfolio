# Portfolio — Alex Morgan

A responsive personal portfolio built with **Vue 3** + **TailwindCSS**, featuring a full dark / light mode toggle.

## Tech Stack

| Layer     | Library / Tool                  |
|-----------|---------------------------------|
| Framework | Vue 3 (Composition API)         |
| Styling   | Tailwind CSS v3                 |
| Router    | Vue Router v4 (hash history)    |
| Bundler   | Vite 5                          |
| Fonts     | Hanken Grotesk · Inter (Google) |
| Icons     | Material Symbols Outlined       |

## Project Structure

```
src/
├── assets/
│   └── main.css              # Tailwind directives + CSS design tokens
├── composables/
│   └── useDarkMode.js        # Singleton dark-mode composable
├── data/
│   └── projects.js           # All static content (projects, skills, experience)
├── router/
│   └── index.js              # Vue Router routes
├── components/
│   ├── SectionLabel.vue      # Accent label above headings
│   ├── StatBlock.vue         # Large number + label stat
│   ├── SkillChip.vue         # Uppercase skill tag
│   ├── ExperienceRow.vue     # Job history row
│   ├── ProcessStep.vue       # Numbered process card
│   ├── ProjectCard.vue       # Bento-grid project tile
│   ├── TheNavbar.vue         # Fixed header + mobile drawer + theme toggle
│   └── TheFooter.vue         # Site footer
├── views/
│   ├── HomeView.vue          # Hero · Selected Works · Marquee · CTA
│   ├── AboutView.vue         # Bio · Experience · Skills · CTA
│   └── ProjectDetailView.vue # Full case-study page
├── App.vue                   # Root with <RouterView> + page transitions
└── main.js                   # App entry point
```

## Dark Mode

- Toggle button in the navbar (sun / moon icon)
- Persists to `localStorage`
- Respects `prefers-color-scheme` on first visit
- Implemented via CSS custom properties on `html.dark` / `html.light`

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```
# INT250-Portfolio
# INT250-Portfolio
