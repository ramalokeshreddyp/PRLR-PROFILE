import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import CodeHeader from "./CodeHeader";

const skillsData = {
  programming: {
    name: "Programming & DSA",
    color: "cyber-cyan",
    items: ["C++", "Java", "Python", "C", "SQL", "Data Structures", "Algorithms", "OOP"],
  },
  web: {
    name: "Web Development",
    color: "cyber-purple",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs"],
  },
  databases: {
    name: "Databases",
    color: "neon-green",
    items: ["MySQL", "SQLite", "MongoDB"],
  },
  analytics: {
    name: "Data Analytics",
    color: "cyber-pink",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Power BI", "EDA"],
  },
  tools: {
    name: "Tools",
    color: "cyber-blue",
    items: ["Git", "GitHub", "VS Code"],
  },
};

const SkillsCode = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const generateCodeBlock = () => {
    const lines: { content: string; indent: number; type: string }[] = [];
    
    lines.push({ content: "const developer = {", indent: 0, type: "keyword" });
    lines.push({ content: 'name: "Rama Lokesh Reddy",', indent: 1, type: "property" });
    lines.push({ content: 'title: "Core Developer",', indent: 1, type: "property" });
    lines.push({ content: "", indent: 0, type: "empty" });
    lines.push({ content: "skills: {", indent: 1, type: "keyword" });
    
    Object.entries(skillsData).forEach(([key, category], catIndex) => {
      const isLast = catIndex === Object.entries(skillsData).length - 1;
      lines.push({ 
        content: `${key}: [`, 
        indent: 2, 
        type: `category-${key}` 
      });
      
      category.items.forEach((skill, idx) => {
        const isLastItem = idx === category.items.length - 1;
        lines.push({
          content: `"${skill}"${isLastItem ? "" : ","}`,
          indent: 3,
          type: `skill-${key}`,
        });
      });
      
      lines.push({ content: `]${isLast ? "" : ","}`, indent: 2, type: `category-${key}` });
    });
    
    lines.push({ content: "},", indent: 1, type: "keyword" });
    lines.push({ content: "", indent: 0, type: "empty" });
    lines.push({ content: "// TODO: Keep learning and building!", indent: 1, type: "comment" });
    lines.push({ content: 'status: "Always coding 💻",', indent: 1, type: "property" });
    lines.push({ content: "};", indent: 0, type: "keyword" });
    
    return lines;
  };

  const codeLines = generateCodeBlock();

  const getLineColor = (type: string) => {
    if (type === "keyword") return "text-cyber-purple";
    if (type === "property") return "text-foreground";
    if (type === "comment") return "text-muted-foreground/60 italic";
    if (type.startsWith("category-") || type.startsWith("skill-")) {
      const key = type.split("-")[1];
      const isActive = activeCategory === key || activeCategory === null;
      if (!isActive) return "text-muted-foreground/30";
      
      switch (key) {
        case "programming": return "text-cyber-cyan";
        case "web": return "text-cyber-purple";
        case "databases": return "text-neon-green";
        case "analytics": return "text-cyber-pink";
        case "tools": return "text-cyber-blue";
        default: return "text-foreground";
      }
    }
    return "text-foreground";
  };

  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <CodeHeader
            fileName="Skills.tsx"
            title="Technical Skills"
            highlightedWord="Skills"
            subtitle="const skills = loadFromBrain();"
            isInView={isInView}
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Code Editor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] shadow-2xl">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[hsl(222,47%,11%)] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                    <span className="text-neon-green">●</span>
                    skills.ts
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.3 + index * 0.02, duration: 0.3 }}
                      className="flex items-start"
                    >
                      <span className="text-muted-foreground/40 w-8 text-right mr-4 select-none shrink-0">
                        {index + 1}
                      </span>
                      <span 
                        className={`${getLineColor(line.type)} transition-colors duration-300`}
                        style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                      >
                        {line.content || " "}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>

            {/* Interactive Skill Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="font-mono text-xs text-muted-foreground mb-4">
                {"// Hover to highlight in code ↓"}
              </div>

              {Object.entries(skillsData).map(([key, category], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  onMouseEnter={() => setActiveCategory(key)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`glass-card p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] border-l-4 ${
                    activeCategory === key 
                      ? `border-${category.color} shadow-lg` 
                      : "border-transparent hover:border-primary/50"
                  }`}
                  style={{
                    borderLeftColor: activeCategory === key 
                      ? `hsl(var(--${category.color}))` 
                      : undefined
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      [{category.items.length}]
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.6 + index * 0.1 + skillIndex * 0.03, duration: 0.3 }}
                        className="px-2.5 py-1 text-xs bg-muted/50 hover:bg-primary/20 rounded-md transition-colors duration-200 font-mono"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Fun Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="glass-card p-4 rounded-xl mt-6"
              >
                <div className="font-mono text-xs text-neon-green mb-2">
                  {"$ git diff --stat skills.db"}
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  <span className="text-neon-green">+2,847 lines</span> of code written this year
                  <br />
                  <span className="text-cyber-pink">500+</span> problems solved on various platforms
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCode;
