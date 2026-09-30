import { useTheme } from "./theme-provider";
import { ThemeSwitcher } from "./ui/apple-liquid-glass-switcher";

export function TopRightThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <aside
      className="hidden md:block fixed top-6 right-8 z-50 print:hidden"
      aria-label="Theme selector"
    >
      <ThemeSwitcher value={theme} onValueChange={setTheme} />
    </aside>
  );
}
