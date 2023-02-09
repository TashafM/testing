import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AwardsHonours from "../pages/Home/AwardsHonours/AwardsHonours";

import Home from "../pages/Home/Home";
import Orders from "../pages/Home/Orders/Orders";
import Partners from "../pages/Home/Partners/Partners";
import ProductListings from "../pages/Home/ProductListings/ProductListings";
import TeamMembers from "../pages/Home/TeamMembers/TeamMembers";
import Login from "../pages/Login/Login";
// import About from "../pages/About/";
// import Contact from "./Contact";

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home/" element={<Home />}>
        <Route path="team-members" element={<TeamMembers/>}/>
        <Route path="dashboard" element={<div>dashboard</div>}/>
        <Route path="partners" element={<Partners/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="product-listings" element={<ProductListings/>}/>
        <Route path="awards-honours" element={<AwardsHonours/>}/>
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
