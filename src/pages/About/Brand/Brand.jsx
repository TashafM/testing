import React from "react";
import { brandData } from "../data/data";
import CardBrand from "./Component/CardBrand";

function Brand() {
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
    </div>
  );
}

export default Brand;
