import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import CodeHeader from "./CodeHeader";

const certifications = [
  // Professional & Platform Certifications
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    category: "Deep Learning",
    color: "from-neon-green to-cyber-cyan",
    url: "https://drive.google.com/file/d/1K3lUzpye7nhF5xOOuaBeM65Sn7z_JTHw/view",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    category: "Cloud & AI",
    color: "from-cyber-cyan to-cyber-blue",
    url: "https://drive.google.com/file/d/1YG5R8SMgPZzB8yqyv5pqvw8wsgeYVtfc/view?usp=sharing",
  },
  {
    title: "Amazon ML Summer School 2025",
    issuer: "Amazon",
    category: "Machine Learning",
    color: "from-cyber-blue to-cyber-purple",
    url: "https://drive.google.com/file/d/1FVOMFRI-rPYhVpUfKfUUlGTgQf_iMwP1/view?usp=sharing",
  },
  {
    title: "Career Edge: Young Professional",
    issuer: "TCS iON",
    category: "Professional Development",
    color: "from-cyber-purple to-cyber-pink",
    url: "https://drive.google.com/file/d/1Eb_DZbkKdUimVvaPLfoItbFY7kebyU1R/view?usp=sharing",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "Data Analytics",
    color: "from-cyber-pink to-secondary",
    url: "https://www.credly.com/badges/391765fc-b508-4438-b169-76b9bcfba83d",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    category: "Programming",
    color: "from-secondary to-neon-green",
    url: "https://www.credly.com/badges/287bd8cc-e32f-40dd-9b4a-0999b68ac12a",
  },
  {
    title: "Software Design & Development: OOAD",
    issuer: "Infosys Springboard",
    category: "Software Engineering",
    color: "from-neon-green to-cyber-cyan",
    url: "https://drive.google.com/file/d/1MvZGHz8YL4J-MGOe2zL_di7fx7VjRBQC/view?usp=sharing",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Forage",
    category: "AI & Analytics",
    color: "from-cyber-cyan to-cyber-purple",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_NhsYnumZoJ28yGf3v_1750553897830_completion_certificate.pdf",
  },
  
  
  // HackerRank Role Certifications
  {
    title: "Software Engineer Intern (Verified Role)",
    issuer: "HackerRank",
    category: "Role Certification",
    color: "from-cyber-purple to-cyber-pink",
    url: "https://www.hackerrank.com/certificates/42ec61ed5de9",
  },
  {
    title: "Software Engineer (Verified Role)",
    issuer: "HackerRank",
    category: "Role Certification",
    color: "from-secondary to-cyber-cyan",
    url: "https://www.hackerrank.com/certificates/402ece477573",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    category: "Role Certification",
    color: "from-neon-green to-cyber-blue",
    url: "https://www.hackerrank.com/certificates/906bb8059ad7",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <CodeHeader
            fileName="Certifications.tsx"
            title="Certifications & Training"
            highlightedWord="Certifications"
            subtitle="npm list --global --depth=0 | grep 'certified'"
            isInView={isInView}
          />

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.a
                key={`${cert.title}-${cert.issuer}`}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className="block group"
              >
                {/* Terminal-style card */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] transition-all duration-300 hover:scale-[1.02] h-full">
                  {/* Card header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[hsl(222,47%,11%)] border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-neon-green" />
                      <span className="font-mono text-[10px] text-neon-green">verified</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Card content */}
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cert.color} p-2 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Award className="w-full h-full text-background" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs text-primary">{cert.issuer}</span>
                          <span className="px-2 py-0.5 text-[10px] bg-muted/50 border border-border rounded-md text-muted-foreground">
                            {cert.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
