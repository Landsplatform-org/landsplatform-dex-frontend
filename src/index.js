import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './i18next';
import "./index.css";

import { UserProvider } from "./context/UserContext";
import { TokenProvider } from "./context/TokenContext";
import { TransactionProvider } from "./context/TransactionContext";

function Main() {
  return (
    <React.StrictMode>
      <UserProvider>
      <TokenProvider>
      <TransactionProvider>   
        <App />
      </TransactionProvider>  
      </TokenProvider>
      </UserProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
