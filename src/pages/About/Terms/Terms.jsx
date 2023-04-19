import React, { useEffect, useState } from "react";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import { termsData } from "../data/data";
import ContentPrivacy from "../Privacy/Component/ContentPrivacy";
import "./Terms.scss";
import ModalComponent from "../../../components/Modal";
import EditTerm from "./Component/EditTerms";
import { useResponse } from "../../../hooks/useResponse";
import { usePostAsyncResponse } from "../../../hooks/usePostAsyncResponse";
import BtnTitleIcon from "../../../components/Button/BtnTitleIcon";
import { CircularProgress } from "@mui/material";

function Terms() {
  const [showModal, setShowModal] = useState(false);
  const [termCondition, setTermCondition] = useState([]);

  const { data, setData, loading } = useResponse(
    "/portalViewCompanyTermsConditions"
  );

  const [postData, { error, loading: loadingTerms }] = usePostAsyncResponse(
    "/portalPostCompanyTermsConditions"
  );

  const HandleOpenModal = () => {
    setShowModal(true);
  };

  const editSaveCallback = (data) => {
    console.log("shdj", data);
    const body = {
      termsConditions: data,
    };

    postData(body, () => {
      setShowModal(false);
      setData(data);
    });
  };

  if (loading) {
    return (
      <div className=" loading-screen default-height d-flex align-items-center justify-content-center">
        <CircularProgress size={24} />
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex terms-title terms-titel-container">
        Terms & Conditions <BtnIconOnly onClick={HandleOpenModal} />
      </div>
      {showModal && (
        <ModalComponent
          title="Terms & Conditions"
          show={showModal}
          close={() => setShowModal(false)}
          data={data}
          editSaveCallback={editSaveCallback}
          type={"Term & Condition"}
          btnTitle="Add more"
          emptyadta={{ title: "", content: "" }}
          loading={loadingTerms}
        />
      )}
      {data.length ? (
        <ContentPrivacy data={data} />
      ) : (
        <div className="default-height d-flex align-items-center justify-content-center">
          <p className="terms-title empty-screen-text">
            No terms & conditions added yet.
          </p>
        </div>
      )}
    </div>
  );
}

export default Terms;
