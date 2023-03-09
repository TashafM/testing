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
}) => {
  const location = useLocation();
  return (
    <>
      <UnderLineTabs tabs={teamMembersTab} />
      <div className="col search-filter">
        {selectedIds.length == 0 ? (
          ""
        ) : (
          <>
            {location.pathname == "/home/team-members/past-members" ? (
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

        <SearchBar handleSearch={handleSearch} />
        <FilterBtn />
      </div>
    </>
  );
};

export default RestoreDeleteBtn;
