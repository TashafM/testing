/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Content.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import DataTable from "../DataTable/DataTable";
// import TabItems from "../TabItems/TabItems";



const Content = () => {

  return (
    <>
      <Outlet/>
    </>
  );
};

export default Content;
