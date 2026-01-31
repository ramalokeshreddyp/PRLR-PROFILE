/**
 * Portfolio Constants
 * Centralized configuration for maintainability
 */

export const PERSONAL_INFO = {
  name: "Rama Lokesh Reddy Penumallu",
  shortName: "Lokesh Reddy",
  email: "rlpreddy565@gmail.com",
  phone: "+91 6305958669",
  location: "India",
  role: "Core Developer",
  tagline: "Competitive Programmer | Software Developer | Future Data Scientist",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/ramalokeshreddyp",
  linkedin: "https://www.linkedin.com/in/rama-lokesh-reddy/",
  leetcode: "https://leetcode.com/u/rlpreddy565/",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/rlpredxj9j",
  codeforces: "https://codeforces.com/profile/personasd6i2",
  codechef: "https://www.codechef.com/users/silent_loomer",
  hackerrank: "https://www.hackerrank.com/profile/rlpreddy565",
  codestudio: "https://www.naukri.com/code360/profile/silentloomer",
} as const;

export const PROJECT_LINKS = {
  codeToWin: {
    github: "https://github.com/ramalokeshreddyp/code_to_win",
    live: "https://ct.ofzen.in/",
  },
  equilibriumLedger: {
    github: "https://github.com/ramalokeshreddyp/Financial-Ledger-API-with-Double-Entry-Bookkeeping",
    live: "https://financial-ledger-api-with-double-entry.onrender.com/",
  },
  fatePick: {
    github: "https://github.com/ramalokeshreddyp/fatepick",
    live: "https://fatepick.vercel.app/",
  },
  aiResumeScreener: {
    github: "https://github.com/ramalokeshreddyp/AI-Resume_Screener",
  },
} as const;

export const RESUME_LINK = "https://drive.google.com/file/d/13zT9j8vMIPRMEr62YxlIgnvPn09iklXc/view?usp=sharing";

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },
} as const;
