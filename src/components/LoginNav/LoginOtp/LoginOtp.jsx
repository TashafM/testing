import React, { useState } from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Login.scss";
import axios from "axios";
import { API } from "../../../helper/API";
import { toast, ToastContainer } from "react-toastify";

const LoginOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [reqOtp, setReqOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [userCode, setUserCode] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const emailData = {
    email: email,
  };

  const handleChange = (index, event) => {
    const newOtp = [...otp];
    const inputValue = event.target.value.slice(0, 1);
    if (/^\d*$/.test(inputValue)) {
      newOtp[index] = inputValue;
      setOtp(newOtp);

      // Move focus to the next input field if maxLength is reached
      const nextIndex = index + 1;
      const nextInput = document.getElementById(`otp-input-${nextIndex}`);
      if (
        inputValue &&
        nextInput &&
        event.target.value.length === event.target.maxLength
      ) {
        nextInput.focus();
      }
    }
  };

  // const getOtp = () => {

  //   setEmail("");
  //   axios
  //     .post(API.LOGIN_API, emailData)
  //     .then((res) => {
  //       console.log(res, "00000000000");
  //       if (res.status == 200) {
  //         setReqOtp(true);
  //         setUserCode(res.data.result[0].userCode);
  //         toast.success("OTP sent to your email address!");
  //         setIsDisabled(false);
  //       }
  //       // console.log(res.data.result[0].userCode,'jjjjjjj')
  //     })
  //     .catch((err) => {
  //       if (err.response.status !== 200) {
  //         toast.error("Email id is not registered with us!");
  //         setIsDisabled(false);
  //       }
  //       console.log(err.response.status, "erorro");
  //     });
  // };

  const getOtp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setIsLoading(true);
    setEmail("");
    axios
      .post(API.LOGIN_API, emailData)
      .then((res) => {
        console.log(res, "00000000000");
        if (res.status == 200) {
          setReqOtp(true);
          setUserCode(res.data.result[0].userCode);
          toast.success("OTP sent to your email address!");
          setIsDisabled(false);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err.response.status !== 200) {
          toast.error("Email id is not registered with us!");
          setIsDisabled(false);
          setIsLoading(false);
        }
      });
  };

  const validateOtp = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("OTP must have 6 characters");
      return false;
    } else {
      setIsLoading(true);
      axios
        .post(API.VERIFY_OTP, {
          userCode: userCode,
          otp: otpValue,
        })
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("usercode", res.data.userCode);
            localStorage.setItem("accessToken", res.data.result[0].accessToken);
            localStorage.setItem("username", res.data.userName);
            delete res?.data?.result;
            localStorage.setItem("userData", JSON.stringify(res?.data));
            navigate("/select-account-type");
            toast.success("Login Successfully");

            setIsLoading(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setOtp(["", "", "", "", "", ""]);
          toast.error("Incorrect OTP entered");
        });
    }
  };

  return (
    <>
      <div className="text-login">Login</div>
      <div className="email-enter-msg">
        {reqOtp
          ? "Please enter OTP received on the registered email id"
          : "Please enter registered email id to get OTP"}
      </div>

      {reqOtp ? (
        <>
          <Form className="otp-div">
            {otp.map((value, index) => (
              <InputGroup className="mb-3 otp-input" key={index}>
                <FormControl
                  id={`otp-input-${index}`}
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
            className="form-control email"
            id="floatingInput"
            placeholder="Enter email id"
            value={email}
            onChange={handleEmail}
          />
        </div>
      )}

      {/* <button className="get-otp-btn" onClick={getOtp} disabled={isDisabled}>
        {isDisabled ? (
          "Getting Otp..."
        ) : reqOtp ? (
          <>
            <span
              onClick={(event) => {
                event.stopPropagation();
                validateOtp();
              }}
            >
              Login
            </span>
          </>
        ) : (
          "Get OTP"
        )}
      </button> */}

      {reqOtp ? (
        <button
          className={isLoading ? "get-otp-btn-loading" : "get-otp-btn"}
          onClick={validateOtp}
          disabled={isLoading}
        >
          {isLoading ? <Spinner animation="border" variant="light" /> : "Login"}
        </button>
      ) : (
        <button
          className={isLoading ? "get-otp-btn-loading" : "get-otp-btn"}
          onClick={getOtp}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner animation="border" variant="light" />
          ) : (
            "Get Otp"
          )}
        </button>
      )}
    </>
  );
};

export default LoginOtp;
