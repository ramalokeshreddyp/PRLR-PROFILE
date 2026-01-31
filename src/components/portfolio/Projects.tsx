import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, GitBranch, GitCommit } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeHeader from "./CodeHeader";

const projects = [
  {
    title: "Code to Win",
    subtitle: "Unified Coding Platform Dashboard",
    description: "A unified dashboard aggregating coding statistics from LeetCode, CodeChef, GeeksforGeeks, and HackerRank for university placement tracking with multi-role analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "React Native", "Vite"],
    features: [
      "Aggregated stats from LeetCode, CodeChef, GFG & HackerRank",
      "Multi-role system (Student, Faculty, HOD, Admin)",
      "Role-based access, analytics & reporting",
      "Automated scraping & configurable scoring",
      "Department-wise performance analytics",
    ],
    gradient: "from-secondary to-cyber-purple",
    githubUrl: "https://github.com/ramalokeshreddyp/code_to_win",
    liveUrl: "https://ct.ofzen.in/",
    commits: 124,
    branch: "main",
  },
  {
    title: "Equilibrium Ledger Core",
    subtitle: "High-Integrity Financial Engine",
    description: "A robust double-entry bookkeeping ledger enforcing zero-sum financial transactions with strict auditability and ACID-compliant transaction handling.",
    tech: ["TypeScript", "Node.js", "MockDB", "LocalStorage", "Docker"],
    features: [
      "Double-entry bookkeeping with zero-sum enforcement",
      "ACID-compliant transaction handling",
      "Snapshot rollback & serializable isolation",
      "Overdraft prevention & balance integrity checks",
      "Atomic validation with durability guarantees",
    ],
    gradient: "from-neon-green to-cyber-cyan",
    githubUrl: "https://github.com/ramalokeshreddyp/Financial-Ledger-API-with-Double-Entry-Bookkeeping",
    liveUrl: "https://financial-ledger-api-with-double-entry.onrender.com/",
    commits: 89,
    branch: "main",
  },
  {
    title: "FatePick",
    subtitle: "Professional Randomization Platform",
    description: "A high-performance randomization platform to eliminate selection bias in classrooms, workshops, and professional environments with verified shuffle algorithms.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "jsPDF", "SheetJS"],
    features: [
      "Fair & verified shuffle algorithms",
      "Single selection & balanced team formation",
      "Topic allocation with bias elimination",
      "Bulk import (.txt/.csv) support",
      "PDF & XLSX export with client-side processing",
    ],
    gradient: "from-cyber-purple to-cyber-pink",
    githubUrl: "https://github.com/ramalokeshreddyp/fatepick",
    liveUrl: "https://fatepick.vercel.app/",
    commits: 56,
    branch: "main",
  },
  {
    title: "AI Resume Screener",
    subtitle: "Smart Resume Analyzer",
    description: "An intelligent NLP-based resume analysis system that extracts key skills, identifies gaps, and suggests personalized recommendations.",
    tech: ["Python", "Flask", "PyPDF2", "NLP", "Jinja2"],
    features: [
      "Automated skill extraction from PDFs",
      "Gap analysis vs job requirements",
      "Personalized improvement recommendations",
      "Certification and project suggestions",
      "Data-driven insights generation",
    ],
    gradient: "from-cyber-cyan to-cyber-blue",
    githubUrl: "https://github.com/ramalokeshreddyp/AI-Resume_Screener",
    liveUrl: null,
    commits: 32,
    branch: "main",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true, 
    margin: "-80px",
    amount: 0.3 
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }
      } : {}}
      className="relative group"
    >
      {/* Terminal-style project card */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] shadow-2xl hover:shadow-[0_20px_60px_rgba(0,229,255,0.2)] transition-all duration-500">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[hsl(222,47%,11%)] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <GitBranch className="w-3 h-3" />
              {project.branch}
            </span>
            <span className="flex items-center gap-1">
              <GitCommit className="w-3 h-3" />
              {project.commits} commits
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8">
          {/* Title as code comment */}
          <div className="font-mono text-xs text-muted-foreground/60 mb-2">
            {"/**"}
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
            {project.title}
          </h3>
          <div className="font-mono text-sm text-primary mb-2">
            * {project.subtitle}
          </div>
          <div className="font-mono text-xs text-muted-foreground/60 mb-4">
            {"*/"}
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack as imports */}
          <div className="font-mono text-xs sm:text-sm mb-6 space-y-1">
            <div className="text-muted-foreground/60">{"// Tech Stack"}</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.2 + (i * 0.05), duration: 0.3 }
                  } : {}}
                  className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${project.gradient} text-background font-medium text-xs`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Features as code block */}
          <div className="bg-[hsl(222,47%,6%)] rounded-xl p-4 font-mono text-xs sm:text-sm mb-6 border border-white/5">
            <div className="text-neon-green mb-2">{"const features = ["}</div>
            {project.features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.3 + (i * 0.05), duration: 0.3 }
                } : {}}
                className="text-muted-foreground pl-4"
              >
                <span className="text-cyber-cyan">"</span>
                {feature}
                <span className="text-cyber-cyan">"</span>
                {i < project.features.length - 1 && ","}
              </motion.div>
            ))}
            <div className="text-neon-green">{"];"}</div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary/40 hover:bg-primary/20 hover:text-primary flex items-center gap-2 font-mono"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  <span>git clone</span>
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary/40 hover:bg-primary/20 hover:text-primary flex items-center gap-2 font-mono"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span>npm run demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`} />
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div ref={headerRef}>
          <CodeHeader
            fileName="Projects.tsx"
            title="Featured Projects"
            highlightedWord="Projects"
            subtitle="git log --oneline | head -5"
            isInView={headerInView}
          />
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
