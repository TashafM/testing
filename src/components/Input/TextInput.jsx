import React from "react";
import { useField } from "formik";

function TextInput({
  value,
  onChange,
  label,
  placeholder,
  error = "",
  name,
  ...props
}) {
  // const [ meta] = useField(props);

  return (
    <div>
      {label ? <p className="input-lable">{label}</p> : null}
      <input
        name={name}
        className="input-container"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default TextInput;
