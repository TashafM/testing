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
    return <div>loading ...</div>;
  }

  if (!data.length) {
    return (
      <div className="default-height d-flex align-items-center justify-content-center">
        <BtnTitleIcon
          title="Add privacy"
          onClick={() => {
            setShowModal(true);
          }}
        />
        {showModal && (
          <EditPrivacy
            title="Privacy Policy"
            show={showModal}
            close={() => setShowModal(false)}
            data={data}
            editSaveCallback={editSaveCallback}
          />
        )}
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
      <ContentPrivacy data={data} />
      {showModal && (
        <EditPrivacy
          title="Privacy Policy"
          show={showModal}
          close={() => setShowModal(false)}
          data={data}
          editSaveCallback={editSaveCallback}
        />
      )}
    </div>
  );
}

export default Privacy;
