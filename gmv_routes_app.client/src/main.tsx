import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SelectedRouteContextProvider from "./Contexts/SelectedRouteContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectedRouteContextProvider>
      <App />
    </SelectedRouteContextProvider>
  </React.StrictMode>
);
