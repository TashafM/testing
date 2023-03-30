import React from "react";
import { useNavigate } from "react-router";
import "./logoutpopup.scss";
import logoutimg from "../../assets/images/logout.svg";
import preferences from "../../assets/images/preferences.svg";

const LogoutPopup = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate(`/`);
  };
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
    </div>
  );
};

export default LogoutPopup;
