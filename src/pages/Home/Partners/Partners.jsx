/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./Partners.scss";
import DataTable from "../../../components/DataTable/DataTable";
import Description from "../Description/Description";
import partner from "../../../assets/images/partner.svg";
import DeleteButton from "../../../components/DeleteButton/DeleteButton";
import SearchBar from "../../../components/SearchBar/SearchBar";
import FilterBtn from "./FilterBtn/FilterBtn";
import ScrollBtn from "../../../components/ScrollBtn/ScrollBtn";
import axios from "axios";
import RatingBtn from "../../../components/RatingBtn/RatingBtn";
import RestoreBtn from "../../../components/RestoreBtn/RestoreBtn";
import Tabs from "./Tabs/Tabs";

const Partners = () => {
  const [currPartnerData, setCurrPartnerData] = useState([]);
  const [pastMemberData, setPastMemberData] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);
  const [ratingUser, setRatingUser] = useState([])

  const currPartnersApi = `https://63f3154dfe3b595e2eda1b4e.mockapi.io/partners`;
  const pastPartnerApi = "https://63f317d9864fb1d6000f18ee.mockapi.io/pastpartners";

  const getCurrPartners = () => {
    axios.get(currPartnersApi).then((response) => {
      setCurrPartnerData(response.data);
    });
  };

  const getPastPartners = () => {
    axios.get(pastPartnerApi).then((response) => {
      setPastMemberData(response.data);
    });
  };

  useEffect(() => {
    getCurrPartners();
    getPastPartners();
  }, []);

  const setTab = (value) => {
    setSelectedTab(value);
    setSelectedIds([]);
  };
  const colCurrentPartners = [
    { title: "Name", value: "name" },
    { title: "Telephone No. 1", value: "telephone1" },
    { title: "Telephone No. 2", value: "telephone2" },
    { title: "Mobile No.", value: "mobile" },
    { title: "Email", value: "email" },
    { title: "Website", value: "website" },
    { title: "Partner Type", value: "partnerType" },
    { title: "PAN No.", value: "pan" },
    { title: "GSTIN No.", value: "gstin" },
    { title: "ARN No.", value: "arn" },
  ];

  const colPastPartners = [
    { title: "Name", value: "name" },
    { title: "Telephone No. 1", value: "telephone1" },
    { title: "Telephone No. 2", value: "telephone2" },
    { title: "Mobile No.", value: "mobile" },
    { title: "Email", value: "email" },
    { title: "Website", value: "website" },
    { title: "Partner Type", value: "partnerType" },
    { title: "PAN No.", value: "pan" },
    { title: "GSTIN No.", value: "gstin" },
    { title: "ARN No.", value: "arn" },
  ];

  return (
    <>
      <div className="upper-content">
        <Description
          icon={partner}
          title="Partners"
          count={currPartnerData.length}
          api={selectedTab == 1 ? currPartnersApi : pastPartnerApi}
          getDataFunc={selectedTab == 1 ? getCurrPartners : getPastPartners}
          addPartners='addPartners'
        />
        <div className="members-tab">
          <Tabs setTab={setTab} selectedTab={selectedTab} />
          <div className="col search-filter">
            {selectedIds.length == 0 ? (
              ""
            ) : (
              <>
                {selectedTab == 2 ? (
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
                    {/* <RatingBtn selectedIds={selectedIds} ratingUser={ratingUser} api={currPartnersApi} getDataFunc={getCurrPartners}/> */}
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
        </div>

        <DataTable
          columns={selectedTab == 1 ? colCurrentPartners : colPastPartners}
          datum={selectedTab == 1 ? currPartnerData : pastMemberData}
          selectedIds={selectedIds}
          api={selectedTab == 1 ? currPartnersApi : pastPartnerApi}
          api2={selectedTab == 1 ? pastPartnerApi : currPartnersApi}
          getDataFunc={selectedTab == 1 ? getCurrPartners : getPastPartners}
          getDataFunc2={selectedTab == 1 ? getPastPartners : getCurrPartners}
          delActive={selectedTab == 1 ? true : false}
          resActive={selectedTab != 1 ? true : false}
          ratings={selectedTab == 1 ? true : false}
          setSelectedIds={setSelectedIds}
          setRatingUser={setRatingUser}
          ratingUser={ratingUser}
        />

        <ScrollBtn />
      </div>
    </>
  );
};

export default Partners;

