import React from "react";
import DataTable from "../../../../components/DataTable/DataTable";
import { colCurrentPartners } from "../data";

const CurrentPartners = ({
  selectedIds,
  setSelectedIds,
  currPartnerData,
  currPartnersApi,
  pastPartnerApi,
  getCurrPartners,
  getPastPartners,
}) => {
  return (
    <div>
      <DataTable
        columns={colCurrentPartners}
        datum={currPartnerData}
        selectedIds={selectedIds}
        api={currPartnersApi}
        api2={pastPartnerApi}
        getDataFunc={getCurrPartners}
        getDataFunc2={getPastPartners}
        setSelectedIds={setSelectedIds}
        partners={true}
        ratings={true}
        delActive={true}
      />
    </div>
  );
};

export default CurrentPartners;
