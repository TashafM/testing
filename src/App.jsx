/* eslint-disable*/
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import RightDrawer from "./components/drawer";
import { ContextProvider } from "./context";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Routing from "./Routing/Routing";

export const GlobalContext = createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  // const [alert, setAlert] = useState(false);

  return (
    <ContextProvider>
      <GlobalContext.Provider
        value={{
          loading,
          setLoading,
          msg,
          setMsg,
          // alert,
          // setAlert,
        }}
      >
        <ToastContainer position="top-center" />
        <RightDrawer />
        <Routing />
      </GlobalContext.Provider>
    </ContextProvider>
  );
}

export default App;
