import React from "react";
import "./FAQ.scss";
import { faqData } from "../data/data";
import Collapsible from "../../../components/Collapsible/Collapsible";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";

function FAQ() {
  return (
    <div>
      <div className="d-flex faq-title">
        Frequently Asked Questions <BtnIconOnly />{" "}
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
    </div>
  );
}

export default FAQ;
