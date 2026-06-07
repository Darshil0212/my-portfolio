# Portfolio Deployment Guide

Use this file as the single reference for local setup, checks, and deployment.

## 1. Local Setup

```powershell
cd d:\portfolio-template\template-devstarter
npm install
npm run dev
```

Open:

```text
http://localhost:3002
```

## 2. Quick Checks

- Homepage loads without errors
- Hero text and typewriter animation work
- Mobile menu opens and closes
- Projects and education sections render correctly
- Resume download works
- Footer links open correctly
- Light/dark theme toggle works

## 3. Production Build

```powershell
npm run build
```

If the build complains about TLS in your environment, use:

```powershell
$env:NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1
npm run build
```

## 4. GitHub Push

```powershell
git init
git add .
git commit -m "Deploy portfolio"
git branch -M main
git remote add origin https://github.com/Darshil0212/darshil-kachhadiya-portfolio.git
git push -u origin main
```

## 5. Vercel Deploy

1. Go to [vercel.com](https://vercel.com).
2. Sign in with GitHub.
3. Import the portfolio repository.
4. Keep the framework as Next.js.
5. Set the build command to `npm run build`.
6. Add the environment variable below if needed:

```text
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1
```

7. Deploy the project.

## 6. After Deploy

- Test the live URL on desktop and mobile
- Check the resume download
- Verify the GitHub, LinkedIn, email, and WhatsApp links
- Confirm the theme and header/footer layout on phone view

## 7. Content Edits

Update portfolio content in:

```text
data/portfolio.ts
```

That file controls:

- Name and role
- Skills
- Experience
- Education
- Projects
- Social links

