import React from "react";
import { amPm, hour, minutes } from "./data";
import { Form } from "react-bootstrap";

function TimeInput({ value, onChange, disabled, index, label }) {
  const hourValue = value?.split(":")?.shift() ?? "09";
  const minutesValue = value?.split(":")?.pop().split(" ").shift() ?? "30";
  const amPmValue = value.split(" ").pop() ?? "am";

  return (
    <div className="time-select-container d-flex">
      <Form.Select
        disabled={disabled}
        className="hour-select"
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
      </Form.Select>

      <Form.Select
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value, index, label, "minutes");
        }}
        value={minutesValue}
        className="hour-select minute-input"
      >
        {minutes.map((item) => {
          return (
            <option key={`minutes-${item.value}`} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </Form.Select>

      <Form.Select
        disabled={disabled}
        value={amPmValue}
        className="hour-select"
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
      </Form.Select>
    </div>
  );
}

export default TimeInput;
