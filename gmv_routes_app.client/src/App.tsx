import { useSelectedRouteContext } from "./Contexts/SelectedRouteContext";
import HomePage from "./Pages/Home_Page/HomePage";
import ArrivalsPage from "./Pages/Arrivals_Page/ArrivalsPage";
import Header from "./Common/Header/Header";
import { AppContainer } from "./App.styles";

function App() {
  const { selectedRoute } = useSelectedRouteContext();

  return (
    <>
      <AppContainer>
        <Header />
        {!selectedRoute && <HomePage />}
        {selectedRoute && <ArrivalsPage />}
      </AppContainer>
    </>
  );
}

export default App;
