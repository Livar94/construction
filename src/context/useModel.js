import React, { createContext, useContext, useState } from 'react';

const modelContext = createContext();

export const useModel = () => {
  return useContext(modelContext)
}

export function ProvideModel({ children }) {
  const modelData = useProvideModel();

  return (
    <modelContext.Provider value={modelData}>
      {children}
    </modelContext.Provider>
  );
}

const useProvideModel = () => {
  const [isOpen, setIsOpen] = useState(false);
const [modelData, setModelData] = useState(null)

  return {
    isOpen,
    setIsOpen,
    modelData,
    setModelData
  }
}