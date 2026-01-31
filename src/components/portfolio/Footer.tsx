import { Github, Linkedin, Mail, ExternalLink, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const codingPlatforms = [
    { name: "LeetCode", url: "https://leetcode.com/u/rlpreddy565/" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/rlpredxj9j" },
    { name: "CodeForces", url: "https://codeforces.com/profile/personasd6i2" },
    { name: "CodeChef", url: "https://www.codechef.com/users/silent_loomer" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/rlpreddy565" },
    { name: "CodeStudio", url: "https://www.naukri.com/code360/profile/silentloomer" },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/ramalokeshreddyp", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/rama-lokesh-reddy/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:rlpreddy565@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 sm:py-16 border-t border-border/60 dark:border-white/10 overflow-hidden bg-background dark:bg-[hsl(222,47%,6%)]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* About - Terminal style */}
          <div>
            <div className="font-mono text-xs text-foreground/60 dark:text-muted-foreground/60 mb-2">{"// about"}</div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3">Lokesh Reddy</h3>
            <p className="text-foreground/70 dark:text-muted-foreground text-sm sm:text-base leading-relaxed">
              <span className="text-cyber-purple">{"<"}</span>
              Core Developer
              <span className="text-cyber-purple">{" />"}</span> passionate about 
              problem-solving & building impactful solutions.
            </p>
          </div>

          {/* Coding Platforms */}
          <div>
            <div className="font-mono text-xs text-foreground/60 dark:text-muted-foreground/60 mb-2">{"// coding_profiles"}</div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 text-foreground">Competitive Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {codingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-mono bg-muted/30 dark:bg-muted/30 hover:bg-primary/20 border border-border/60 dark:border-white/10 rounded-md transition-all duration-300 flex items-center gap-1.5 group hover:scale-105 hover:border-primary/30"
                >
                  {platform.name}
                  <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="font-mono text-xs text-foreground/60 dark:text-muted-foreground/60 mb-2">{"// connect"}</div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 text-foreground">Social Links</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith('http') ? "_blank" : undefined}
                  rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl border border-border/60 dark:border-white/10 bg-background/80 dark:bg-[hsl(222,47%,8%)] hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Code style */}
        <div className="pt-6 border-t border-border/60 dark:border-white/10 text-center">
          <p className="font-mono text-xs sm:text-sm text-foreground/70 dark:text-muted-foreground mb-2">
            <span className="text-foreground/60 dark:text-muted-foreground/60">{"/* "}</span>
            © {new Date().getFullYear()} Rama Lokesh Reddy Penumallu
            <span className="text-foreground/60 dark:text-muted-foreground/60">{" */"}</span>
          </p>
          <p className="font-mono text-xs text-foreground/60 dark:text-muted-foreground/60 flex items-center justify-center gap-1.5 flex-wrap">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-cyber-pink inline" />
            <span>+</span>
            <Code2 className="w-3 h-3 text-primary inline" />
            <span>using React, TypeScript, Tailwind & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
