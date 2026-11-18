# Manoj R — Developer Portfolio

A responsive, animated portfolio built with **React 19, Vite, Tailwind CSS 4, Framer Motion and AOS**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Where to edit content

Everything (name, links, skills, experience, projects, certifications) lives in one file:

`src/data/portfolioData.js`

## Optional assets

- **Photos** — `src/assets/about/avatar.jpeg` (About badge) and `avatar-formal.jpeg` (hero portrait + hover on the badge). Replace to change.
- **Hero video** — add `src/assets/hero/hero.mp4` to enable the background reel and play button. Until then, a dark gradient is shown.
- **Resume** — replace `public/Manoj_R_Resume.pdf`.
- **Project links** — set `links.github` / `links.demo` for each project in `portfolioData.js`; buttons appear automatically.
- **Certificates link** — set `certificates.viewAllUrl` to show a "View All Certificates" button.

## Contact form

The form uses **EmailJS** when configured, and automatically falls back to [FormSubmit](https://formsubmit.co).

> ⚠️ **Deploying?** `import.meta.env` values are baked in at **build time**. If you build on Netlify/Vercel/CI, add these to the hosting dashboard's environment variables:
> `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
>
> Without them the fallback (FormSubmit) is used — the **first** submission there sends an activation email to the address in `src/data/portfolioData.js` (`personalInfo.emails.primary`). Click the confirmation link once, and messages will arrive in that inbox.

## Deployment

```bash
npm run build      # outputs to /dist — deploy this folder
npm run preview    # verify the production build locally
```

After deploy, update `og:url` in `index.html` with your final domain so LinkedIn/GitHub link previews render perfectly (the preview image lives at `/og-image.png`).
