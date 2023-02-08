import React from "react";
import "./NavbarTop.scss";
import * as BS from "react-icons/bs";
import atinks from "../../assets/images/atinks.png";
import BlackBtn from "../BlackBtn/BlackBtn";

const NavbarTop = () => {
  return (
    <div className="row navbar-top">
      <div className="col-md-2">
        <span className="logo">
          <img src={atinks} alt="" />
        </span>
      </div>
      <div className="col-md-6 search-div">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        <input type="text" placeholder="Search..."></input>
      </div>
      <div className="col-md-2"><BlackBtn/></div>
      <div className="col-md-2">now</div>
    </div>
  );
};

export default NavbarTop;
