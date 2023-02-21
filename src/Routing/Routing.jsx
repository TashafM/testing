import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Information from "../pages/About/Information/Information";
import Privacy from "../pages/About/Privacy/Privacy";
import Terms from "../pages/About/Terms/Terms";
import Complaints from "../pages/About/Complaints/Complaints";
import FAQ from "../pages/About/FAQ/FAQ";
import Opennings from "../pages/About/Opennings/Opennings";
import Brand from "../pages/About/Brand/Brand";

import AwardsHonours from "../pages/Home/AwardsHonours/AwardsHonours";

import Home from "../pages/Home/Home";
import Orders from "../pages/Home/Orders/Orders";
import Partners from "../pages/Home/Partners/Partners";
import ProductListings from "../pages/Home/ProductListings/ProductListings";
import TeamMembers from "../pages/Home/TeamMembers/TeamMembers";
import Login from "../pages/Login/Login";
import Applications from "../pages/About/Jobs/Component/Applications";
import JobDescriptions from "../pages/About/Jobs/Component/JobDescriptions";
import CreateJobs from "../pages/About/Jobs/CreateJobs";
// import About from "../pages/About/";
// import Contact from "./Contact";

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home/" element={<Home />}>
        <Route path="team-members" element={<TeamMembers />} />
        <Route path="dashboard" element={<div>dashboard</div>} />
        <Route path="partners" element={<Partners />} />
        <Route path="orders" element={<Orders />} />
        <Route path="product-listings" element={<ProductListings />} />
        <Route path="awards-honours" element={<AwardsHonours />} />
        <Route path="about" element={<About />}>
          <Route path="info" element={<Information />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="complaints-and-feedback" element={<Complaints />} />
          <Route path="job-openings" element={<Opennings />} />
          <Route path="our-brands" element={<Brand />} />
          <Route path="terms-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
        </Route>
        <Route path="about/create-jobs" element={<CreateJobs />}>
          <Route path="applications" element={<Applications />} />
          <Route path="descriptions" element={<JobDescriptions />} />
        </Route>
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
