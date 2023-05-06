import { Outlet } from "react-router-dom";
import UnderLineTabs from "../../components/Tabs/UnderLineTabs";
import { useResponse } from "../../hooks/useResponse";
import "./About.scss";
import { AboutTabs } from "./data/data";
import Description from "./Description/Description";
import { getLocalStorageData } from "../../components/Utils/Utils";

function About() {
  const {
    data: aboutData,
    setData,
    loading,
    error,
  } = useResponse("/portalViewCompanyAboutUsInfo");

  const userData = getLocalStorageData("userData");

  if (error.error) {
    return (
      <div className="upper-content about-sectio">
        <div>{error.message}</div>{" "}
      </div>
    );
  }

  return (
    <div className="upper-content about-sectio">
      <div className="about-wrapper">
        <Description userData={userData} />
        <UnderLineTabs tabs={AboutTabs} />
        <div className="tabs-container-section">
          <Outlet context={[aboutData, setData, loading]} />
        </div>
      </div>
    </div>
  );
}

export default About;
