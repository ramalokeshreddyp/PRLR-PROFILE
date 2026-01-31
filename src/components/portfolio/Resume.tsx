import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ExternalLink, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CodeHeader from "./CodeHeader";

const Resume = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 sm:py-24 px-4 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <CodeHeader
            fileName="Resume.tsx"
            title="Resume"
            highlightedWord="Resume"
            subtitle="cat ./resume.pdf | less"
            isInView={isInView}
          />

          {/* Terminal-style Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative group"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[hsl(222,47%,11%)] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">resume.pdf — Preview</span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-10 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5"
                >
                  <div className="w-full h-full rounded-2xl bg-[hsl(222,47%,8%)] flex items-center justify-center">
                    <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Professional Resume
                </h3>
                
                {/* Code-style description */}
                <div className="font-mono text-xs sm:text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  <span className="text-cyber-purple">export</span>
                  <span className="text-foreground"> resume </span>
                  <span className="text-muted-foreground">= </span>
                  <span className="text-neon-green">"Education + Skills + Projects + Experience"</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => navigate("/resume")}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-mono text-sm sm:text-base px-6 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    view ./resume
                  </Button>
                  
                  <Button
                    onClick={() => window.open("https://drive.google.com/file/d/13zT9j8vMIPRMEr62YxlIgnvPn09iklXc/view?usp=sharing", "_blank")}
                    size="lg"
                    variant="outline"
                    className="border-primary/40 hover:bg-primary/10 font-mono text-sm sm:text-base px-6 hover:scale-[1.02] transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    open in drive
                  </Button>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
