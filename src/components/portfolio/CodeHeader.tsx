import { motion } from "framer-motion";

interface CodeHeaderProps {
  fileName: string;
  title: string;
  highlightedWord: string;
  subtitle?: string;
  isInView: boolean;
}

const CodeHeader = ({ fileName, title, highlightedWord, subtitle, isInView }: CodeHeaderProps) => {
  // Split title to find and highlight the specific word
  const parts = title.split(highlightedWord);
  
  return (
    <div className="text-center mb-12 sm:mb-16">
      {/* File name comment */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-2"
      >
        <span className="font-mono text-muted-foreground/60 text-xs sm:text-sm">
          {`/* ${fileName} */`}
        </span>
      </motion.div>

      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold"
      >
        {parts[0]}
        <span className="gradient-text">{highlightedWord}</span>
        {parts[1]}
      </motion.h2>

      {/* Subtitle comment */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-mono text-xs sm:text-sm text-muted-foreground mt-4"
        >
          {`// ${subtitle}`}
        </motion.p>
      )}
    </div>
  );
};

export default CodeHeader;
