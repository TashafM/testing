import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [openDrawer, setOpenDrawer] = useState({
    open: false,
    type: "",
    data: {},
    callBack: () => {},
  });
  const [showNav, setShowNav] = useState(false);
  return (
    <Context.Provider
      value={{ openDrawer, setOpenDrawer, showNav, setShowNav }}
    >
      {children}
    </Context.Provider>
  );
}

const useContextProvider = () => {
  const context = useContext(Context);

  return context;
};

export { ContextProvider, useContextProvider };
