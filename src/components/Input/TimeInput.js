import React from "react";

function TimeInput({ value, onChange }) {
  return (
    <input
      className=" input-container time-only-input"
      type="time"
      value={value}
      onChange={onChange}
    />
  );
}

export default TimeInput;
