/* eslint-disable*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import RightDrawer from './components/drawer'
import {ContextProvider} from './context'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Routing from "./Routing/Routing";

function App() {
  return (
      <ContextProvider>
          <RightDrawer />
          <Routing />
      </ContextProvider>
  )
}

export default App;
