import React from "react";
import { Outlet, useLocation } from "react-router";
import Menus from "../../components/Menus/Menus";
import MobileNotSupported from "../../components/MobileNotSupported/MobileNotSupported";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import NeedHelp from "../../components/NeedHelp/NeedHelp";
import TabletNavbar from "../../components/TabletNavbar/TabletNavbar";
import TabMenus from "../../components/TabMenus/TabMenus";
import { dealerMenu } from "./data";
import "./dealers.scss";
import noItem from "../../assets/images/item-not-added.png";

const Dealers = () => {
  const location = useLocation();
  const dealersDashboard = `/dealers/dashboard`;
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
          <div
            className={
              location.pathname == dealersDashboard
                ? `col-xl-10 col-lg-12 content-area`
                : `col-xl-7 col-lg-12 content-area`
            }
          >
            {/* <div className="sub-content-area">
            <Outlet/>
          </div> */}
            <Outlet name="alkjaljfsa" />
          </div>
          <div
            className={
              location.pathname == dealersDashboard
                ? "dontShow"
                : "col-xl-3 newnew"
            }
          >
            <div className="heading-div-cart">
              <div>Products</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>
            <div className="no-item">
              <img src={noItem} alt="" />
              <div className="no-text">Items not added yet </div>
            </div>
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
