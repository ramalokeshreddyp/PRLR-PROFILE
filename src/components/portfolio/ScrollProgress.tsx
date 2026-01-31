import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress Component
 * Shows visual progress indicator as user scrolls through the page
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-cyber-pink origin-left z-[100]"
        style={{ scaleX }}
      />
      
    </>
  );
};

export default ScrollProgress;
