import { useTheme } from "./theme-provider";
import { ThemeSwitcher } from "./ui/apple-liquid-glass-switcher";

export function TopRightThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <aside
      className="fixed top-3 right-3 z-40 scale-[0.78] origin-top-right transition-transform sm:scale-[0.88] md:scale-100 sm:top-5 sm:right-6 md:top-6 md:right-8 print:hidden"
      aria-label="Theme selector"
    >
      <ThemeSwitcher value={theme} onValueChange={setTheme} />
    </aside>
  );
}
