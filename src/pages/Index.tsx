import Hero from "@/components/portfolio/Hero";
import Terminal from "@/components/portfolio/Terminal";
import SkillsCode from "@/components/portfolio/SkillsCode";
import Projects from "@/components/portfolio/Projects";
import Internships from "@/components/portfolio/Internships";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import BackToTop from "@/components/portfolio/BackToTop";
import KeyboardShortcuts from "@/components/portfolio/KeyboardShortcuts";
import Chatbot from "@/components/portfolio/Chatbot";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useKeyboardNavigation } from "@/hooks/use-accessibility";

const Index = () => {
  // Enable keyboard navigation
  useKeyboardNavigation();

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative">
          <ThemeToggle />
        <ScrollProgress />
        <BackToTop />
        <KeyboardShortcuts />
        <Chatbot />
        <Hero />
        <Terminal />
        <SkillsCode />
        <Projects />
        <Internships />
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
