import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [contextLang, setContextLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ contextLang, setContextLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
