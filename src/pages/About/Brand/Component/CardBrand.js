import React from "react";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import "../Brand.scss";

function CardBrand({ title, logo, location }) {
  return (
    <div className="card-brand">
      <div className="text-end">
        <BtnIconOnly />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={logo} alt={"brand-logo"} />
        <p className="title-brand">{title}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default CardBrand;
