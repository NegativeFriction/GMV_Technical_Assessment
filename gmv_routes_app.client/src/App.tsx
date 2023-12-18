import {
  SelectedRouteContext,
  SelectedRouteContextType,
} from "./SelectedRouteContext";
import { useState } from "react";
import HomePage from "./Pages/Home_Page/HomePage";
import ArrivalsPage from "./Pages/Arrivals_Page/ArrivalsPage";
import Header from "./Common/Header/Header";
import "./App.css";

function App() {
  const [selectedRouteContextValue, setSelectedRouteContextValue] =
    useState<SelectedRouteContextType>(null);
  return (
    <SelectedRouteContext.Provider value={selectedRouteContextValue}>
      <Header setSelectedRouteContextValue={setSelectedRouteContextValue} />
      {!selectedRouteContextValue && (
        <HomePage setSelectedRouteContextValue={setSelectedRouteContextValue} />
      )}
      {selectedRouteContextValue && (
        <ArrivalsPage
          {...selectedRouteContextValue}
          setSelectedRouteContextValue={setSelectedRouteContextValue}
        />
      )}
    </SelectedRouteContext.Provider>
  );
}

export default App;
