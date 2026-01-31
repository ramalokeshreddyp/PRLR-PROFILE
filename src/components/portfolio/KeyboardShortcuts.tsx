import { motion, AnimatePresence } from "framer-motion";
import { X, Keyboard } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * KeyboardShortcuts Component
 * Displays available keyboard shortcuts in a modal
 */
const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: "H", description: "Navigate to Home" },
    { key: "S", description: "Navigate to Skills" },
    { key: "P", description: "Navigate to Projects" },
    { key: "C", description: "Navigate to Contact" },
    { key: "Esc", description: "Scroll to Top" },
    { key: "?", description: "Toggle this help menu" },
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle with ? key
      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        // Check if not in input
        if (
          !(e.target instanceof HTMLInputElement) &&
          !(e.target instanceof HTMLTextAreaElement)
        ) {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      }
      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-primary/20 hover:bg-primary/10 transition-all duration-300 group"
        aria-label="View keyboard shortcuts"
      >
        <Keyboard className="w-4 h-4 text-primary group-hover:animate-pulse" />
        <span className="text-xs font-mono text-foreground/70 dark:text-muted-foreground group-hover:text-foreground">
          Press <kbd className="px-1.5 py-0.5 rounded bg-primary/20 text-primary">?</kbd>
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[90]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-full max-w-md"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[hsl(222,47%,8%)] shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-[hsl(222,47%,11%)] border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-2">
                      <Keyboard className="w-full h-full text-background" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground">Keyboard Shortcuts</h2>
                      <p className="text-xs font-mono text-muted-foreground">Quick navigation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>

                {/* Shortcuts List */}
                <div className="p-6">
                  <div className="space-y-3">
                    {shortcuts.map((shortcut, index) => (
                      <motion.div
                        key={shortcut.key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors group"
                      >
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          {shortcut.description}
                        </span>
                        <kbd className="px-3 py-1.5 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 font-mono text-sm font-semibold text-primary min-w-[50px] text-center">
                          {shortcut.key}
                        </kbd>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer tip */}
                  <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-xs font-mono text-muted-foreground">
                      <span className="text-primary">💡 Tip:</span> Press{" "}
                      <kbd className="px-1.5 py-0.5 rounded bg-primary/20 text-primary">?</kbd>{" "}
                      anytime to toggle this menu
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <div className="px-6 pb-6">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    Got it!
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
