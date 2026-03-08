import { useEffect } from "react";
import { ThemeProviderContext, type Theme } from "@/providers/theme-context";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const theme: Theme = "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("dark");
  }, []);

  const value = {
    theme,
    setTheme: () => {},
    toggleTheme: () => {},
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
