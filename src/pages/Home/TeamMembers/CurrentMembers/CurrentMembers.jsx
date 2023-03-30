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
  setData,
  dataLength,
  next,
  hasMore,
  setPastData,
  pastData,
}) => {
  return (
    <div>
      <DataTable
        columns={colCurrentMembers}
        datum={currMemberData}
        setData={setData}
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
        setPastData={setPastData}
        pastData={pastData}
      />
    </div>
  );
};

export default CurrentMembers;
