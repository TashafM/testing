import React, { useContext, useEffect, useState } from "react";
import "./TabletNavbar.scss";
import * as BS from "react-icons/bs";
import BlackBtn from "../BlackBtn/BlackBtn";
import { BsChevronDown } from "react-icons/bs";
import axios, { axiosInstance } from "../../helper/axios";

import LogoutPopup from "../LogoutPopup/LogoutPopup";
import MyDealersPopup from "../../pages/Dealers/Modal/MyDealersPopup/MyDealersPopup";
import { API } from "../../helper/API";
import compIcon from "../../assets/images/company-default-icon.png";
import { getLocalStorageData } from "../Utils/Utils";
import { ToastContainer, toast } from "react-toastify";

const NavbarTop = ({ dealers }) => {
  // const {setIsEmpty} = useContext(AddProducts)
  const idCode = localStorage.getItem("principalCompanyUserCode");
  const dealersLogo = localStorage.getItem("dpURL");
  const [showPopup, setShowPopup] = useState(false);
  const [dealerPopup, showDealerPopup] = useState(false);
  const [allDealerData, setAllDealerData] = useState([]);
  // const [dpURL, setDpURL] = useState("")
  let userData = getLocalStorageData("userData");

  const fetchDealers = () => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        API.VIEW_COMPANY_DEALERS,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        setAllDealerData(res.result);
        localStorage.removeItem("cart");
      });
  };

  useEffect(() => {
    fetchDealers();

    // emptyCart();
  }, [idCode]);

  const emptyCart = () => {
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );
    axiosInstance
      .post(API.DEALER_CLEAR_CART, { principalCompanyUserCode })
      .then((res) => {
        if (res.success) {
          // setIsEmpty(false);
          localStorage.removeItem("cartProducts");
        }
      });
  };

  return (
    <div className=" navbar-top d-flex justify-content-between align-items-center">
      <img
        className="logo"
        src={userData?.dpURL ? userData?.dpURL : compIcon}
        alt=""
      />
      <div className=" search-div-top">
        {/* <span className="icon-search">
          <BS.BsSearch />
        </span> */}
      </div>
      <div className="right-div">
        <MyDealersPopup
          show={dealerPopup}
          setDealerPopup={showDealerPopup}
          data={allDealerData}
        />
        <div className="user-profile">
          <img
            src={userData?.dpURL ? userData?.dpURL : compIcon}
            alt=""
            onClick={() => setShowPopup(!showPopup)}
          />
          <span className="username" onClick={() => setShowPopup(!showPopup)}>
            {userData?.firstname ?? ""}
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
