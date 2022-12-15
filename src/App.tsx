import React, { useContext, useEffect, useState } from "react";
import Home from "components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "components/Category/Categories";
import Dashboard from "components/Home/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthenticationContext, {
  IAuth,
  IClaim,
} from "Contexts/AuthenticationContext";
import Login from "components/Account/Login";
import { getClaims } from "components/Account/useSecurity";

function App() {
  const initialClaims: IClaim[] = [
    // {
    //   property: "UserName",
    //   value: "Renaldo Davis",
    // },
  ];
  const nClaims = getClaims();
  console.log(nClaims)
  const [claims, setClaims] = useState<IClaim[]>(nClaims);

  const value: IAuth = {
    claims,
    updateClaims: setClaims,
    isAuthenticated: claims.length > 0,
  };
  useEffect(() => {
    console.log(claims);
  }, [claims]);

  return (
    <>
      <AuthenticationContext.Provider value={value}>
        <ToastContainer theme="colored" position="bottom-right" />
        <Home />
      </AuthenticationContext.Provider>
    </>
  );
}

export default App;
