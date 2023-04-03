import React from "react";
import { amPm, hour, minutes } from "./data";

function TimeInput({ value, onChange, disabled, index, label }) {
  // const [value, onChange] = useState('10:00');

  const hourValue = value?.split(":")?.shift() ?? "09";
  const minutesValue = value?.split(":")?.pop().split(" ").shift() ?? "30";
  const amPmValue = value.split(" ").pop() ?? "am";

  return (
    <div className="time-select-container">
      <select
        disabled={disabled}
        value={hourValue}
        onChange={(e) => {
          onChange(e.target.value, index, label, "hour");
        }}
      >
        {hour.map((item) => {
          return (
            <option key={`hour-${item.value}`} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </select>

      <select
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value, index, label, "minutes");
        }}
        value={minutesValue}
        className="minute-input"
      >
        {minutes.map((item) => {
          return (
            <option key={`minutes-${item.value}`} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </select>

      <select
        disabled={disabled}
        value={amPmValue}
        onChange={(e) => {
          onChange(e.target.value, index, label, "ampm");
        }}
      >
        {amPm.map((item) => {
          return (
            <option key={`amPm-${item.value}`} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TimeInput;
