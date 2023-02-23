import React from "react";
import fulltime from "../../../../assets/images/full-time.svg";
import location from "../../../../assets/images/location.svg";
import setting from "../../../../assets/images/setting.svg";
import "./styles.scss";

function JobDescriptions() {
  return (
    <div>
      <div className="d-flex justify-content-between mt-5 w-50 ">
        <div className=" d-flex w-25">
          <img className=" me-3" src={fulltime} alt="Full-time" />
          <p className="m-0">Full Time</p>
        </div>
        <div className="w-25">
          <p className="m-0">
            <span className="font-weight-bold">Exp</span>: 5 - 6 yrs
          </p>
        </div>
        <div className=" d-flex w-25">
          <img className=" me-3" src={location} alt="Full-time" />
          <p className="m-0">Mumbai</p>
        </div>
        <div className=" d-flex w-25">
          <img className=" me-3" src={setting} alt="Full-time" />
          <p className="m-0">Python, AWS, JavaScript</p>
        </div>
      </div>
      <div className=" mt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className=" mt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}

export default JobDescriptions;
