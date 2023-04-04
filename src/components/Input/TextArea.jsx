import React from "react";
import "./Input.scss";

function TextArea({
  value,
  onChange,
  name,
  error,
  label,
  rows = 10,
  placeholder,
  ...rest
}) {
  return (
    <>
      {label && <p className="input-lable">{label}</p>}
      <textarea
        name={name}
        className="text-area-cont"
        onChange={(e) => onChange(e)}
        rows={rows}
        cols="50"
        placeholder={placeholder}
        {...rest}
      >
        {value}
      </textarea>
      {error && (
        <p className="mb-5" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </>
  );
}

export default TextArea;
