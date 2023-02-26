import React, { useState } from "react";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import { termsData } from "../data/data";
import ContentPrivacy from "../Privacy/Component/ContentPrivacy";
import "./Terms.scss";
import ModalComponent from "../../../components/Modal";
import EditTerm from "./Component/EditTerms";

function Terms() {
  const [showModal, setShowModal] = useState("");

  return (
    <div>
      <div className="d-flex terms-title">
        Terms & Conditions{" "}
        <BtnIconOnly
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
      {showModal && (
        <ModalComponent
          title="Terms and Conditions"
          show={showModal}
          close={() => setShowModal(false)}
        >
          <EditTerm close={() => setShowModal(false)} />
        </ModalComponent>
      )}
      <ContentPrivacy data={termsData} />
    </div>
  );
}

export default Terms;
