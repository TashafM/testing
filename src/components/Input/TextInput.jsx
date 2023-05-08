import React from "react";
import { useField } from "formik";

function TextInput({
  value,
  onChange,
  label,
  placeholder,
  error = "",
  name,
  required = false,
  ...props
}) {
  // const [ meta] = useField(props);

  return (
    <div className="input-main-container-common">
      {label ? (
        <p className={`input-lable ${required ? "required-field" : ""}`}>
          {label}
        </p>
      ) : null}
      <input
        name={name}
        className="input-container"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default TextInput;
