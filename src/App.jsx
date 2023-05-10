/* eslint-disable*/
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import RightDrawer from "./components/drawer";
import { ContextProvider, useContextProvider } from "./context";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Routing from "./Routing/Routing";
import { API } from "./helper/API";
import useFetchApi from "./pages/hooks/useFetchApi";

export const GlobalContext = createContext();
export const FixedTableHead = createContext();
export const DealersData = createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { openDrawer } = useContextProvider();

  return (
    <ContextProvider>
      <GlobalContext.Provider
        value={{
          loading,
          setLoading,
          msg,
          setMsg,
        }}
      >
        <FixedTableHead.Provider value={{ isOpen, setIsOpen }}>
          <ToastContainer position="top-center" />
          {(openDrawer.open || loading) && <RightDrawer />}
          <Routing />
        </FixedTableHead.Provider>
      </GlobalContext.Provider>
    </ContextProvider>
  );
}

export default App;
