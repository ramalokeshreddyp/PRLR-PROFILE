import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitCommit, GitMerge, Calendar } from "lucide-react";
import CodeHeader from "./CodeHeader";

const internships = [
  {
    role: "MERN Stack Developer – Trainee",
    company: "AIM Technologies",
    duration: "May 2025 – July 2025",
    description: [
      "Built responsive full-stack applications using MongoDB, Express.js, React.js, and Node.js",
      "Developed REST APIs and collaborated through Git/GitHub",
      "Worked on deployment and testing in a development environment",
    ],
    color: "from-cyber-cyan to-cyber-blue",
    commitHash: "a7f3d2e",
  },
  {
    role: "Data Analyst Intern",
    company: "Elevate Labs (Skill India & MSME)",
    duration: "September 2025 – November 2025",
    description: [
      "Performed data cleaning, preprocessing, and Exploratory Data Analysis",
      "Created dashboards and interactive visual reports using Power BI, Excel, and Python",
      "Summarized insights for real-world business datasets",
    ],
    color: "from-cyber-purple to-cyber-pink",
    commitHash: "b9e4c1d",
  },
  {
    role: "Class Representative",
    company: "Aditya University",
    duration: "August 2023 – Present",
    description: [
      "Facilitated effective communication between students and faculty, addressing academic queries",
      "Coordinated with department heads to resolve class-level issues promptly",
      "Organized group discussions and academic activities to enhance student engagement",
    ],
    color: "from-neon-green to-cyber-cyan",
    commitHash: "c5d8f3a",
  },
];

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <CodeHeader
            fileName="Experience.tsx"
            title="Internships"
            highlightedWord="Internships"
            subtitle="git log --oneline --author='lokesh'"
            isInView={isInView}
          />

          {/* Git-style Timeline */}
          <div className="max-w-4xl mx-auto">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Git timeline line */}
                {index < internships.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-[calc(100%+3rem)] bg-gradient-to-b from-primary to-secondary opacity-30" />
                )}

                <div className="flex gap-6">
                  {/* Git commit dot */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${internship.color} p-2.5 relative z-10`}>
                    <GitCommit className="w-full h-full text-background" />
                  </div>

                  {/* Content as git commit message */}
                  <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] group hover:shadow-[0_20px_60px_rgba(0,229,255,0.15)] transition-all duration-300">
                    {/* Commit header */}
                    <div className="px-6 py-3 bg-[hsl(222,47%,11%)] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <GitMerge className="w-3 h-3 text-neon-green" />
                          merged
                        </span>
                        <span className="text-primary">{internship.commitHash}</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {internship.duration}
                      </span>
                    </div>

                    {/* Commit message */}
                    <div className="p-6">
                      <h3 className={`text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r ${internship.color} bg-clip-text text-transparent`}>
                        {internship.role}
                      </h3>
                      <div className="font-mono text-sm text-primary mb-4">
                        @ {internship.company}
                      </div>

                      {/* Description as code comments */}
                      <div className="font-mono text-xs sm:text-sm space-y-1">
                        {internship.description.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                            className="text-muted-foreground"
                          >
                            <span className="text-muted-foreground/60">// </span>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
