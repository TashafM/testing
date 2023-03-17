import React, { useState } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Login.scss";
import axios from "axios";
import { API } from "../../../helper/API";

const LoginOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [reqOtp, setReqOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [userCode, setUserCode] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const emailData = {
    email: email,
  };

  const handleChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value.slice(0, 1);
    setOtp(newOtp);
  };

  // const getOtp = () => {
  //   setReqOtp(true);
  // };

  const getOtp = () => {
    axios.post(API.LOGIN_API, emailData).then((res) => {
      if (res.status == 200) {
        setReqOtp(true);
        setUserCode(res.data.result[0].userCode);
      }
      // console.log(res.data.result[0].userCode,'jjjjjjj')
    });
  };

  const validateOtp = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("OTP must have 6 characters");
      return false;
    }

    axios
      .post(API.VERIFY_OTP, {
        userCode: userCode,
        otp: otpValue,
      })
      .then((res) => {
        if (res.status == 200) {
          navigate("/home/dashboard");
        }
      });
    
  };

  return (
    <>
      <div className="text-login">Login</div>
      <div className="email-enter-msg">
        Please enter registered email id to get OTP
      </div>

      {reqOtp ? (
        <>
          <Form className="otp-div">
            {otp.map((value, index) => (
              <InputGroup className="mb-3 otp-input" key={index}>
                <FormControl
                  key={index}
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(event) => handleChange(index, event)}
                />
              </InputGroup>
            ))}
          </Form>{" "}
          {error && <div className="otp-error">{error}</div>}
        </>
      ) : (
        <div className="loginOtp mb-3">
          <input
            type="email"
            class="form-control email"
            id="floatingInput"
            placeholder="Enter email id"
            // value={email}
            onChange={handleEmail}
          />
        </div>
      )}

      <button className="get-otp-btn" onClick={getOtp}>
        {reqOtp ? (
          <>
            <span onClick={validateOtp}>Login</span>
          </>
        ) : (
          "Get OTP"
        )}
      </button>
    </>
  );
};

export default LoginOtp;
