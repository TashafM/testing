import React from "react";

const LoginOtp = () => {
  return (
    <>
    <div>
        Login
    </div>
    <div>
        Please enter registered email id to get OTP
    </div>
      <div class=" mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Enter email id"
        />
      </div>
      <button className="get-otp-btn">Get OTP</button>
    </>
  );
};

export default LoginOtp;
