import React from "react";
import "./simpleinput.scss";

const SimpleInput = ({ title, placeholder, name, value, onChange, error }) => {
  return (
    <div className="simple-input">
      <div className="label-text">{title}</div>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onChange} 
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SimpleInput;
