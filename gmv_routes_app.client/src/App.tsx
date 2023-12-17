import {
  SelectedRouteContext,
  SelectedRouteContextType,
} from "./SelectedRouteContext";
import { useState } from "react";
import HomePage from "./Pages/Home_Page/HomePage";
import ArrivalsPage from "./Pages/Arrivals_Page/ArrivalsPage";

function App() {
  const [selectedRouteContextValue, setSelectedRouteContextValue] =
    useState<SelectedRouteContextType>(null);
  return (
    <SelectedRouteContext.Provider value={selectedRouteContextValue}>
      {!selectedRouteContextValue && (
        <HomePage setSelectedRouteContextValue={setSelectedRouteContextValue} />
      )}
      {selectedRouteContextValue && (
        <ArrivalsPage {...selectedRouteContextValue} />
      )}
    </SelectedRouteContext.Provider>
  );
}

export default App;
