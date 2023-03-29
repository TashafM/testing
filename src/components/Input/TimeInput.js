import React from "react";
import TimePicker from "react-time-picker";

function TimeInput({ value, onChange, disabled }) {
  // const [value, onChange] = useState('10:00');

  return (
    <TimePicker
      clearIcon={false}
      clockIcon={false}
      disableClock={true}
      onChange={(e, ampm) => onChange(e, ampm)}
      value={value}
      format="hh:mm aa"
      amPmAriaLabel="Select am/pm"
      disabled={disabled}
    />
  );
}

export default TimeInput;
