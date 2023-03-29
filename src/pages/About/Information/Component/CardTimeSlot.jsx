import React, { useState } from "react";
import Switch from "../../../../components/Input/Switch";
import TimeInput from "../../../../components/Input/TimeInput";

function CardTimeSlot({
  title,
  active,
  startTime,
  endTime,
  onChange,
  index,
  onTimeChange,
}) {
  return (
    <div className="card-slots-container align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Switch value={active} onChange={() => onChange(index)} />
        <span className="card-day cardspace">{title}</span>
      </div>

      <div className="d-flex align-items-center">
        <TimeInput
          value={startTime}
          disabled={!active}
          onChange={(e, ampm) => {
            console.log({ ampm });
            onTimeChange(e, index, "startTime");
          }}
        />
        <span>To</span>
        <TimeInput
          value={endTime}
          disabled={!active}
          onChange={(e) => {
            onTimeChange(e, index, "endTime");
          }}
        />
      </div>
    </div>
  );
}

export default CardTimeSlot;
