import React from "react";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import "../Brand.scss";
import { useContextProvider } from "../../../../context";

function CardBrand({ title, item, location }) {
  const { setOpenDrawer } = useContextProvider();

  return (
    <div className="card-brand">
      <div className="text-end">
        <BtnIconOnly
          onClick={() => {
            setOpenDrawer({
              type: "Edit Brands",
              open: true,
            });
          }}
        />
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
    </div>
  );
}

export default CardBrand;
