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
  dataLength,
  next,
  hasMore,
}) => {

  return (
    <div>
      <DataTable
        columns={colCurrentMembers}
        datum={currMemberData}
        // datum={filteredItems}
        selectedIds={selectedIds}
        api={currMemberApi}
        api2={pastMemberApi}
        getDataFunc={getCurrMembers}
        // getDataFunc2={getPastMembers}
        setSelectedIds={setSelectedIds}
        teamMembers={true}
        ratings={true}
        delActive={true}
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
      />
    </div>
  );
};

export default CurrentMembers;
