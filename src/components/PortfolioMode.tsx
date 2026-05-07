"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PortfolioMode = "engineer" | "execution";

interface PortfolioModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  isEngineer: boolean;
  isExecution: boolean;
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(
  undefined
);

export function PortfolioModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>("engineer");

  return (
    <PortfolioModeContext.Provider
      value={{
        mode,
        setMode,
        isEngineer: mode === "engineer",
        isExecution: mode === "execution",
      }}
    >
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (!context) {
    throw new Error(
      "usePortfolioMode must be used within a PortfolioModeProvider"
    );
  }
  return context;
}
