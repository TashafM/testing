import React from "react";
import RestoreDeleteBtn from "../../pages/Home/Partners/RestoreDeleteBtn/RestoreDeleteBtn";
import { teamMembersTab } from "../../pages/Home/TeamMembers/data/data";
import UnderLineTabs from "../Tabs/UnderLineTabs";

const CheckComp = () => {
  return (
    <div>
      <UnderLineTabs tabs={teamMembersTab} />
    </div>
  );
};

export default CheckComp;
