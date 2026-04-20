import React, { createContext, useContext, useState, useEffect } from 'react';

type DevModeContextType = {
  isDevMode: boolean;
  toggleDevMode: () => void;
};

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

export function DevModeProvider({ children }: { children: React.ReactNode }) {
  const isDevMode = false;
  const toggleDevMode = () => {};

  return (
    <DevModeContext.Provider value={{ isDevMode, toggleDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  const context = useContext(DevModeContext);
  if (context === undefined) {
    throw new Error('useDevMode must be used within a DevModeProvider');
  }
  return context;
}
