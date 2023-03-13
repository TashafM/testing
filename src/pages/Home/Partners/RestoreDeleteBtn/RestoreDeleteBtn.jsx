import React from "react";
import DeleteButton from "../../../../components/DeleteButton/DeleteButton";
import RestoreBtn from "../../../../components/RestoreBtn/RestoreBtn";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import UnderLineTabs from "../../../../components/Tabs/UnderLineTabs";
import FilterBtn from "../FilterBtn/FilterBtn";
import { partnersTab } from "../../TeamMembers/data/data";
import { useLocation } from "react-router-dom";

const RestoreDeleteBtn = ({
  selectedIds,
  pastMemberData,
  pastPartnerApi,
  currPartnersApi,
  getCurrPartners,
  getPastPartners,
  setSelectedIds,
  currPartnerData,
}) => {

  const location = useLocation()
  // console.log(location)
  return (
    <>
      <UnderLineTabs tabs={partnersTab} />
      <div className="col search-filter onlyDesktop">
        {selectedIds.length == 0 ? (
          ""
        ) : (
          <>
            {location.pathname == '/home/partners/past-partners' ? (
              <RestoreBtn
                selectedIds={selectedIds}
                data={pastMemberData}
                apiTo={pastPartnerApi}
                apiFrom={currPartnersApi}
                func1={getCurrPartners}
                func2={getPastPartners}
                setSelectedIds={setSelectedIds}
              />
            ) : (
              <>
                <DeleteButton
                  selectedIds={selectedIds}
                  data={currPartnerData}
                  apiTo={currPartnersApi}
                  apiFrom={pastPartnerApi}
                  func1={getCurrPartners}
                  func2={getPastPartners}
                  setSelectedIds={setSelectedIds}
                />
              </>
            )}
          </>
        )}
        <SearchBar />
        <FilterBtn />
      </div>
    </>
  );
};

export default RestoreDeleteBtn;
