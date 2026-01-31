# 🚀 Rama Lokesh Reddy - Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-00E5FF?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

**A stunning, feature-rich portfolio showcasing skills, projects, and achievements**

[Live Demo](https://prlr-profile.vercel.app/) • [Report Bug](https://github.com/ramalokeshreddyp/portfolio/issues) • [Request Feature](https://github.com/ramalokeshreddyp/portfolio/issues)

</div>

---

## ✨ Features

### 🎨 **Design & User Experience**
- ✅ **Cyberpunk/Tech Aesthetic** - Stunning neon colors with glass-morphism effects
- ✅ **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ✅ **Dark Theme Optimized** - Easy on the eyes with beautiful gradients
- ✅ **Smooth Animations** - Powered by Framer Motion
- ✅ **Terminal-Style Components** - Unique code editor aesthetic

### 🤖 **AI-Powered Chatbot** (NEW!)
- ✅ **Intelligent Assistant** - Trained on complete portfolio data
- ✅ **Natural Conversations** - Ask about skills, projects, achievements
- ✅ **Instant Responses** - No external API needed
- ✅ **Suggested Questions** - Guided user experience
- ✅ **Beautiful UI** - Seamlessly integrated with portfolio design

### ⚡ **Performance & Accessibility**
- ✅ **Lightning Fast** - Optimized loading and performance
- ✅ **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards
- ✅ **Web Vitals Tracking** - Monitor FCP, LCP, FID, CLS, TTFB
- ✅ **Keyboard Navigation** - Full keyboard shortcuts support
- ✅ **Screen Reader Friendly** - WCAG compliant
- ✅ **Reduced Motion Support** - Accessible to all users

### 🎯 **Interactive Features**
- ✅ **Scroll Progress Indicator** - Visual progress bar + circular indicator
- ✅ **Back to Top Button** - Smooth scroll navigation
- ✅ **Keyboard Shortcuts** - Quick navigation (H/S/P/C/Esc/?)
- ✅ **Page Loader** - Professional loading screen
- ✅ **Toast Notifications** - User feedback system
- ✅ **Mobile Menu** - Responsive navigation

### 📊 **Portfolio Sections**
- 👨‍💻 **Hero** - Introduction with profile and social links
- 🖥️ **About** - Terminal-style biography
- 💻 **Skills** - Interactive code editor display
- 🚀 **Projects** - 4 major projects with live demos
- 💼 **Internships** - Git-style timeline
- 🏆 **Achievements** - Competitive programming ratings
- 📜 **Certifications** - 11+ professional certifications
- 📄 **Resume** - View and download
- 📧 **Contact** - Direct communication form

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.3.1** - Modern UI library
- **TypeScript 5.8.3** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 3.4.17** - Utility-first styling
- **Framer Motion 12.23.24** - Smooth animations

### **UI Components**
- **Shadcn/ui** - High-quality component library
- **Radix UI** - Accessible primitives
- **Lucide Icons** - Beautiful icon set

### **State & Data**
- **React Query** - Server state management
- **React Hook Form** - Form handling
- **React Router** - Client-side routing

### **Utilities**
- **clsx** - Conditional class names
- **tailwind-merge** - Merge Tailwind classes
- **Sonner** - Toast notifications

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ramalokeshreddyp/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Build variants
npm run build:dev    # Build in development mode
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `H` | Navigate to Home |
| `S` | Navigate to Skills |
| `P` | Navigate to Projects |
| `C` | Navigate to Contact |
| `Esc` | Scroll to Top |
| `?` | Toggle Shortcuts Help |

---

## 🤖 AI Chatbot

The portfolio features an intelligent AI chatbot trained on complete portfolio data.

### What it can do:
- Answer questions about skills and technologies
- Provide details about projects
- Share competitive programming achievements
- Explain internship experiences
- List certifications
- Provide contact information
- Suggest resume download

### How to use:
1. Click the chatbot button (bottom right)
2. Ask any question about the portfolio
3. Try suggested questions for guided experience

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/              # Images and static files
│   ├── components/
│   │   ├── portfolio/       # Portfolio components
│   │   │   ├── Chatbot.tsx         # AI Chatbot
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── ...
│   │   └── ui/              # Shadcn UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and services
│   │   ├── chatbotKnowledge.ts    # Portfolio data
│   │   └── chatbotService.ts      # AI logic
│   ├── pages/               # Route pages
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── README.md
├── tailwind.config.ts
└── vite.config.ts
```

---

## 🎨 Customization

### Update Personal Information
Edit `src/lib/constants.ts` and `src/lib/chatbotKnowledge.ts`

### Update Colors
Edit `src/index.css` CSS variables

### Update SEO
Edit `index.html` meta tags

---

## 🌐 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Build Manually
```bash
npm run build
# Upload 'dist' folder to hosting
```

---

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 👨‍💻 About Me

**Rama Lokesh Reddy Penumallu**
- 🎓 3rd Year CSE Student at Aditya University
- 💻 Core Developer & Competitive Programmer
- 🏆 LeetCode Rating: 1912 (Knight, Top 4.68%)
- 🌟 5★ HackerRank Problem Solver
- 📧 Email: rlpreddy565@gmail.com

### Connect with me:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rama-lokesh-reddy/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ramalokeshreddyp)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/rlpreddy565/)

---

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon set

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by Rama Lokesh Reddy

</div>
