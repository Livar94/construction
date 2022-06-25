import React, { createContext, useContext, useState } from 'react';

const sidebarContext = createContext();

export const useSidebar = () => {
  return useContext(sidebarContext)
}

export function ProvideSidebar({ children }) {
  const sidebarData = useProvideSidebar();

  return (
    <sidebarContext.Provider value={sidebarData}>
      {children}
    </sidebarContext.Provider>
  );
}

const useProvideSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    setIsOpen
  }
}