import { Outlet } from "react-router-dom";
import UnderLineTabs from "../../components/Tabs/UnderLineTabs";
import { useResponse } from "../../hooks/useResponse";
import "./About.scss";
import { AboutTabs } from "./data/data";
import Description from "./Description/Description";

function About() {
  const {
    data: aboutData,
    loading,
    error,
  } = useResponse("/portalViewCompanyAboutUsInfo");

  if (loading) {
    return <div>loading</div>;
  }

  if (error.error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="upper-content">
      <div className="about-wrapper">
        <Description />
        <UnderLineTabs tabs={AboutTabs} />
        <div className="tabs-container-section">
          <Outlet context={[aboutData]} />
        </div>
      </div>
    </div>
  );
}

export default About;
