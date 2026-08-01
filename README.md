# Amira Tarek — Portfolio (Next.js + Tailwind CSS)

Personal developer portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **lucide-react** icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/layout.jsx` — root layout, fonts (Sora / Plus Jakarta Sans / JetBrains Mono), page metadata
- `app/page.jsx` — the portfolio page (About, Skills, Projects, Education, Contact)
- `app/globals.css` — Tailwind entrypoint
- `tailwind.config.js` — custom color palette + fonts
- `public/projects/*.svg` — cover illustrations for each project card

## Deploy to Vercel

1. Push this folder to a new GitHub repository (e.g. `portfolio`).
2. Go to https://vercel.com and sign in with your GitHub account.
3. Click **"Add New Project"**, select the `portfolio` repo.
4. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**.
5. After ~1 minute you'll get a live URL like `portfolio-yourname.vercel.app`.

## Editing content

All project entries, skills, and text live directly in `app/page.jsx` — update the
`projects` and `skills` arrays at the top of the file to add or change content.
