import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import BtnTitleIcon from "../../../components/Button/BtnTitleIcon";
import ModalComponent from "../../../components/Modal";
import { useResponse } from "../../../hooks/useResponse";
import { privacyPolicyData } from "../data/data";
import ContentPrivacy from "./Component/ContentPrivacy";
import EditPrivacy from "./Component/EditPrivacy";
import "./Privacy.scss";
import { CircularProgress } from "@mui/material";

function Privacy() {
  const [privacy, setPrivacy] = useState([]);
  const [showModal, setShowModal] = useState("");

  const { data, setData, loading } = useResponse(
    "/portalViewCompanyPrivacyPolicy"
  );

  const editSaveCallback = (data) => {
    console.log("shdj", data);
    setData(data);
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
      <div className="d-flex privacy-title privacy-title-botton">
        Privacy Policy
        <BtnIconOnly
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
      {showModal && (
        <EditPrivacy
          title="Privacy Policy"
          show={showModal}
          close={() => setShowModal(false)}
          data={data}
          editSaveCallback={editSaveCallback}
        />
      )}
      {data.length ? (
        <div>
          <ContentPrivacy data={data} />
        </div>
      ) : (
        <div className="default-height d-flex align-items-center justify-content-center">
          <p className="terms-title empty-screen-text">
            No privacy policy added yet.
          </p>
        </div>
      )}
    </div>
  );
}

export default Privacy;
