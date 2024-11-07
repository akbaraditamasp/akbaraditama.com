import { ReactNode, createContext } from "react";
import { darkModeState } from "./states/dark_mode";

export const appContext = createContext({});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const darkMode = darkModeState();
  return (
    <appContext.Provider value={{ darkMode }}>{children}</appContext.Provider>
  );
}
