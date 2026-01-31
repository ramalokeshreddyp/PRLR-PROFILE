import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "json" | "comment" | "error" | "success";
  content: string;
  delay?: number;
}

const terminalSequence: TerminalLine[] = [
  { type: "comment", content: "// Let's learn about this developer..." },
  { type: "command", content: "whoami" },
  { type: "output", content: "Rama Lokesh Reddy Penumallu" },
  { type: "command", content: "cat role.txt" },
  { type: "output", content: "3rd Year CSE Student | Core Developer | Problem Solver" },
  { type: "command", content: "cat skills.json" },
  { type: "json", content: JSON.stringify({
    role: "Core Developer",
    languages: ["C++", "Java", "Python", "JavaScript"],
    focus: ["DSA", "Algorithms", "System Design"],
    status: "Ready to build 🚀"
  }, null, 2) },
  { type: "command", content: "git log --oneline -3" },
  { type: "output", content: "a1b2c3d feat: added competitive programming skills\n8e9f0a1 fix: improved problem-solving speed by 200%\n2c3d4e5 init: started journey as a developer" },
  { type: "command", content: "./check_availability.sh" },
  { type: "success", content: "✓ Open to internships and collaborations!" },
  { type: "comment", content: "// Scroll down to explore more..." },
];

const Terminal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Progressive line reveal
  useEffect(() => {
    if (!isInView) return;

    const showNextLine = (lineIndex: number) => {
      if (lineIndex >= terminalSequence.length) return;

      const line = terminalSequence[lineIndex];
      const baseDelay = line.type === "command" ? 800 : line.type === "json" ? 600 : 400;
      
      setIsTyping(true);
      setTimeout(() => {
        setVisibleLines(lineIndex + 1);
        setIsTyping(false);
        showNextLine(lineIndex + 1);
      }, baseDelay);
    };

    const startTimer = setTimeout(() => {
      showNextLine(0);
    }, 500);

    return () => clearTimeout(startTimer);
  }, [isInView]);

  const renderLine = (line: TerminalLine, index: number) => {
    const baseClasses = "font-mono text-sm sm:text-base";
    
    switch (line.type) {
      case "command":
        return (
          <div className="flex items-start gap-2">
            <span className="text-neon-green shrink-0">→</span>
            <span className="text-muted-foreground shrink-0">~</span>
            <span className="text-foreground">{line.content}</span>
          </div>
        );
      case "output":
        return (
          <div className="pl-6 text-primary whitespace-pre-wrap">
            {line.content}
          </div>
        );
      case "json":
        return (
          <div className="pl-6 border-l-2 border-cyber-purple/50 ml-2">
            <pre className="text-xs sm:text-sm overflow-x-auto">
              {line.content.split('\n').map((jsonLine, i) => (
                <div key={i} className="whitespace-pre">
                  {jsonLine.split(/(".*?")/g).map((part, j) => {
                    if (part.startsWith('"') && part.endsWith('"')) {
                      if (part.includes(':')) {
                        return <span key={j} className="text-cyber-purple">{part}</span>;
                      }
                      return <span key={j} className="text-neon-green">{part}</span>;
                    }
                    if (part.includes('[') || part.includes(']') || part.includes('{') || part.includes('}')) {
                      return <span key={j} className="text-muted-foreground">{part}</span>;
                    }
                    return <span key={j} className="text-foreground">{part}</span>;
                  })}
                </div>
              ))}
            </pre>
          </div>
        );
      case "comment":
        return (
          <div className="text-muted-foreground/60 italic">
            {line.content}
          </div>
        );
      case "error":
        return (
          <div className="pl-6 text-destructive">
            ✗ {line.content}
          </div>
        );
      case "success":
        return (
          <div className="pl-6 text-neon-green font-semibold">
            {line.content}
          </div>
        );
      default:
        return <div className="text-foreground">{line.content}</div>;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title with Code Comment Style */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="font-mono text-muted-foreground/60 text-sm">{"/* About.tsx */"}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-mono text-xs sm:text-sm text-muted-foreground mt-4"
            >
              {"// Initialize developer instance..."}
            </motion.p>
          </div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative group"
          >
            {/* Terminal Container */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] shadow-2xl shadow-primary/10">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[hsl(222,47%,11%)] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  bash — 80x24
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 min-h-[350px] sm:min-h-[400px] font-mono text-sm">
                <AnimatePresence>
                  {terminalSequence.slice(0, visibleLines).map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 sm:mb-3"
                    >
                      {renderLine(line, index)}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Cursor */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-neon-green">→</span>
                  <span className="text-muted-foreground">~</span>
                  <span 
                    className={`w-2.5 h-5 bg-primary transition-opacity duration-100 ${
                      cursorVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>

          {/* Additional Info Cards Below Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              { label: "// Location", value: "India 🇮🇳", icon: "📍" },
              { label: "// Status", value: "Open to Work", icon: "💼" },
              { label: "// Coffee Count", value: "∞ cups", icon: "☕" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="font-mono text-xs text-muted-foreground/60 mb-1">{item.label}</div>
                <div className="text-foreground font-medium flex items-center justify-center gap-2">
                  <span>{item.icon}</span>
                  <span>{item.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
