/* eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.scss'
import Login from "../Login/Login";
import NavbarTop from "../../components/NavbarTop/NavbarTop";

const Home = () => {

  const navigate = useNavigate()

  const goT = () => {
    navigate('/')
  }
  return (
    <div className="homepage">
      <NavbarTop/>
      <h1>Hello World</h1>
      <button className="btn btn-primary" onClick={goT}>Click</button>
    </div>
  );
};

export default Home;
