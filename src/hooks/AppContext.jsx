// src/utils/AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dnaData, setDnaData] = useState(null);
  
  return (
    <AppContext.Provider value={{ dnaData, setDnaData }}>
      {children}
    </AppContext.Provider>
  );
};