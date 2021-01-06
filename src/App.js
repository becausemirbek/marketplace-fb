import React, { useEffect } from "react";
import "./App.css";
import Routes from "./routes/Routes";

import "bootstrap/dist/css/bootstrap.min.css";
import { getLoggedInUser } from "./helpers/authUtils";
import { FavoritesContextProvider } from "./contexts/favoritesContext";

function App() {
  useEffect(() => {
    console.log(getLoggedInUser());
  }, []);
  return (
    <div id="app">
      <FavoritesContextProvider>
        <Routes />
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
