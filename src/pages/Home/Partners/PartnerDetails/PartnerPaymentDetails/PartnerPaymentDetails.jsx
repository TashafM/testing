import React from "react";
import { useLocation } from "react-router-dom";
import {
  partnerPaymentDetails,
  partnerPaymentHouseBank,
} from "../components/data";
import PartnersTable from "../components/PartnersTable/PartnersTable";

const PartnerPaymentDetails = () => {
  const data = useLocation().state.data;
  return (
    <div className="partner-about">
      <PartnersTable
        data={data}
        staticData={partnerPaymentDetails}
        title={"Payment Terms Details"}
      />
      <hr className="hr-partner" />
      <PartnersTable
        data={data}
        staticData={partnerPaymentHouseBank}
        title={"House Bank Details"}
      />
    </div>
  );
};

export default PartnerPaymentDetails;
