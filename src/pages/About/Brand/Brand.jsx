import React from "react";
import { brandData } from "../data/data";
import CardBrand from "./Component/CardBrand";
import BtnTitleCenter from "../../../components/Button/BtnTitleCenter";
import "./Brand.scss";
import { useContextProvider } from "../../../context";

function Brand() {
  const { setOpenDrawer } = useContextProvider();

  return (
    <div className="container-fluid">
      <div className="row">
        {brandData.map((item) => {
          return (
            <div className="col-3">
              <CardBrand
                title={item.title}
                logo={item.logo}
                location={item.location}
              />
            </div>
          );
        })}
      </div>
      <div className="add-brand-container text-center">
        <BtnTitleCenter
          title="Add Brands"
          onClick={() =>
            setOpenDrawer({
              type: "Add Brands",
              open: true,
            })
          }
        />
      </div>
    </div>
  );
}

export default Brand;
