import React from "react";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import deleteBtn from "../../../../assets/images/delete.svg";

import "../Brand.scss";

function CardBrand({ item, location, onClick, onDelete, index }) {
  // const { setOpenDrawer } = useContextProvider();

  return (
    <div className="card-brand pointer">
      <div className="text-end">
        <BtnIconOnly onClick={onClick} />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center overflow-hidden ">
        <div className="brand-img-container">
          <img
            className="brand-image"
            src={item.brandLogoURL}
            alt={"brand-logo"}
          />
        </div>

        <p className="title-brand m-0">{item.brandName}</p>
        <p className="m-0 email location-overfow-text">
          {item.brandLocation?.city ?? ""}
        </p>
      </div>
      <div className="text-end">
        <BtnIconOnly icon={deleteBtn} onClick={() => onDelete(item, index)} />
      </div>
    </div>
  );
}

export default CardBrand;
