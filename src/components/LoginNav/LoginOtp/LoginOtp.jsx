import React from "react";

const LoginOtp = () => {
  return (
    <>
    <div className="text-login">
        Login
    </div>
    <div className="email-enter-msg">
        Please enter registered email id to get OTP
    </div>
      <div class="loginOtp mb-3">
        <input
          type="email"
          class="form-control email"
          id="floatingInput"
          placeholder="Enter email id"
        />
      </div>
      <button className="get-otp-btn">Get OTP</button>
    </>
  );
};

export default LoginOtp;
