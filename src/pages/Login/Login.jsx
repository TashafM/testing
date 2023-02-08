/* eslint-disable*/
import React from "react";
import LoginNav from "../../components/LoginNav/LoginNav";
import f1 from "../../assets/images/frame_1.png";
import f2 from "../../assets/images/frame_2.png";
import f3 from "../../assets/images/frame_3.png";
import f4 from "../../assets/images/frame_4.png";
import LoginOtp from "../../components/LoginNav/LoginOtp/LoginOtp";

const Login = () => {
  return (
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
        <div className="col-md-5 loginNav-right">
          <div className="row">
            <div className="col-md-6 image-box">
              <img src={f1} alt="afa" />
            </div>
            <div className="col-md-6 image-box">
              <img src={f2} alt="afa" />
            </div>
            <div className="col-md-6 image-box">
              <img src={f3} alt="afa" />
            </div>
            <div className="col-md-6 image-box">
              <img src={f4} alt="afa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
