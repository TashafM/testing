import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import ModalComponent from "../../../components/Modal";
import { privacyPolicyData } from "../data/data";
import ContentPrivacy from "./Component/ContentPrivacy";
import EditPrivacy from "./Component/EditPrivacy";
import "./Privacy.scss";

function Privacy() {
  const [showModal, setShowModal] = useState("");

  return (
    <div>
      <div className="d-flex privacy-title">
        Your Privacy Matters{" "}
        <BtnIconOnly
          onClick={() => {
            setShowModal(true);
          }}
        />{" "}
      </div>
      <ContentPrivacy data={privacyPolicyData} />
      {showModal && (
        <ModalComponent
          title="Privacy Policy"
          show={showModal}
          close={() => setShowModal(false)}
        >
          <EditPrivacy close={() => setShowModal(false)} />
        </ModalComponent>
      )}
    </div>
  );
}

export default Privacy;
