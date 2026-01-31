import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Code, Terminal } from "lucide-react";
import CodeHeader from "./CodeHeader";

const platforms = [
  {
    name: "LeetCode",
    rating: "1912",
    badge: "Knight",
    extra: "Top 4.68%",
    icon: Trophy,
    color: "from-cyber-pink to-secondary",
  },
  {
    name: "CodeStudio",
    rating: "1886",
    badge: "Specialist",
    icon: Code,
    color: "from-cyber-cyan to-cyber-blue",
  },
  {
    name: "GeeksforGeeks",
    rating: "1685",
    badge: "3★",
    extra: "500+ problems solved",
    icon: Terminal,
    color: "from-cyber-purple to-cyber-pink",
  },
  {
    name: "CodeChef",
    rating: "1617",
    badge: "3★",
    icon: Star,
    color: "from-neon-green to-cyber-cyan",
  },
  {
    name: "CodeForces",
    rating: "1020",
    badge: "Newbie",
    icon: Code,
    color: "from-cyber-blue to-cyber-purple",
  },
  {
    name: "HackerRank",
    rating: "5★",
    badge: "Problem Solving",
    extra: "5★ in C, C++, Java, Python, SQL",
    icon: Star,
    color: "from-secondary to-cyber-cyan",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <CodeHeader
            fileName="Achievements.tsx"
            title="Achievements & Ratings"
            highlightedWord="Achievements"
            subtitle="SELECT * FROM competitive_programming ORDER BY rating DESC;"
            isInView={isInView}
          />

          {/* Leaderboard-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative group"
              >
                {/* Terminal-style card */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] hover:shadow-[0_15px_40px_rgba(0,229,255,0.2)] transition-all duration-300 hover:scale-[1.02]">
                  {/* Card header with rank */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[hsl(222,47%,11%)] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">#{index + 1}</span>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color}`} />
                    </div>
                    <span className="font-mono text-xs text-neon-green">online</span>
                  </div>

                  {/* Card content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} p-2 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <platform.icon className="w-full h-full text-background" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-foreground text-base sm:text-lg truncate">{platform.name}</h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                            {platform.rating}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
                            {platform.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {platform.extra && (
                      <div className="font-mono text-xs text-muted-foreground bg-muted/30 rounded-lg px-3 py-2">
                        <span className="text-neon-green">→</span> {platform.extra}
                      </div>
                    )}
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

export default Achievements;
