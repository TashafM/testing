/* eslint-disable*/
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Home.scss";
import Login from "../Login/Login";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Menus from "../../components/Menus/Menus";
import NeedHelp from "../../components/NeedHelp/NeedHelp";
import TabMenus from "../../components/TabMenus/TabMenus";
import MobileNotSupported from "../../components/MobileNotSupported/MobileNotSupported";
import TabletNavbar from "../../components/TabletNavbar/TabletNavbar";

const Home = () => {
  const navigate = useNavigate();

  const goT = () => {
    navigate("/");
  };
  return (
    <>
      <div className="homepage">
        <div className="forDesktop">
          <NavbarTop />
        </div>
        <div className="forTablets">
          <TabletNavbar />
        </div>
        <div className="tablet-menu">
          <TabMenus />
        </div>
        <div className="row">
          <div className="col-xl-2 menu-list">
            <div className="sub-menu-list">
              <Menus />
              <NeedHelp />
            </div>
          </div>
          <div className="col-xl-10 col-lg-12 content-area">
            {/* <div className="sub-content-area">
            <Outlet/>
          </div> */}
            <Outlet />
          </div>
        </div>
      </div>
      <div className="mobile-not-supported">
        <MobileNotSupported />
      </div>
    </>
  );
};

export default Home;
