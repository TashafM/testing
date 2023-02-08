/* eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Login from "../Login/Login";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Menus from "../../components/Menus/Menus";
import Content from "../../components/Content/Content";

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
          </div>
        </div>
        <div className="col-md-10 content-area">
          <div className="sub-content-area">
            <Content/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
