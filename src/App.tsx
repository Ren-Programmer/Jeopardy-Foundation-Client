import React from "react";
import Home from "components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "components/Category/Categories";
import Dashboard from "components/Home/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="bottom-right"/>
      <Home />
    </>
  );
}

export default App;
