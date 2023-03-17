import React from "react";
import DeleteButton from "../../../../components/DeleteButton/DeleteButton";
import RestoreBtn from "../../../../components/RestoreBtn/RestoreBtn";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import UnderLineTabs from "../../../../components/Tabs/UnderLineTabs";
import FilterBtn from "../FilterBtn/FilterBtn";
import { teamMembersTab } from "../data/data";
import { useLocation } from "react-router-dom";

const RestoreDeleteBtn = ({
  selectedIds,
  pastMemberData,
  pastMemberApi,
  currMemberApi,
  getCurrMembers,
  getPastMembers,
  setSelectedIds,
  currMemberData,
  handleSearch,
  handleSearch2,
}) => {
  const location = useLocation();
  const currentPath = "/home/team-members/current-members";
  const pastPath = "/home/team-members/past-members";

  return (
    <>
      {/* <UnderLineTabs tabs={teamMembersTab} /> */}
      <div className="col search-filter ">
      <div className="col-separate">
        {selectedIds.length == 0 ? (
          ""
        ) : (
          <>
            {location.pathname == pastPath ? (
              <RestoreBtn
                selectedIds={selectedIds}
                data={pastMemberData}
                apiTo={pastMemberApi}
                apiFrom={currMemberApi}
                func1={getCurrMembers}
                func2={getPastMembers}
                setSelectedIds={setSelectedIds}
              />
            ) : (
              <>
                <DeleteButton
                  selectedIds={selectedIds}
                  data={currMemberData}
                  apiTo={currMemberApi}
                  apiFrom={pastMemberApi}
                  func1={getCurrMembers}
                  func2={getPastMembers}
                  setSelectedIds={setSelectedIds}
                />
              </>
            )}
          </>
        )}

        {/* <div> */}
          {location.pathname === currentPath && (
            <SearchBar handleSearch={handleSearch} />
          )}
          {location.pathname === pastPath && (
            <SearchBar handleSearch={handleSearch2} />
          )}
          </div>
          <FilterBtn />
        {/* </div> */}
      </div>
    </>
  );
};

export default RestoreDeleteBtn;
