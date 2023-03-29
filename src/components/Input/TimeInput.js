import React from "react";

function TimeInput({ value, onChange, disabled }) {
  return (
    <input
      className=" input-container time-only-input"
      type="time"
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
}

export default TimeInput;
