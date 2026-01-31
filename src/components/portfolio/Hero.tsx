import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useState } from "react";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Internships", id: "internships" },
    { label: "Achievements", id: "achievements" },
    { label: "Certifications", id: "certifications" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* Desktop Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block fixed top-6 right-6 z-50 max-w-4xl"
      >
        <div className="glass-card rounded-2xl px-5 py-3 border border-primary/20 backdrop-blur-xl bg-background/70">
          <div className="flex items-center justify-end gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 rounded-xl glass-card border border-primary/20 backdrop-blur-xl bg-background/70 hover:bg-primary/10 transition-all duration-300"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] glass-card border-l border-primary/20 backdrop-blur-xl bg-background/95 z-50 overflow-y-auto"
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-6 py-4 rounded-xl text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 relative group"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-40 h-40 sm:w-72 sm:h-72 bg-cyber-cyan/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-cyber-purple/20 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-cyber-pink/10 rounded-full blur-3xl floating" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Code-style Greeting */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6 sm:mb-8"
              >
                <span className="font-mono text-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                  <span className="text-muted-foreground">{">"}</span> console.log(<span className="text-neon-green">"Hello, World!"</span>)
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="gradient-text">Rama Lokesh Reddy</span>
              </motion.h1>

              {/* Tagline as code */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-mono text-base sm:text-lg md:text-xl text-muted-foreground mb-6 space-y-1"
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <span className="text-cyber-purple">const</span>
                  <span className="text-foreground">role</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-neon-green">"Core Developer"</span>
                  <span className="text-muted-foreground">;</span>
                </div>
                <div className="text-sm text-muted-foreground/70">
                  // Competitive Programmer | Software Developer | Future Data Scientist
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                I'm a passionate 3rd-year CSE student who loves solving problems, building software, and learning new technologies. 
                Strong in <span className="text-primary font-medium">C++, DSA, competitive programming</span>, and full-stack development.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-base sm:text-lg px-8 py-6 glow-cyan hover:scale-105"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-base sm:text-lg px-8 py-6 hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                {[
                  { icon: Github, href: "https://github.com/ramalokeshreddyp", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rama-lokesh-reddy/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:rlpreddy565@gmail.com", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 sm:p-4 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                <img
                  src={profilePhoto}
                  alt="Rama Lokesh Reddy"
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-4 border-primary/30 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
