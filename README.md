# Arockia Shantha A – Developer Portfolio

A responsive personal portfolio website built with React, showcasing my projects, skills, internship experience, education, and certifications.

**Live site:** https://portfolio-wine-beta-23.vercel.app

## Features
- Dark and light theme toggle
- Typing effect and scroll animations
- Project cards, experience timeline, and certification cards
- Working contact form using EmailJS
- Resume link, back-to-top button, and custom 404 page
- Fully responsive on mobile, tablet, and desktop

## Tech Stack
React.js, Vite, Tailwind CSS, Framer Motion, Lucide React, React Router, EmailJS

## Getting Started
1. Clone the repo:
   ```
   git clone https://github.com/arockiashantha/portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file (copy `.env.example`) and add your EmailJS values:
   ```
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open http://localhost:5173

To create a production build, run `npm run build`.

## Customising
- Personal details, education, and experience: `src/data/personalData.js`
- Skills: `src/data/skillsData.js`
- Projects: `src/data/projectsData.js`
- Certifications: `src/data/certificationsData.js`
- Profile photo: `public/images/`

## Contact
- Email: arockiashantha9@gmail.com
- LinkedIn: https://linkedin.com/in/arockia-shantha-a-59a9052a2
- GitHub: https://github.com/arockiashantha
- LeetCode: https://leetcode.com/u/Arockia_Shantha_A