import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./PartnerAbout.scss";
import { partnerAboutData } from "../components/data";
import PartnersTable from "../components/PartnersTable/PartnersTable";

const PartnerAbout = () => {
  const data = useLocation().state.data;
  return (
    <div className="partner-about">
      <PartnersTable
        data={data}
        staticData={partnerAboutData}
        title={"Company Details"}
      />
    </div>
  );
};

export default PartnerAbout;
