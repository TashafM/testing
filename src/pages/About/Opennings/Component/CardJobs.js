import React from "react";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import "../Opennings.scss";

function CardJobs({ title, logo, totle }) {
  return (
    <div className="card-jobs">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={logo} alt={"jobs-logo"} />
        <p className="title-jobs">{title}</p>
        <p>{totle}</p>
      </div>
    </div>
  );
}

export default CardJobs;
