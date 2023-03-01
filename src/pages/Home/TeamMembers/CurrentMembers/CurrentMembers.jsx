import React from "react";
import DataTable from "../../../../components/DataTable/DataTable";
import { colCurrentMembers } from "../data/data";

const CurrentMembers = ({
  selectedIds,
  setSelectedIds,
  currMemberData,
  currMemberApi,
  pastMemberApi,
  getCurrMembers,
  getPastMembers,
}) => {
  return (
    <div>
      <DataTable
        columns={colCurrentMembers}
        datum={currMemberData}
        selectedIds={selectedIds}
        api={currMemberApi}
        api2={pastMemberApi}
        getDataFunc={getCurrMembers}
        getDataFunc2={getPastMembers}
        setSelectedIds={setSelectedIds}
        teamMembers={true}
        ratings={true}
        delActive={true}
      />
    </div>
  );
};

export default CurrentMembers;
