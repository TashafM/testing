import React from "react";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import deleteBtn from "../../../../assets/images/delete.svg";

import "../Brand.scss";

function CardBrand({ title, item, location, onClick, onDelete, index }) {
  // const { setOpenDrawer } = useContextProvider();

  return (
    <div className="card-brand">
      <div className="text-end">
        <BtnIconOnly onClick={onClick} />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img
          className="brand-image"
          src={item.brandLogoURL}
          alt={"brand-logo"}
        />
        <p className="title-brand">{item.brandName}</p>
        <p className="m-0">{location}</p>
      </div>
      <div className="text-end">
        <BtnIconOnly icon={deleteBtn} onClick={() => onDelete(item, index)} />
      </div>
    </div>
  );
}

export default CardBrand;
