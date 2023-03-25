import React, { useState } from "react";
import { brandData } from "../data/data";
import CardBrand from "./Component/CardBrand";
import BtnTitleCenter from "../../../components/Button/BtnTitleCenter";
import "./Brand.scss";
import { useContextProvider } from "../../../context";
import { useResponse } from "../../../hooks/useResponse";
import AddBrand from "./Component/AddBrand";
import { setIn } from "formik";

function Brand() {
  const { setOpenDrawer } = useContextProvider();
  const { data, setData, loading } = useResponse("/portalViewCompanyBrands");
  const [showBrand, setShowBrand] = useState({
    open: false,
    type: "Add",
  });
  const [index, setIndex] = useState(-1);

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
                onClick={() => {
                  setIndex(index);
                  alert(333);
                  setTimeout(() => {
                    setShowBrand({
                      open: true,
                      type: "Edit",
                    });
                  }, [500]);
                }}
                data={item}
                location={item.location}
              />
            </div>
          );
        })}
      </div>
      {showBrand.open && (
        <AddBrand
          show={showBrand}
          handleClose={() => {
            setShowBrand({ open: false, type: "" });
          }}
          data={index === -1 ? {} : data[index] ?? {}}
          completeData={data}
          onUpdate={(res) => {
            const d = JSON.parse(JSON.stringify(data));
            if (index === -1) {
              d.push(res);
            } else {
              d[index] = { ...res };
            }
            console.log({ d });
            setData(d);
          }}
        />
      )}
      <div className="d-flex justify-content-center">
        <div className="add-brand-container text-center">
          <BtnTitleCenter
            title="Add Brands"
            onClick={() => {
              setIndex(-1);
              setTimeout(() => {
                setShowBrand({
                  type: "Add",
                  open: true,
                });
              }, 500);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Brand;
