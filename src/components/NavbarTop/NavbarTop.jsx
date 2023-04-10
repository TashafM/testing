import React, { useContext, useState } from "react";
import "./NavbarTop.scss";
import * as BS from "react-icons/bs";
import atinks from "../../assets/images/atinks.png";
import BlackBtn from "../BlackBtn/BlackBtn";
import { BsChevronDown } from "react-icons/bs";
import user from "../../assets/images/user.jpg";
import atlogo from "../../assets/images/atlogo.png";

import LogoutPopup from "../LogoutPopup/LogoutPopup";
import MyDealersPopup from "../../pages/Dealers/Modal/MyDealersPopup/MyDealersPopup";

const NavbarTop = ({ dealers }) => {
  const dealerUserName = localStorage.getItem("firstname");
  const dealerDp = localStorage.getItem("dpURL");

  const [showPopup, setShowPopup] = useState(false);
  const [dealerPopup, showDealerPopup] = useState(false);
  return (
    <div className="row navbar-top">
      <div className="col-md-2 col-sm-4">
        <span className="logo">
          <img src={atinks} alt="" />
        </span>
      </div>
      <div className="col-md-7 search-div-top">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        <input type="text" placeholder="Search..."></input>
      </div>
      <div className="col-md-3 right-div">
        <div>
          {dealers ? (
            <div className="my-dealers" onClick={() => showDealerPopup(true)}>
              <div className="dealer-logo">
                <img src={atlogo} alt="" />
              </div>
              <BsChevronDown />
            </div>
          ) : (
            <BlackBtn />
          )}
        </div>
        <MyDealersPopup show={dealerPopup} setDealerPopup={showDealerPopup} />
        <div className="user-profile">
          <img src={dealers ? dealerDp : user} alt="" />
          <span className="username">
            {dealers ? dealerUserName : "Username"}
          </span>
          <span
            className="btn-dropdown"
            onClick={() => setShowPopup(!showPopup)}
          >
            <BsChevronDown />
          </span>
          {showPopup && <LogoutPopup setShowPopup={setShowPopup} />}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
