import React, { useState } from "react";
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
  const [showModal, setShowModal] = useState("");

  const { data, loading } = useResponse("/portalViewCompanyPrivacyPolicy");

  console.log({ data });

  if (loading) {
    <div>loading ...</div>;
  }

  if (!data.length) {
    return (
      <div className="default-height d-flex align-items-center justify-content-center">
        <BtnTitleIcon
          title="Add Address"
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
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex privacy-title">
        Your Privacy Matters{" "}
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
        />
      )}
    </div>
  );
}

export default Privacy;
