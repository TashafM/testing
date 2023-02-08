/* eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.scss'
import Login from "../Login/Login";

const Home = () => {

  const navigate = useNavigate()

  const goT = () => {
    navigate('/login')
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button className="btn btn-primary" onClick={goT}>Click</button>
    </div>
  );
};

export default Home;
