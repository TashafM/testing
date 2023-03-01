/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./Partners.scss";
import Description from "../Description/Description";
import partner from "../../../assets/images/partner.svg";
import axios from "axios";
import { Outlet, useLocation } from "react-router-dom";
import RestoreDeleteBtn from "./RestoreDeleteBtn/RestoreDeleteBtn";
import CurrentPartners from "./CurrentPartners/CurrentPartners";
import PastPartners from "./PastPartners/PastPartners";

const Partners = () => {
  const [currPartnerData, setCurrPartnerData] = useState([]);
  const [pastMemberData, setPastMemberData] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);
  const [ratingUser, setRatingUser] = useState([]);

  const currPartnersApi = `https://63f3154dfe3b595e2eda1b4e.mockapi.io/partners`;
  const pastPartnerApi =
    "https://63f317d9864fb1d6000f18ee.mockapi.io/pastpartners";
  const currentPartners = "/home/partners/current-partners";
  const pastPartners = "/home/partners/past-partners";

  const location = useLocation();

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
    setSelectedIds([]);
    getCurrPartners();
    getPastPartners();
  }, [location]);

  return (
    <>
      <div className="upper-content">
        <Description
          icon={partner}
          title="Partners"
          count={currPartnerData.length}
          api={selectedTab == 1 ? currPartnersApi : pastPartnerApi}
          getDataFunc={selectedTab == 1 ? getCurrPartners : getPastPartners}
          addPartners="addPartners"
        />
        <div className="members-tab">
          <RestoreDeleteBtn
            selectedIds={selectedIds}
            pastMemberData={pastMemberData}
            pastPartnerApi={pastPartnerApi}
            currPartnersApi={currPartnersApi}
            getCurrPartners={getCurrPartners}
            getPastPartners={getPastPartners}
            setSelectedIds={setSelectedIds}
            currPartnerData={currPartnerData}
          />
        </div>
        <hr style={{ marginTop: "-2%" }} />

        <div>
          {location.pathname == currentPartners && (
            <CurrentPartners
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              currPartnerData={currPartnerData}
              currPartnersApi={currPartnersApi}
              pastPartnerApi={pastPartnerApi}
              getCurrPartners={getCurrPartners}
              getPastPartners={getPastPartners}
            />
          )}
          {location.pathname == pastPartners && (
            <PastPartners
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              pastMemberData={pastMemberData}
              pastPartnerApi={pastPartnerApi}
              currPartnersApi={currPartnersApi}
              getPastPartners={getPastPartners}
              getCurrPartners={getCurrPartners}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Partners;
