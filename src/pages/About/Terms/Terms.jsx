import React from "react";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import { termsData } from "../data/data";
import ContentPrivacy from "../Privacy/Component/ContentPrivacy";
import "./Terms.scss";

function Terms() {
  return (
    <div>
      <div className="d-flex terms-title">
        Terms & Conditions <BtnIconOnly />
      </div>
      <ContentPrivacy data={termsData} />
    </div>
  );
}

export default Terms;
