import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderToggleContext } from "./contexts/ToggleContext";
import "./index.css";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderToggleContext>
      <App />
    </ProviderToggleContext>
  </React.StrictMode>
);
