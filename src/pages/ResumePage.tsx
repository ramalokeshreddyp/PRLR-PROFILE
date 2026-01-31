import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const ResumePage = () => {
  const navigate = useNavigate();
  const resumeUrl = "https://drive.google.com/file/d/13zT9j8vMIPRMEr62YxlIgnvPn09iklXc/preview";
  const driveUrl = "https://drive.google.com/file/d/13zT9j8vMIPRMEr62YxlIgnvPn09iklXc/view?usp=sharing";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 container mx-auto px-4 py-4 sm:py-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="group hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>

          <div className="flex gap-2 sm:gap-3">
            <Button
              onClick={() => window.open(driveUrl, "_blank")}
              variant="outline"
              size="sm"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-xs sm:text-sm"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Open in Drive
            </Button>
            <Button
              onClick={() => window.open(driveUrl, "_blank")}
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-xs sm:text-sm"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Download
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Resume content */}
      <motion.main
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 container mx-auto px-4 py-4 sm:py-8"
      >
        <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden p-0.5 sm:p-1 bg-gradient-to-br from-primary/20 via-secondary/20 to-cyber-pink/20">
          <div className="bg-background rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="aspect-[8.5/11] w-full min-h-[60vh] sm:min-h-0">
              <iframe
                src={resumeUrl}
                className="w-full h-full"
                title="Resume"
                style={{ border: "none" }}
                allow="autoplay"
              />
            </div>
          </div>
        </div>

        {/* Fallback message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-6 sm:mt-8 text-muted-foreground text-sm sm:text-base"
        >
          <p>
            If the resume doesn't load above,{" "}
            <button
              onClick={() => window.open(driveUrl, "_blank")}
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              click here to view it in Google Drive
            </button>
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default ResumePage;
