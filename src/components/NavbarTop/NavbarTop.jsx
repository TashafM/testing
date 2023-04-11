import React, { useContext, useEffect, useState } from "react";
import "./NavbarTop.scss";
import * as BS from "react-icons/bs";
import atinks from "../../assets/images/atinks.png";
import BlackBtn from "../BlackBtn/BlackBtn";
import { BsChevronDown } from "react-icons/bs";
import user from "../../assets/images/user.jpg";
import atlogo from "../../assets/images/atlogo.png";
import axios from "../../helper/axios";

import LogoutPopup from "../LogoutPopup/LogoutPopup";
import MyDealersPopup from "../../pages/Dealers/Modal/MyDealersPopup/MyDealersPopup";
import { API } from "../../helper/API";

const NavbarTop = ({ dealers }) => {
  const idCode = localStorage.getItem("principalCompanyUserCode");
  const dealersLogo = localStorage.getItem('dpURL')
  const [showPopup, setShowPopup] = useState(false);
  const [dealerPopup, showDealerPopup] = useState(false);
  const [allDealerData, setAllDealerData] = useState([])

  const fetchDealers = () => {
    const accessToken = localStorage.getItem("accessToken");
    axios.post(
      API.VIEW_COMPANY_DEALERS,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    ).then((res)=>setAllDealerData(res.result))
  };

  useEffect(() => {
    fetchDealers();
  }, [idCode]);
  

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
            <div className="my-dealers" onClick={() => showDealerPopup(true)} >
              <div className="dealer-logo">
                <img src={dealers ? dealersLogo : atlogo} alt="" />
              </div>
              <BsChevronDown />
            </div>
          ) : (
            <BlackBtn />
          )}
        </div>
        <MyDealersPopup show={dealerPopup} setDealerPopup={showDealerPopup} data={allDealerData} />
        <div className="user-profile">
          <img src={user} alt="" />
          <span className="username">{"Username"}</span>
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
