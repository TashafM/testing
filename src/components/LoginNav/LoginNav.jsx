/* eslint-disable*/

import React from "react";
import logo from "../../assets/images/logo.png";
import './Login.scss'

const LoginNav = () => {
  return (
    <div className="loginNav">
      <div className="row menu-row">
        <div className="col">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="col nav-menus">
          <ul>
            <li>Community</li>
            <li>Feature</li>
            <li>Help</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
