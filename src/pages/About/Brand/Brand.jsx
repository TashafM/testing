import React from "react";
import { brandData } from "../data/data";
import CardBrand from "./Component/CardBrand";
import BtnTitleCenter from "../../../components/Button/BtnTitleCenter";
import "./Brand.scss";
import { useContextProvider } from "../../../context";
import { useResponse } from "../../../hooks/useResponse";

function Brand() {
  const { setOpenDrawer } = useContextProvider();
  const { data, loading } = useResponse("/portalViewCompanyBrands");

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-3">
              <CardBrand
                item={item}
                // title={item.title}
                // logo={item.logo}
                data={item}
                location={item.location}
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <div className="add-brand-container text-center">
          <BtnTitleCenter
            title="Add Brands"
            onClick={() =>
              setOpenDrawer({
                type: "Add Brands",
                open: true,
                data: {},
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Brand;
