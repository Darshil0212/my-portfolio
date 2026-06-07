# Darshil Kachhadiya — Portfolio Guide

> **Status: IMPLEMENTED ✅**  
> Portfolio personalize ho chuka hai. Neeche deploy steps follow karo.

---

## ✅ Kya Implement Ho Chuka Hai

| Feature | Status | Details |
|---------|--------|---------|
| Naam & Branding | ✅ | Header: `DK / Darshil` — simple, theme-matched |
| Hero Typewriter | ✅ | FULL STACK + typing animation (DEV_, ENGINEER_, BUILDER_, CREATOR_) |
| SYS.STATUS Panel | ✅ | Real uptime timer, skill bars, project count, online status |
| About Me | ✅ | Resume-based content |
| Experience | ✅ | 3ni Infotech + Smart Technica |
| Education | ✅ | M.Sc IT, BCA, 12th, 10th |
| Skills | ✅ | Frontend, Backend, Database & Tools |
| Projects (9 total) | ✅ | Top 3 show → Load More (3 at a time) with animation |
| Project Cards | ✅ | No images — code-style preview panel (theme-matched) |
| Dark / Light Mode | ✅ | Header mein toggle button |
| Mobile Nav | ✅ | Hamburger menu — all screen sizes |
| Resume Download | ✅ | `Darshil_Kachhadiya_Resume.pdf` — click = download |
| Real Links Only | ✅ | Koi `#` link nahi — sab working |
| Contact Section | 💬 Commented | Future ke liye saved (Formspree ready) |
| Footer | ✅ | GitHub, LinkedIn, Email — no Twitter |
| SEO | ✅ | Title, description, sitemap, robots |

---

## 🔗 Real Links (Portfolio Mein Use Ho Rahe Hain)

```
Email:      kachhadiyadarshil54@gmail.com
Phone:      +91 7624055465
LinkedIn:   https://www.linkedin.com/in/darshil-kachhadiya-2a701134a
GitHub:     https://github.com/Darshil0212
Resume:     /Darshil_Kachhadiya_Resume.pdf
Live Demo:  http://aidiamond.3niinfotech.com/  (AI Diamond project only)
```

### Project Links Logic
| Project | Live Demo | Other Link |
|---------|-----------|------------|
| AI Diamond | ✅ Live URL | GitHub Profile |
| Baaki 8 projects | ❌ Private/No URL | Email (Discuss Project) + GitHub Profile |

> Company projects private hain — isliye "DISCUSS PROJECT" email link hai. Interview mein explain kar sakte ho.

---

## 📁 Files Structure (Implemented)

```
template-devstarter/
├── app/
│   ├── page.tsx              ← Main page (sections composed)
│   ├── layout.tsx            ← SEO metadata + theme
│   ├── globals.css           ← Theme + animations
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── site-header.tsx   ← Nav + theme toggle + resume + mobile menu
│   │   └── site-footer.tsx
│   ├── sections/
│   │   ├── hero-section.tsx  ← Typewriter + CTAs
│   │   ├── sys-status-panel.tsx ← Real working stats
│   │   ├── projects-section.tsx ← Load more 3 at a time
│   │   └── project-card.tsx  ← Text-based project preview
│   └── ui/
│       ├── typewriter-text.tsx
│       └── theme-toggle.tsx
├── data/
│   └── portfolio.ts          ← SAARA CONTENT YAHAN — edit yahi karo
└── public/
    ├── Darshil_Kachhadiya_Resume.pdf
    ├── hero-bg.jpg              ← Hero background (in use)
    └── og.jpg                   ← Social share preview (in use)
```

### Content Edit Karna Ho To
Sirf **`data/portfolio.ts`** edit karo — naam, projects, experience, skills sab yahan hai.

---

## 🚀 Deploy Karo — Step by Step (Vercel)

### Step 1: Local Test Karo

```powershell
cd d:\portfolio-template\template-devstarter
npm install
npm run dev
```

Browser mein kholo: **http://localhost:3002**

Check karo:
- [ ] Naam sahi dikhe (Darshil Kachhadiya)
- [ ] Typewriter animation chale
- [ ] SYS.STATUS uptime badhta dikhe
- [ ] 3 projects dikhe, "Load More" se 3 aur khule
- [ ] Resume download ho
- [ ] Dark/Light mode toggle kaam kare
- [ ] Mobile pe menu khule
- [ ] Tablet layout properly adjust ho
- [ ] Desktop pe grid aur spacing theek dikhe

> Tip: Browser devtools mein responsive mode use karo aur phone/tablet/desktop views check karo.

---

### Step 2: Build Test Karo

```powershell
$env:NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1
npm run build
```

Agar error aaye to pehle fix karo, phir deploy karo.

---

### Step 3: GitHub Pe Push Karo

```powershell
cd d:\portfolio-template\template-devstarter

git init
git add .
git commit -m "Personalize portfolio for Darshil Kachhadiya - Full Stack Developer"
```

GitHub pe naya repo banao:
1. [github.com/new](https://github.com/new) pe jao
2. Repo name: **`darshil-kachhadiya-portfolio`** (professional URL ke liye)
3. Public repo rakho
4. Create repository

Phir push karo:

```powershell
git remote add origin https://github.com/Darshil0212/darshil-kachhadiya-portfolio.git
git branch -M main
git push -u origin main
```

---

### Step 4: Vercel Pe Deploy Karo

1. [vercel.com](https://vercel.com) pe jao
2. **Sign up with GitHub** (Darshil0212 account se)
3. **Add New Project** → `darshil-kachhadiya-portfolio` select karo
4. Settings default rakho:
   - Framework: **Next.js** (auto-detect)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output: default
5. **Environment Variable** add karo (TLS fix ke liye):
   ```
   NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS = 1
   ```
6. **Deploy** button dabao
7. 2-3 minute wait — live URL milega

---

### Step 5: Custom Domain Setup (Professional URL)

Default URL: `darshil-kachhadiya-portfolio.vercel.app`

**Better URL options:**
| Option | Cost | Example |
|--------|------|---------|
| Vercel subdomain | Free | `darshil-kachhadiya.vercel.app` |
| Custom domain | ~₹500-800/year | `darshilkachhadiya.dev` |

**Vercel subdomain rename:**
1. Vercel Dashboard → Project → Settings → Domains
2. Add: `darshil-kachhadiya.vercel.app`

**Custom domain (optional):**
1. [Namecheap](https://namecheap.com) ya [GoDaddy](https://godaddy.com) se domain lo
2. Vercel → Domains → Add your domain
3. DNS records Vercel ke hisaab se set karo

---

### Step 6: Deploy Ke Baad Checklist

- [ ] Live URL browser mein kholo — sab sections dikhe
- [ ] Mobile phone pe check karo (responsive)
- [ ] Resume download test karo
- [ ] AI Diamond Live Demo link test karo
- [ ] GitHub / LinkedIn links test karo
- [ ] Dark mode test karo

---

### Step 7: LinkedIn + Resume Update

Portfolio live hone ke baad:

**LinkedIn Headline:**
```
Full Stack Developer | React.js | MERN Stack | Node.js | 2+ Years | Surat
```

**LinkedIn Featured Section:**
- Portfolio URL add karo

**Resume Mein:**
- Portfolio URL add karo (top section mein)
- Example: `Portfolio: https://darshil-kachhadiya.vercel.app`

**Naukri Profile:**
- Portfolio link add karo

---

## 📋 9 Projects List (Portfolio Mein)

| # | Project | Type | Live URL |
|---|---------|------|----------|
| 1 | 💎 AI Diamond Business System | Enterprise | ✅ aidiamond.3niinfotech.com |
| 2 | 🧾 GST Billing Web Software | Full Stack | Email discuss |
| 3 | 💍 Kalista Jewelry E-Commerce | E-Commerce | Email discuss |
| 4 | 🧬 Nucleotide Genomics Platform | Enterprise | Email discuss |
| 5 | 🚚 Transportation Logistics UI | UI/UX | Email discuss |
| 6 | 🛒 Webibazar E-Commerce UI | UI/UX | Email discuss |
| 7 | 💼 Heaven Finsol Website | UI/UX | Email discuss |
| 8 | 🎧 SoundSphere Music Concert UI | UI/UX | Email discuss |
| 9 | 🍔 PetPuja Food Website | Full Stack | Email discuss |

---

## 🛠️ Future Updates (Jab Chaho)

### Contact Form Enable Karna
`app/page.tsx` mein commented contact section hai. Enable karne ke liye:
1. [formspree.io](https://formspree.io) pe free account banao
2. Form ID lo
3. Comment hatao aur `YOUR_FORM_ID` replace karo
4. Nav mein Contact link add karo

### Naya Project Add Karna
`data/portfolio.ts` → `projects` array mein naya object add karo:

```typescript
{
  title: "Project Name",
  emoji: "🚀",
  description: "Short description",
  features: ["Feature 1", "Feature 2"],
  tags: ["React.js", "Node.js"],
  type: "Full Stack",
  liveUrl: "https://...",  // optional
  isCompanyProject: true,
}
```

### typewriter-effect Library Install (Optional)
Agar baad mein npm SSL fix ho jaye:
```powershell
npm install typewriter-effect
```
Abhi custom typewriter component use ho raha hai — same effect.

---

## 👤 Personal Info (Reference)

```
Name:     Darshil Kachhadiya
Role:     Full Stack Developer
Phone:    +91 7624055465
Email:    kachhadiyadarshil54@gmail.com
LinkedIn: linkedin.com/in/darshil-kachhadiya
GitHub:   github.com/Darshil0212
Location: Surat, Gujarat, India
```

### Experience
| Company | Role | Period |
|---------|------|--------|
| 3ni Infotech | Frontend Developer | July 2025 – Present |
| Smart Technica | Frontend Developer | April 2024 – July 2025 |

### Education
| Degree | Institution | Period |
|--------|-------------|--------|
| M.Sc IT (Pursuing) | BAOU, Ahmedabad | 2025 – Present |
| BCA (First Class Distinction) | VNSGU, Surat | 2021 – 2024 |
| 12th HSC (GSEB) — 71.19 PR | Neel Madhav Public School | 2021 – 2022 (MAR 2022) |
| 10th SSC (GSEB) — 79.33 PR | Neel Madhav Public School | 2019 – 2020 (MAR 2020) |

---

## ❌ Mat Karna

| Avoid | Reason |
|-------|--------|
| CTC portfolio pe likhna | Sirf interview mein bolo |
| Fake projects/skills | Interview mein problem |
| `#` placeholder links | Recruiter click karega |
| Theme/CSS badalna | Current design professional hai |

---

## 🎯 Interview Tips

**2-Minute Intro:**
> "Hi, I'm Darshil Kachhadiya, a Full Stack Developer from Surat with 2+ years of experience in React.js. Currently at 3ni Infotech, I build production apps like the AI Diamond inventory system. I'm skilled in the MERN stack and looking for a Full Stack role."

**Strongest Project:** GST Billing (full MERN) + AI Diamond (live production URL)

**Portfolio URL resume aur LinkedIn dono pe hona chahiye.**

---

*Last updated: June 2025 | Implemented for Darshil Kachhadiya*
