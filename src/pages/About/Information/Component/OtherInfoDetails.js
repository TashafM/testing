import React, { Fragment } from "react";
import { Badge } from "react-bootstrap";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import Badges from "../../../../components/Input/Badges";

function OtherInfoDetails() {
  return (
    <Fragment>
      <p className="drawer-title">
        Write down the company’s sales reach, services & support and interested
        to purchase
      </p>
      <h5>Sales reach is at</h5>
      <div className="d-flex">
        {["India", "Bangaluru", "Goa"].map((item) => {
          return <Badges value={item} />;
        })}
      </div>
      <hr />
      <div className="mb-3 mt-5">
        <h5 className="mb-2">Do you offer any services & support?</h5>
        <p className="drawer-title">
          Write down the company’s sales reach, services & support and
          interested to purchase
        </p>
      </div>
      <hr />
      <div className="mb-4">
        <h5>You are interested to purchase</h5>
      </div>
      <div className="mb-4 d-flex">
        {["Printing", "Print Heads", "Paper Sheets", "Pages"].map((item) => {
          return <Badges value={item} />;
        })}
      </div>

      <BtnTitleCenter
        title={"SAVE"}
        onClick={() => {
          console.log("save buttonclick");
        }}
      />
    </Fragment>
  );
}

export default OtherInfoDetails;
