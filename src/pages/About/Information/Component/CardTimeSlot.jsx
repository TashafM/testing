import React from "react";
import Switch from "../../../../components/Input/Switch";
import TimeInput from "../../../../components/Input/TimeInput";

function CardTimeSlot({
  title,
  active,
  startTime,
  endTime,
  onChange,
  index,
  disabled,
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
          disabled={disabled}
          index={index}
          label="startTime"
          onChange={onTimeChange}
        />
        <span className="to-text-container">To</span>
        <TimeInput
          value={endTime}
          disabled={disabled}
          index={index}
          label="endTime"
          onChange={onTimeChange}
        />
      </div>
    </div>
  );
}

export default CardTimeSlot;
