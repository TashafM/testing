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
import ProductCart from "./Components/ProductCart/ProductCart";
import { createContext } from "react";
import { useState } from "react";

export const AddProducts = createContext();


const Dealers = () => {
  const location = useLocation();
  const dealersDashboard = `/dealers/dashboard`;
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <>
      <AddProducts.Provider value={{isEmpty, setIsEmpty}}>
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
              <ProductCart />
            </div>
          </div>
        </div>
      </AddProducts.Provider>
      <div className="mobile-not-supported">
        <MobileNotSupported />
      </div>
    </>
  );
};

export default Dealers;
