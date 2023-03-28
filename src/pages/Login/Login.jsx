/* eslint-disable*/
import React from "react";
import LoginNav from "../../components/LoginNav/LoginNav";
import LoginOtp from "../../components/LoginNav/LoginOtp/LoginOtp";
import MobileNotSupported from "../../components/MobileNotSupported/MobileNotSupported";
import LoginImages from "./LoginImages/LoginImages";
import './Login.scss'

const Login = () => {
  return (
    <>
    <div className="login">
      <LoginNav />
      <div className="row">
        <div className="col-md-7 loginNav-left">
          <div className="login-heading">
            Leveraging All <span className="connections">Connections</span>{" "}
          </div>
          <div className="loginNav-para">
            <p>
              Ut interdum tellus elit sed risus. Maecenas eget condimen tum
              velit, sit amet feugiat lectus. interdum tellus elit sed risus.
            </p>
          </div>
          <LoginOtp/>
        </div>
        <LoginImages/>
      </div>
    </div>
    <div className="login-mobile-not-supported">
      <MobileNotSupported/>
    </div>
    </>
  );
};

export default Login;
