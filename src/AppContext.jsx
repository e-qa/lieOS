import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AppContextProvider({ children }) {
  const [activeApps, setActiveApps] = useState([]);

  const openApp = (appName) => {
    if (activeApps[activeApps.length - 1] === appName) {
      return;
    }

    setActiveApps((prev) => {
      const current = prev.filter((item) => item !== appName);
      return [...current, appName];
    });
  };

  const contextValue = {
    activeApps,
    setActiveApps,
    openApp,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
}
