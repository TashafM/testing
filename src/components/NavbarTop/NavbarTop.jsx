import React from "react";
import "./NavbarTop.scss";
import * as BS from "react-icons/bs";
import atinks from "../../assets/images/atinks.png";
import BlackBtn from "../BlackBtn/BlackBtn";
import {BsChevronDown} from 'react-icons/bs'
import user from '../../assets/images/user.jpg'

const NavbarTop = () => {
  return (
    <div className="row navbar-top">
      <div className="col-md-2">
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
          <BlackBtn />
        </div>
        <div className="user-profile">
          <img src={user} alt="" />
          <span className="username">Username</span>
          <span className="btn-dropdown"><BsChevronDown/></span>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
