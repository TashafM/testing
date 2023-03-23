import React from "react";
import DataTable from "../../../../components/DataTable/DataTable";
import { API } from "../../../../helper/API";
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
  dataLength,
  next,
  hasMore,
}) => {
  return (
    <div>
      <DataTable
        columns={colPastMembers}
        datum={pastMemberData}
        // datum={filteredItems2}
        selectedIds={selectedIds}
        api={pastMemberApi}
        restoreApi={API.RESTORE_TEAM_MEMBERS}
        api2={currMemberApi}
        getDataFunc={getPastMembers}
        getDataFunc2={getCurrentMembers}
        setSelectedIds={setSelectedIds}
        teamMembers={true}
        resActive={true}
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
      />
    </div>
  );
};

export default PastMembers;
