/* eslint-disable*/
import React, { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Home.scss";
import Login from "../Login/Login";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import Menus from "../../components/Menus/Menus";
import NeedHelp from "../../components/NeedHelp/NeedHelp";
import TabMenus from "../../components/TabMenus/TabMenus";
import MobileNotSupported from "../../components/MobileNotSupported/MobileNotSupported";
import TabletNavbar from "../../components/TabletNavbar/TabletNavbar";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../../App";
import { useContext } from "react";


const Home = () => {
  const navigate = useNavigate();

  const {a, setA} = useContext(GlobalContext)
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
                <Menus name="tashaf mahmood"/>
                {/* <Button onClick={()=>{
                  setA(true)
                  console.log(a,'aaaaaaaaaa')
                }}> click here</Button> */}
                <NeedHelp />
              </div>
            </div>
            <div className="col-xl-10 col-lg-12 content-area">
              {/* <div className="sub-content-area">
            <Outlet/>
          </div> */}
              <Outlet name="alkjaljfsa" />
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
