import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UnderLineTabs from "../../components/Tabs/UnderLineTabs";
import { Helper } from "../../helper/helper";
import "./About.scss";
import { AboutTabs } from "./data/data";
import Description from "./Description/Description";

function About() {
  const [selectedTab, selectTab] = useState(1);

  const obj = new Helper();

  obj.sayHello();
  return (
    <div className="upper-content">
      <div className="about-wrapper">
        <Description />
        <UnderLineTabs tabs={AboutTabs} />
        <div className="tabs-container-section">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default About;
