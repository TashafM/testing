import React from "react";
import DataTable from "../../../../components/DataTable/DataTable";
import { colPastMembers } from "../data/data";

const PastMembers = ({
  selectedIds,
  setSelectedIds,
  pastMemberData,
  pastMemberApi,
  currMemberApi,
  getPastMembers,
  getCurrentMembers,
  filteredItems2,
}) => {

  return (
    <div>
      <DataTable
        columns={colPastMembers}
      // datum={pastMemberData}
        datum={filteredItems2}
        selectedIds={selectedIds}
        api={pastMemberApi}
        api2={currMemberApi}
        getDataFunc={getPastMembers}
        getDataFunc2={getCurrentMembers}
        setSelectedIds={setSelectedIds}
        teamMembers={true}
        resActive={true}
      />
    </div>
  );
};

export default PastMembers;