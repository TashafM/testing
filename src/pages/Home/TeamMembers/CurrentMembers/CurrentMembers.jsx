import React from "react";
import { useMatch } from "react-router-dom";
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
  filteredItems,
}) => {

  return (
    <div>
      <DataTable
        columns={colCurrentMembers}
        // datum={currMemberData}
        datum={filteredItems}
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
