import React, { createContext, useContext, useState, useEffect } from 'react';

type DevModeContextType = {
  isDevMode: boolean;
  toggleDevMode: () => void;
};

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

export function DevModeProvider({ children }: { children: React.ReactNode }) {
  const [isDevMode, setIsDevMode] = useState(false);
  
  useEffect(() => {
    if (isDevMode) {
      document.documentElement.classList.add('dev-mode');
    } else {
      document.documentElement.classList.remove('dev-mode');
    }
  }, [isDevMode]);

  const toggleDevMode = () => setIsDevMode(prev => !prev);

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
