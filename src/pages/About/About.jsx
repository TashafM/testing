import { Outlet } from "react-router-dom";
import UnderLineTabs from "../../components/Tabs/UnderLineTabs";
import { useResponse } from "../../hooks/useResponse";
import "./About.scss";
import { AboutTabs } from "./data/data";
import Description from "./Description/Description";

function About() {
  const {
    data: aboutData,
    setData,
    loading,
    error,
  } = useResponse("/portalViewCompanyAboutUsInfo");

  if (loading) {
    return (
      <div className="upper-content about-sectio">
        <div>loading</div>
      </div>
    );
  }

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
        <Description />
        <UnderLineTabs tabs={AboutTabs} />
        <div className="tabs-container-section">
          <Outlet context={[aboutData, setData]} />
        </div>
      </div>
    </div>
  );
}

export default About;
