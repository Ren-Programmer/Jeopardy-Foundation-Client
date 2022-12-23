import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  ChakraProvider,
  ColorModeScript,
  createStandaloneToast,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { Button } from "./styles/buttonStyles";
import AuthenticationContext, {
  IAuth,
  IClaim,
} from "Contexts/AuthenticationContext";
import setTheme from "theme";
import AppContext from "Contexts/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = extendTheme(
  withDefaultColorScheme({colorScheme:"telegram"}),
  {  
  components: {
    Button,
  },
});

const { ToastContainer, toast } = createStandaloneToast();

//value.isAuthorized = value.claims.length > 0;

root.render(
   <React.StrictMode>
  <BrowserRouter>
    <AppContext.Provider value={{ toast }}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light"></ColorModeScript>
        <App />
        <ToastContainer />
      </ChakraProvider>
    </AppContext.Provider>
  </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
