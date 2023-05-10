import React, { useContext, useEffect, useState } from "react";
import "./NavbarTop.scss";
import * as BS from "react-icons/bs";
import atinks from "../../assets/images/atinks.png";
import BlackBtn from "../BlackBtn/BlackBtn";
import { BsChevronDown } from "react-icons/bs";
import user from "../../assets/images/user.jpg";
import atlogo from "../../assets/images/atlogo.png";
import axios, { axiosInstance } from "../../helper/axios";

import LogoutPopup from "../LogoutPopup/LogoutPopup";
import MyDealersPopup from "../../pages/Dealers/Modal/MyDealersPopup/MyDealersPopup";
import { API } from "../../helper/API";
import { AddProducts } from "../../pages/Dealers/Dealers";
import compIcon from "../../assets/images/company-default-icon.png";
import { getLocalStorageData } from "../Utils/Utils";
import { ToastContainer, toast } from "react-toastify";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tippy from "@tippyjs/react";

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
    <div className="row navbar-top">
      <ToastContainer position="top-center" />

      <div className="col-md-2 col-sm-4">
        <span className="logo">
          <img src={userData?.dpURL ? userData?.dpURL : compIcon} alt="" />
        </span>
      </div>
      <div className="col-md-7 search-div-top">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        {/* <span onClick={() => toast.success("coming soon")}> */}
        <Tippy content="Feature Coming Soon" trigger="click">
          {/* <button>My button</button> */}
          <input type="text" placeholder="Search..." readOnly></input>
        </Tippy>

        {/* </span> */}
      </div>
      <div className="col-md-3 right-div">
        <div>
          {dealers ? (
            <div className="my-dealers" onClick={() => showDealerPopup(true)}>
              <div className="dealer-logo">
                <img src={dealersLogo == "" ? compIcon : dealersLogo} alt="" />
              </div>
              <BsChevronDown />
            </div>
          ) : (
            <BlackBtn />
          )}
        </div>
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
            <div>{userData?.firstname ?? ""}</div>
            <div className="email-txt"> {userData?.email ?? ""}</div>
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
