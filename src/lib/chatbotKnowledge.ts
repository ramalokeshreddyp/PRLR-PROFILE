/**
 * Portfolio Knowledge Base
 * Comprehensive data about Rama Lokesh Reddy's portfolio
 * Used to train the AI chatbot
 */

export const portfolioKnowledgeBase = {
  personal: {
    name: "Rama Lokesh Reddy Penumallu",
    shortName: "Lokesh Reddy",
    role: "Core Developer",
    title: "3rd Year CSE Student | Core Developer | Competitive Programmer",
    tagline: "Competitive Programmer | Software Developer | Future Data Scientist",
    education: "3rd Year Computer Science Engineering Student at Aditya University",
    location: "India",
    email: "rlpreddy565@gmail.com",
    phone: "+91 6305958669",
    about: "Passionate 3rd-year CSE student who loves solving problems, building software, and learning new technologies. Strong in C++, DSA, competitive programming, and full-stack development.",
  },

  skills: {
    programming: ["C++", "Java", "Python", "C", "SQL"],
    dataStructures: ["Data Structures", "Algorithms", "OOP"],
    webDevelopment: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs"],
    databases: ["MySQL", "SQLite", "MongoDB"],
    dataAnalytics: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Power BI", "EDA"],
    tools: ["Git", "GitHub", "VS Code"],
  },

  achievements: {
    leetcode: {
      platform: "LeetCode",
      rating: "1912",
      badge: "Knight",
      rank: "Top 4.68%",
      description: "Achieved Knight badge with 1912 rating, ranking in top 4.68% globally",
    },
    codeStudio: {
      platform: "CodeStudio",
      rating: "1886",
      badge: "Specialist",
      description: "Specialist badge with 1886 rating",
    },
    geeksForGeeks: {
      platform: "GeeksforGeeks",
      rating: "1685",
      badge: "3★",
      problemsSolved: "500+",
      description: "3-star coder with 500+ problems solved",
    },
    codeChef: {
      platform: "CodeChef",
      rating: "1617",
      badge: "3★",
      description: "3-star competitive programmer",
    },
    codeForces: {
      platform: "CodeForces",
      rating: "1020",
      badge: "Newbie",
      description: "Active competitive programmer on CodeForces",
    },
    hackerRank: {
      platform: "HackerRank",
      rating: "5★",
      badge: "Problem Solving",
      stars: "5★ in C, C++, Java, Python, SQL",
      description: "5-star in Problem Solving and multiple programming languages",
    },
  },

  projects: [
    {
      name: "Code to Win",
      type: "Full-Stack Web Application",
      description: "Unified dashboard aggregating coding statistics from LeetCode, CodeChef, GeeksforGeeks, and HackerRank for university placement tracking with multi-role analytics.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "React Native", "Vite"],
      features: [
        "Aggregated statistics from multiple coding platforms",
        "Multi-role system (Student, Faculty, HOD, Admin)",
        "Role-based access control and analytics",
        "Automated web scraping",
        "Department-wise performance tracking",
      ],
      github: "https://github.com/ramalokeshreddyp/code_to_win",
      live: "https://ct.ofzen.in/",
      commits: 124,
    },
    {
      name: "Equilibrium Ledger Core",
      type: "Financial Engine / Backend System",
      description: "Robust double-entry bookkeeping ledger enforcing zero-sum financial transactions with strict auditability and ACID-compliant transaction handling.",
      technologies: ["TypeScript", "Node.js", "MockDB", "LocalStorage", "Docker"],
      features: [
        "Double-entry bookkeeping with zero-sum enforcement",
        "ACID-compliant transaction handling",
        "Snapshot rollback and serializable isolation",
        "Overdraft prevention",
        "Balance integrity checks",
      ],
      github: "https://github.com/ramalokeshreddyp/Financial-Ledger-API-with-Double-Entry-Bookkeeping",
      live: "https://financial-ledger-api-with-double-entry.onrender.com/",
      commits: 89,
    },
    {
      name: "FatePick",
      type: "Web Application",
      description: "High-performance randomization platform to eliminate selection bias in classrooms, workshops, and professional environments with verified shuffle algorithms.",
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "jsPDF", "SheetJS"],
      features: [
        "Fair and verified shuffle algorithms",
        "Single selection and balanced team formation",
        "Topic allocation with bias elimination",
        "Bulk import support (.txt/.csv)",
        "PDF and XLSX export capabilities",
      ],
      github: "https://github.com/ramalokeshreddyp/fatepick",
      live: "https://fatepick.vercel.app/",
      commits: 56,
    },
    {
      name: "AI Resume Screener",
      type: "Machine Learning / NLP Application",
      description: "Intelligent NLP-based resume analysis system that extracts key skills, identifies gaps, and suggests personalized recommendations.",
      technologies: ["Python", "Flask", "PyPDF2", "NLP", "Jinja2"],
      features: [
        "Automated skill extraction from PDFs",
        "Gap analysis vs job requirements",
        "Personalized improvement recommendations",
        "Certification and project suggestions",
        "Data-driven insights generation",
      ],
      github: "https://github.com/ramalokeshreddyp/AI-Resume_Screener",
      commits: 32,
    },
  ],

  internships: [
    {
      role: "MERN Stack Developer – Trainee",
      company: "AIM Technologies",
      duration: "May 2025 – July 2025",
      type: "Technical Internship",
      responsibilities: [
        "Built responsive full-stack applications using MongoDB, Express.js, React.js, and Node.js",
        "Developed REST APIs and collaborated through Git/GitHub",
        "Worked on deployment and testing in development environment",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "Elevate Labs (Skill India & MSME)",
      duration: "September 2025 – November 2025",
      type: "Data Analytics Internship",
      responsibilities: [
        "Performed data cleaning, preprocessing, and Exploratory Data Analysis",
        "Created dashboards and interactive visual reports using Power BI, Excel, and Python",
        "Summarized insights for real-world business datasets",
      ],
    },
    {
      role: "Class Representative",
      company: "Aditya University",
      duration: "August 2023 – Present",
      type: "Leadership Role",
      responsibilities: [
        "Facilitated effective communication between students and faculty",
        "Coordinated with department heads to resolve class-level issues",
        "Organized group discussions and academic activities",
      ],
    },
  ],

  certifications: [
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA Deep Learning Institute",
      category: "Deep Learning",
      year: "2025",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      category: "Cloud & AI",
      year: "2025",
    },
    {
      title: "Amazon ML Summer School 2025",
      issuer: "Amazon",
      category: "Machine Learning",
      year: "2025",
    },
    {
      title: "Career Edge: Young Professional",
      issuer: "TCS iON",
      category: "Professional Development",
      year: "2025",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      category: "Data Analytics",
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      category: "Programming",
    },
    {
      title: "Software Design & Development: OOAD",
      issuer: "Infosys Springboard",
      category: "Software Engineering",
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata Forage",
      category: "AI & Analytics",
    },
    {
      title: "Software Engineer Intern (Verified Role)",
      issuer: "HackerRank",
      category: "Role Certification",
    },
    {
      title: "Software Engineer (Verified Role)",
      issuer: "HackerRank",
      category: "Role Certification",
    },
    {
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      category: "Role Certification",
    },
  ],

  socialLinks: {
    github: "https://github.com/ramalokeshreddyp",
    linkedin: "https://www.linkedin.com/in/rama-lokesh-reddy/",
    leetcode: "https://leetcode.com/u/rlpreddy565/",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/rlpredxj9j",
    codeforces: "https://codeforces.com/profile/personasd6i2",
    codechef: "https://www.codechef.com/users/silent_loomer",
    hackerrank: "https://www.hackerrank.com/profile/rlpreddy565",
    codestudio: "https://www.naukri.com/code360/profile/silentloomer",
  },

  resume: {
    driveLink: "https://drive.google.com/file/d/13zT9j8vMIPRMEr62YxlIgnvPn09iklXc/view?usp=sharing",
  },

  interests: [
    "Competitive Programming",
    "Full-Stack Development",
    "Data Structures and Algorithms",
    "Machine Learning",
    "Data Analytics",
    "Problem Solving",
    "Open Source Contribution",
  ],

  goals: [
    "Become a proficient software engineer",
    "Master data science and machine learning",
    "Contribute to open-source projects",
    "Build impactful software solutions",
    "Continuous learning and skill development",
  ],
};

export default portfolioKnowledgeBase;
