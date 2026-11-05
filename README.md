# Arockia Shantha A – Developer Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide icons + EmailJS.

## Run locally
1. Extract the ZIP.
2. Open the extracted `portfolio` folder in VS Code.
3. Open the integrated terminal (Ctrl + `).
4. Install dependencies: `npm install`
5. Start the dev server: `npm run dev`
6. Open the URL shown in the terminal, usually http://localhost:5173
7. Production build: `npm run build` (output in `dist/`, preview with `npm run preview`)

Requires Node.js 18 or newer.

## Where to edit things
| What | File |
| --- | --- |
| Name, contact info, about text, education, internship | `src/data/personalData.js` |
| Skills and core skills | `src/data/skillsData.js` |
| Projects (add `github` / `demo` URLs here) | `src/data/projectsData.js` |
| Certifications | `src/data/certificationsData.js` |
| Colours (dark and light) | CSS variables at the top of `src/index.css` |

## Replace the resume
Put your real resume at `public/resume.pdf` (keep the same file name). The current file is a one-line placeholder.

## Add your photo
Copy your photo to `public/images/` (for example `profile.jpg`) and set `profileImage: '/images/profile.jpg'` in `src/data/personalData.js`.

## Project links
In `src/data/projectsData.js`, replace `github: null` or `demo: null` with a URL string. Buttons with `null` show as "Coming Soon".

## Contact form (EmailJS)
1. Create a free account at https://www.emailjs.com, add an email service and a template.
2. In the template, use these variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}` (also available: `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`).
3. Copy `.env.example` to `.env` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
4. Restart `npm run dev`. Without these values the form shows a setup message and does not send.

## Deploying
Run `npm run build` and upload `dist/` to Netlify, Vercel or GitHub Pages. For Netlify/Vercel, add the three EmailJS variables in the project's environment settings.
