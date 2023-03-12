import React from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import Checkbox from "../../../../components/Input/Checkbox";
import Switch from "../../../../components/Input/Switch";
import { timeSlotData } from "../../data/data.js";
import CardTimeSlot from "./CardTimeSlot";

function EditOperations() {
  return (
    <div>
      <p className="drawer-title">Please provide the hours of operations</p>
      <div>
        <div className="d-flex">
          <Checkbox />
          <span className="apply-all-checked">Apply same timings to all</span>
        </div>

        {timeSlotData.map(({ day, active }) => {
          return <CardTimeSlot title={day} active={active} />;
        })}
      </div>

      <BtnTitleCenter title={"SAVE"} onClick={() => {}} />
    </div>
  );
}

export default EditOperations;
