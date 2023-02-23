import React from "react";
import { Link } from "react-router-dom";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import { privacyPolicyData } from "../data/data";
import ContentPrivacy from "./Component/ContentPrivacy";
import "./Privacy.scss";

function Privacy() {
  return (
    <div>
      <div className="d-flex privacy-title">
        Your Privacy Matters <BtnIconOnly />{" "}
      </div>
      <ContentPrivacy data={privacyPolicyData} />
    </div>
  );
}

export default Privacy;
