import React, { useState } from "react";
import "./FAQ.scss";
import { faqData } from "../data/data";
import Collapsible from "../../../components/Collapsible/Collapsible";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import ModalComponent from "../../../components/Modal";
import EditFAQ from "./Component/EditFAQ";
import { Button } from "react-bootstrap";

function FAQ() {
  const [showModal, setShowModal] = useState("");

  const HandleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="d-flex faq-title">
        Frequently Asked Questions <BtnIconOnly onClick={HandleOpenModal} />{" "}
      </div>
      {faqData.map((item, index) => {
        return (
          <Collapsible
            key={item.questions}
            title={item.questions}
            description={item.answers}
            eventKey={index.toString()}
          />
        );
      })}
      {showModal && (
        <ModalComponent
          title="Frequently Asked Questions"
          show={showModal}
          close={() => setShowModal(false)}
        >
          <EditFAQ close={() => setShowModal(false)} />
        </ModalComponent>
      )}
    </div>
  );
}

export default FAQ;
