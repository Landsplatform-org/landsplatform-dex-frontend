import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createClient,Provider,subscriptionExchange, defaultExchanges} from "urql";
import { createClient as createWSClient } from "graphql-ws";
import './i18next';

import { UserProvider } from "./context/UserContext";
import { TokenProvider } from "./context/TokenContext";

function Main() {
  return (
    <React.StrictMode>
      <UserProvider>
      <TokenProvider>
        <Provider value={client}>
          
          <App />
          
        </Provider>
      </TokenProvider>
      </UserProvider>
    </React.StrictMode>
  );
}

const wsClient = createWSClient({
  url: "ws://localhost:7000/graphql",
});

const client = createClient({
  url: "http://localhost:7000/graphql",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
