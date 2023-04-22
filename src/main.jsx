import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./styles/styles.css";

import { App } from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-55-q-wc1.us.auth0.com"
      clientId="T94JBCehckJIqrKjQUJgxi0aU08AAXEy"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/* <ChakraProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </ChakraProvider> */}
    </Auth0Provider>
  </React.StrictMode>
);
