import { useTheme } from "./theme-provider";
import { ThemeSwitcher } from "./ui/apple-liquid-glass-switcher";

export function TopRightThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <aside
      className="fixed top-[calc(0.75rem+env(safe-area-inset-top,0px))] right-[calc(0.75rem+env(safe-area-inset-right,0px))] z-40 scale-[0.74] origin-top-right transition-transform sm:scale-[0.86] md:scale-100 sm:top-5 sm:right-6 md:top-6 md:right-8 print:hidden"
      aria-label="Theme selector"
    >
      <ThemeSwitcher value={theme} onValueChange={setTheme} />
    </aside>
  );
}
