import { useEffect } from "react";

/**
 * Keyboard Navigation Hook
 * Provides keyboard shortcuts for better accessibility
 */
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Skip if user is typing in an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Keyboard shortcuts
      switch (e.key.toLowerCase()) {
        case 'h':
          // Navigate to Hero/Home
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 's':
          // Navigate to Skills
          if (!e.ctrlKey && !e.metaKey) {
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'p':
          // Navigate to Projects
          if (!e.ctrlKey && !e.metaKey) {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'c':
          // Navigate to Contact
          if (!e.ctrlKey && !e.metaKey) {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'escape':
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
};

/**
 * Focus Trap Hook
 * Traps focus within a modal or dialog for accessibility
 */
export const useFocusTrap = (isActive: boolean, containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive, containerRef]);
};

/**
 * Accessible Announcer Hook
 * Announces dynamic content changes for screen readers
 */
export const useScreenReaderAnnouncement = () => {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return announce;
};
