import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./logoutpopup.scss";
import logoutimg from "../../assets/images/logout.svg";
import preferences from "../../assets/images/preferences.svg";
import { Button } from "react-bootstrap";
import ConfirmBox from "../ConfirmBox/ConfirmBox";

const LogoutPopup = ({ setShowPopup }) => {
  const [showNow, setShowNow] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setShowNow(true);
  };

  const confirmLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  const cancelLogout = () => {
    setShowNow(false);
    setShowPopup(false);
  };

  const textMsg = "Are you sure you want to logout from the elred portal?";

  return (
    <div className="logout-popup">
      <div className="item-div">
        <span>
          <img src={preferences} alt="" />
        </span>
        <span className="popup-title"> Account Preferences</span>
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
        cancelBtn={'Cancel'}
        actionBtn={'Logout'}
      />
    </div>
  );
};

export default LogoutPopup;
