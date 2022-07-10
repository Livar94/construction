
import React, { createContext, useContext, useState } from 'react';

const modelContext = createContext();

export const useAboutModel = () => {
  return useContext(modelContext)
}

export function ProvideAboutModel({ children }) {
  const modelData = useProvideModel();

  return (
    <modelContext.Provider value={modelData}>
      {children}
    </modelContext.Provider>
  );
}

const useProvideModel = () => {
  const [isOpen, setIsOpen] = useState(false);


  return {
    isOpen,
    setIsOpen
  }
}

