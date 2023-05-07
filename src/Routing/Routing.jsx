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
import Dashboard from "../pages/Home/Dashboard/Dashboard";
import DealerDashboard from "../pages/Dealers/SubPages/Dashboard/DealerDashboard";

import Home from "../pages/Home/Home";
import Orders from "../pages/Home/Orders/Orders";
import PartnerDetails from "../pages/Home/Partners/PartnerDetails/PartnerDetails";
import Partners from "../pages/Home/Partners/Partners";
import ProductListings from "../pages/Home/ProductListings/ProductListings";
import TeamMembers from "../pages/Home/TeamMembers/TeamMembers";
import Login from "../pages/Login/Login";
import Applications from "../pages/About/Jobs/Component/Applications";
import JobDescriptions from "../pages/About/Jobs/Component/JobDescriptions";
import CreateJobs from "../pages/About/Jobs/CreateJobs";
import PartnerAbout from "../pages/Home/Partners/PartnerDetails/PartnerAbout/PartnerAbout";
import PartnerAddress from "../pages/Home/Partners/PartnerDetails/PartnerAddress/PartnerAddress";
import PartnerPaymentDetails from "../pages/Home/Partners/PartnerDetails/PartnerPaymentDetails/PartnerPaymentDetails";
import PartnerCatalog from "../pages/Home/Partners/PartnerDetails/PartnerCatalog/PartnerCatalog";
import PastOrder from "../pages/Home/Partners/PartnerDetails/PastOrder/PastOrder";
import OrderDetails from "../pages/Home/Orders/components/OrderDetails/OrderDetails";
import CurrentMembers from "../pages/Home/TeamMembers/CurrentMembers/CurrentMembers";
import PastMembers from "../pages/Home/TeamMembers/PastMembers/PastMembers";
import CurrentPartners from "../pages/Home/Partners/CurrentPartners/CurrentPartners";
import PastPartners from "../pages/Home/Partners/PastPartners/PastPartners";
import Dummy from "../pages/Home/Dummy/Dummy";
import SelectPage from "../pages/Login/SelectPage/SelectPage";
import Dealers from "../pages/Dealers/Dealers";
import AllProducts from "../pages/Dealers/SubPages/AllProducts/AllProducts";
import DealerOrders from "../pages/Dealers/SubPages/Orders/DealerOrders";
import Favorites from "../pages/Dealers/SubPages/Favorites/Favorites";
import NewArrival from "../pages/Dealers/SubPages/NewArrival/NewArrival";
import Products from "../pages/Dealers/SubPages/AllProducts/Products/Products";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import DealerCurrentOrder from "../pages/Dealers/SubPages/Orders/DealerCurrentOrder";
import DealerPastOrder from "../pages/Dealers/SubPages/Orders/DealerPastOrder";
import DealerOrderDetails from "../pages/Dealers/SubPages/Orders/DealerOrderDetails";
import CompanyPastOrder from "../pages/Home/Orders/CompanyPastOrder";
import CompanyCurrentOrder from "../pages/Home/Orders/CompanyCurrentOrder";

// import About from "../pages/About/";
// import Contact from "./Contact";

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/select-account-type"
        element={<ProtectedRoutes Component={SelectPage} />}
      />
      <Route path="/home/" element={<ProtectedRoutes Component={Home} />}>
        <Route path="team-members" element={<TeamMembers />}>
          <Route path="current-members" element={<CurrentMembers />} />
          <Route path="past-members" element={<PastMembers />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dummy" element={<Dummy />} />
        <Route path="partners/detail/" element={<PartnerDetails />}>
          <Route path="about" element={<PartnerAbout />} />
          <Route path="address" element={<PartnerAddress />} />
          <Route path="payment-details" element={<PartnerPaymentDetails />} />
          <Route path="catalog" element={<PartnerCatalog />} />
          <Route path="past-orders" element={<PastOrder />} />
        </Route>
        <Route path="partners" element={<Partners />}>
          <Route path="current-partners" element={<CurrentPartners />} />
          <Route path="past-partners" element={<PastPartners />} />
        </Route>
        <Route path="orders" element={<Orders />}>
          <Route index element={<CompanyCurrentOrder />} />
          <Route path="past-order" element={<CompanyPastOrder />} />
        </Route>
        <Route path="order/details" element={<OrderDetails />} />
        <Route path="product-listings" element={<ProductListings />} />
        <Route path="awards-honours" element={<AwardsHonours />} />
        <Route path="about" element={<About />}>
          <Route index element={<Information />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="complaints-and-feedback" element={<Complaints />} />
          <Route path="job-openings" element={<Opennings />} />
          <Route path="our-brands" element={<Brand />} />
          <Route path="terms-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
        </Route>
        <Route path="about/create-jobs" element={<CreateJobs />}>
          <Route index element={<Applications />} />
          <Route path="descriptions" element={<JobDescriptions />} />
        </Route>
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="dealers" element={<ProtectedRoutes Component={Dealers} />}>
        <Route path="dashboard" element={<DealerDashboard />} />
        <Route path="all-products" element={<AllProducts />}>
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="orders" element={<DealerOrders />}>
          <Route index element={<DealerCurrentOrder />} />
          <Route path="past-order" element={<DealerPastOrder />} />
          <Route path="detail" element={<DealerOrderDetails />} />
        </Route>
        <Route path="favorites" element={<Favorites />} />
        <Route path="new-arrival" element={<NewArrival />} />
        {/* <Route path="all-products/products" element={<ProtectedRoutes Component={Products}/>} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routing;
