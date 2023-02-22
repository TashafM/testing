/* eslint-disable*/
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Home.scss";
import Login from "../Login/Login";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Menus from "../../components/Menus/Menus";
import NeedHelp from "../../components/NeedHelp/NeedHelp";

const Home = () => {
  const navigate = useNavigate();

  const goT = () => {
    navigate("/");
  };
  return (
    <div className="homepage">
      <NavbarTop />
      <div className="row">
        <div className="col-md-2 menu-list">
          <div className="sub-menu-list">
            <Menus/>
            <NeedHelp/>
          </div>
        </div>
        <div className="col-md-10 content-area">
          {/* <div className="sub-content-area">
            <Outlet/>
          </div> */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Home;
