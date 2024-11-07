import { useContext, useEffect, useState } from "react";
import { appContext } from "..";

export function darkModeState() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const setup = () => {
      setIsActive(
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    };
    setup();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setup);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setup);
    };
  }, []);

  return { isDarkMode: isActive, setDarkMode: setIsActive };
}

export default function useDarkMode() {
  const { darkMode } = useContext<{
    darkMode: ReturnType<typeof darkModeState>;
  }>(appContext as any);

  return darkMode;
}
