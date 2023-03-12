import React from "react";
import { useField } from "formik";

function File({
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
        type="file"
        name={name}
        id="upload"
        className="input-file-container"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* <div  className="input-file-container" for="upload"></div> */}
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default File;
