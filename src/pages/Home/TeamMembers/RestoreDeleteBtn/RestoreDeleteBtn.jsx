import React from "react";
import DeleteButton from "../../../../components/DeleteButton/DeleteButton";
import RestoreBtn from "../../../../components/RestoreBtn/RestoreBtn";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import UnderLineTabs from "../../../../components/Tabs/UnderLineTabs";
import FilterBtn from "../FilterBtn/FilterBtn";
import { teamMembersTab } from "../data/data";
import { useLocation } from "react-router-dom";
import rDisable from "../../../../assets/images/rDisable.svg";
import rEnable from "../../../../assets/images/rEnable.svg";
import "./RestoreDeleteBtn.scss";
import { API } from "../../../../helper/API";
import Util from "../../../../components/UtilityFunctions/UtilityFunctions";
import { useContext } from "react";
import { GlobalContext } from "../../../../App";

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
  setData,
  pastData,
  setPastData,
}) => {
  const location = useLocation();
  const {setMsg, setLoading} = useContext(GlobalContext)
  const currentPath = "/home/team-members/current-members";
  const pastPath = "/home/team-members/past-members";

  const global = new Util();

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
                  api={API.RESTORE_TEAM_MEMBERS}
                  data={pastData}
                  apiTo={pastMemberApi}
                  apiFrom={currMemberApi}
                  // func1={getCurrMembers}
                  func={getPastMembers}
                  setSelectedIds={setSelectedIds}
                  setData={setPastData}
                  setPastData={setData}
                  pastData={currMemberData}
                />
              ) : (
                <>
                  <div className="ratings-div">
                    <span className="rating-icon">
                      <img
                        src={rDisable}
                        alt=""
                        onClick={()=>global.multipleRatingsDisable(
                          selectedIds,
                          setSelectedIds,
                          setMsg,
                          setLoading,
                          currMemberData,
                          setData,
                        )}
                      />
                    </span>
                    <span className="rating-icon">
                      <img
                        src={rEnable}
                        alt=""
                        onClick={()=>global.multipleRatingsEnable(
                          selectedIds,
                          setSelectedIds,
                          setMsg,
                          setLoading,
                          currMemberData,
                          setData,
                        )}
                      />
                    </span>
                  </div>
                  <DeleteButton
                    selectedIds={selectedIds}
                    data={currMemberData}
                    apiTo={currMemberApi}
                    apiFrom={pastMemberApi}
                    func1={getCurrMembers}
                    // func2={getPastMembers}
                    setSelectedIds={setSelectedIds}
                    setData={setData}
                    setPastData={setPastData}
                    pastData={pastData}
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
