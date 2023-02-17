import React from "react";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        {console.log('loading....')}
      </div>
    </div>
  );
};

export default LoadingScreen;
