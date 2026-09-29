import { createContext, useContext, useEffect, useState } from "react";

export type ThemeValue = "dark" | "light";
export interface ThemeContextValue {
  theme: ThemeValue;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const key = "portfolio-theme";

function initialTheme(): ThemeValue {
  const saved = localStorage.getItem(key);

  if (saved === "dark" || saved == "light") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeValue>(initialTheme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(key, theme);
  }, [theme]);
  return (
    <ThemeContext
      value={{
        theme,
        toggleTheme: () =>
          setTheme((value) => (value === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </ThemeContext>
  );
}

export const useTheme = ():ThemeContextValue => {
  const context = useContext(ThemeContext);

  if(!context){
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
