import React from "react";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import "../Brand.scss";
import { useContextProvider } from "../../../../context";

function CardBrand({ title, logo, location }) {
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
        <img src={logo} alt={"brand-logo"} />
        <p className="title-brand">{title}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default CardBrand;
