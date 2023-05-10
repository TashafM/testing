import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "./logoutpopup.scss";
import logoutimg from "../../assets/images/logout.svg";
import preferences from "../../assets/images/preferences.svg";
import { Button } from "react-bootstrap";
import ConfirmBox from "../ConfirmBox/ConfirmBox";
import { useContext } from "react";
import { FixedTableHead } from "../../App";

const LogoutPopup = ({ setShowPopup }) => {
  const { setIsOpen } = useContext(FixedTableHead);
  const [showNow, setShowNow] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setShowNow(true);
    setIsOpen(true);
  };

  const confirmLogout = () => {
    navigate("/");
    localStorage.clear();
    setIsOpen(false);
  };

  const cancelLogout = () => {
    setShowNow(false);
    setShowPopup(false);
    setIsOpen(false);
  };

  const textMsg = "Are you sure you want to logout from the elred portal?";

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowPopup(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopup, setIsOpen]);

  return (
    <div ref={ref} className="logout-popup">
      <div className="item-div">
        {/* <span>
          <img src={preferences} alt="" />
        </span>
        <span className="popup-title"> Account Preferences</span> */}
      </div>
      <div className="item-div" onClick={logout}>
        <span>
          <img src={logoutimg} alt="" />
        </span>
        <span className="popup-title log">Logout</span>
      </div>
      <ConfirmBox
        msg={textMsg}
        cancelFunction={cancelLogout}
        showNow={showNow}
        confirmFunction={confirmLogout}
        cancelBtn={"Cancel"}
        actionBtn={"Logout"}
      />
    </div>
  );
};

export default LogoutPopup;

