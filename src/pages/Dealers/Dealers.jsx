import React from "react";
import { Outlet } from "react-router";
import Menus from "../../components/Menus/Menus";
import MobileNotSupported from "../../components/MobileNotSupported/MobileNotSupported";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import NeedHelp from "../../components/NeedHelp/NeedHelp";
import TabletNavbar from "../../components/TabletNavbar/TabletNavbar";
import TabMenus from "../../components/TabMenus/TabMenus";
import { dealerMenu } from "./data";

const Dealers = () => {
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
              <Menus tabs={dealerMenu} />
              {/* <Button onClick={()=>{
                  setA(true)
                  console.log(a,'aaaaaaaaaa')
                }}> click here</Button> */}
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

export default Dealers;
