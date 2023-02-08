/* eslint-disable*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Routing from "./Routing/Routing";

function App() {
  return (
    <div>
      <Routing/>
    </div>
  );
}

export default App;
