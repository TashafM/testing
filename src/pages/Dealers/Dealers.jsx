import React from "react";
import { Outlet, useLocation } from "react-router";
import Menus from "../../components/Menus/Menus";
import MobileNotSupported from "../../components/MobileNotSupported/MobileNotSupported";
import NavbarTop from "../../components/NavbarTop/NavbarTop";
import NeedHelp from "../../components/NeedHelp/NeedHelp";
import TabletNavbar from "../../components/TabletNavbar/TabletNavbar";
import TabMenus from "../../components/TabMenus/TabMenus";
import { dealerMenu, tabletMenuDealers } from "./data";
import "./dealers.scss";
import ProductCart from "./Components/ProductCart/ProductCart";
import { createContext } from "react";
import { useState } from "react";

export const AddProducts = createContext();
export const GlobalSidePanel = createContext();

const Dealers = () => {
  const location = useLocation();
  const dealersDashboard = `/dealers/dashboard`;
  const [isEmpty, setIsEmpty] = useState(true);

  //--------------FOR SIDE PANEL OPENING----------------
  const [showPanel, setShowPanel] = useState(false);
  return (
    <>
      <GlobalSidePanel.Provider value={{ showPanel, setShowPanel }}>
        <AddProducts.Provider value={{ isEmpty, setIsEmpty }}>
          <div className="homepage dealers-homepage">
            <div className="forDesktop">
              <NavbarTop dealers={true} />
            </div>
            <div className="forTablets">
              <TabletNavbar />
            </div>
            <div className="tablet-menu">
              <TabMenus tabs={tabletMenuDealers}/>
            </div>
            <div className="row">
              <div className="col-xl-2 menu-list">
                <div className="sub-menu-list">
                  <Menus tabs={dealerMenu} marginTop={true}/>
                </div>
              </div>
              <div
                className={
                  location.pathname == dealersDashboard
                    ? `col-xl-10 col-lg-12 content-area`
                    : `col-xl-7 col-lg-8 content-area`
                }
              >
                <Outlet name="alkjaljfsa" />
              </div>
              <div
                className={
                  location.pathname == dealersDashboard
                    ? "dontShow"
                    : "col-xl-3 col-lg-4 newnew"
                }
              >
                <ProductCart />
              </div>
            </div>
          </div>
        </AddProducts.Provider>
      </GlobalSidePanel.Provider>
      <div className="mobile-not-supported">
        <MobileNotSupported />
      </div>
    </>
  );
};

export default Dealers;
