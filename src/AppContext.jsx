import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [activeApps, setActiveApps] = useState([]);
  const [distance, setDistance] = useState(false);

  const openApp = (appName) => {
    if (activeApps[activeApps.length - 1] === appName) {
      return;
    }

    setActiveApps((prev) => {
      const current = prev.filter((item) => item !== appName);
      return [...current, appName];
    });
  };

  const closeApp = (appName) => {
    setActiveApps((prev) => {
      const current = prev.filter((item) => item !== appName);
      return [...current];
    });
  };

  const contextValue = {
    activeApps,
    setActiveApps,
    openApp,
    distance,
    setDistance,
    closeApp,
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

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
