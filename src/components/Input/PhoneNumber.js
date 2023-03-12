import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Fragment, useState } from "react";

function PhoneNumber({
  // value = "",
  onChange = () => {},
  label = "",
  placeholder = "",
  error = "",
  name = "",
}) {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();
  return (
    <Fragment>
      {label ? <p className="input-lable">{label}</p> : null}
      <PhoneInput
        value={value}
        defaultCountry="IN"
        placeholder={placeholder}
        onChange={setValue}
        name={name}
        containerClass=""
        inputClass="input-container"
        containerStyle={{
          border: "10px solid black",
        }}
        inputStyle={{
          background: "lightblue",
        }}
      />
    </Fragment>
  );
}

export default PhoneNumber;
