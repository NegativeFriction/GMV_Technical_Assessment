import React, { createContext, useContext, useState } from "react";

export type SelectedRouteContextType = {
  selectedRoute?: string;
  setSelectedRoute?: (arg?: string) => void;
};

export type propsType = {
  children: React.ReactNode;
};

export const SelectedRouteContext = createContext<SelectedRouteContextType>({});

export const useSelectedRouteContext = () => useContext(SelectedRouteContext);

const SelectedRouteContextProvider: React.FC<propsType> = ({ children }) => {
  const [selectedRoute, setSelectedRoute] = useState<string>();

  return (
    <SelectedRouteContext.Provider value={{ selectedRoute, setSelectedRoute }}>
      {children}
    </SelectedRouteContext.Provider>
  );
};

export default SelectedRouteContextProvider;
