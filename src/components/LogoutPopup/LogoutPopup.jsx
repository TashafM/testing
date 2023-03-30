import React from "react";
import { useNavigate } from "react-router";
import "./logoutpopup.scss";

const LogoutPopup = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate(`/`)
    }
  return (
    <div className="logout-popup">
      <div className="item-div">Account Preferences</div>
      <div className="item-div" onClick={logout}>Logout</div>
    </div>
  );
};

export default LogoutPopup;
