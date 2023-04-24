import React, { useState } from "react";
import CardBrand from "./Component/CardBrand";
import BtnTitleCenter from "../../../components/Button/BtnTitleCenter";
import "./Brand.scss";
import { useResponse } from "../../../hooks/useResponse";
import AddBrand from "./Component/AddBrand";
import { usePostAsyncResponse } from "../../../hooks/usePostAsyncResponse";
import { toast } from "react-toastify";
import ConfirmBox from "../../../components/ConfirmBox/ConfirmBox";
import { CircularProgress } from "@mui/material";

function Brand() {
  const { data, setData, loading } = useResponse("/portalViewCompanyBrands");
  const [showBrand, setShowBrand] = useState({
    open: false,
    type: "Add",
  });

  const [showModal, setShowModal] = useState(false);
  const [deletedItem, setDeletedItem] = useState({ item: {}, index: -1 });

  const [deleteData] = usePostAsyncResponse("/portalDeleteCompanyBrands");
  const [index, setIndex] = useState(-1);

  const onDeleteBrand = () => {
    const { item, index } = deletedItem;
    console.log({ item }, { index });
    const body = {
      brandId: item.brandId,
    };

    deleteData(body, () => {
      const arr = JSON.parse(JSON.stringify(data));
      arr.splice(index, 1);
      toast.success("brand deleted successfully!!");
      setData([...arr]);
      setShowModal(false);
    });

    console.log({ body });
  };

  if (loading) {
    return (
      <div className=" loading-screen default-height d-flex align-items-center justify-content-center">
        <CircularProgress size={24} />
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-4 col-lg-3 ">
              <CardBrand
                index={index}
                onDelete={() => {
                  setShowModal(true);
                  setDeletedItem({ item, index });
                }}
                item={item}
                onClick={() => {
                  setIndex(index);
                  // alert(333);
                  setTimeout(() => {
                    setShowBrand({
                      open: true,
                      type: "Edit",
                    });
                  }, [500]);
                }}
                data={item}
                location={item.brandLocation?.city ?? ""}
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

      <ConfirmBox
        msg={"Are you sure you want to delete this item?"}
        cancelFunction={() => {
          setShowModal(false);
        }}
        showNow={showModal}
        confirmFunction={onDeleteBrand}
        cancelBtn={"Cancel"}
        actionBtn={"Delete"}
      />
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
