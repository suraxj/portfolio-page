# React Portfolio

A dark-themed developer portfolio built with **React + Vite + Tailwind CSS**, converted from a static HTML/CSS/JS template into reusable React components.

## Sections
- Navbar (with scroll-based active link highlighting + mobile menu)
- Hero
- About
- Skills & Technologies
- Projects
- Certifications
- Contact (form posts via formsubmit.co)
- Footer
- Back-to-top button

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are output to the `dist/` folder, ready to deploy to Vercel, Netlify, GitHub Pages, etc.

## Customize your content

Everything text/link related (name, bio, skills, projects, certifications, contact info) lives in **`src/data.js`**. Edit that one file to make it your own — no need to touch the components.

Replace the images in `public/assets/`:
- `profile.jpg` — hero photo
- `about.jpeg` — about section photo
- `resume.pdf` — your resume, linked from the "Download Resume" button

## Tech used
- React 18
- Vite 5
- Tailwind CSS 3
- Font Awesome icons (via CDN, loaded in `index.html`)
