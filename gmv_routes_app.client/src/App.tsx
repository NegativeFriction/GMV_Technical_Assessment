import {
  SelectedRouteContext,
  SelectedRouteContextType,
} from "./SelectedRouteContext";
import { useState } from "react";
import HomePage from "./Pages/Home_Page/HomePage";
import ArrivalsPage from "./Pages/Arrivals_Page/ArrivalsPage";
import Header from "./Common/Header/Header";
import { AppContainer } from "./App.styles";

function App() {
  const [selectedRouteContextValue, setSelectedRouteContextValue] =
    useState<SelectedRouteContextType>(null);
  return (
    <>
      <AppContainer>
        <SelectedRouteContext.Provider value={selectedRouteContextValue}>
          <Header setSelectedRouteContextValue={setSelectedRouteContextValue} />
          {!selectedRouteContextValue && (
            <HomePage
              setSelectedRouteContextValue={setSelectedRouteContextValue}
            />
          )}
          {selectedRouteContextValue && (
            <ArrivalsPage {...selectedRouteContextValue} />
          )}
        </SelectedRouteContext.Provider>
      </AppContainer>
    </>
  );
}

export default App;
