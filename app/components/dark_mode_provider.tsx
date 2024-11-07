import { ReactNode, useEffect, useState } from "react";
import useDarkMode from "~/contexts/states/dark_mode";

export default function DarkModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { isDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return children;

  return (
    <div className={mounted ? (isDarkMode ? "dark" : "light") : undefined}>
      <div className="provider">{children}</div>
    </div>
  );
}
