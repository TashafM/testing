/* eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

const Home = () => {

  const navigate = useNavigate()

  const goT = () => {
    navigate('/login')
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={goT}>Click</button>
    </div>
  );
};

export default Home;
