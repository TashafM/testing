import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
// import About from "../pages/About/";
// import Contact from "./Contact";

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
