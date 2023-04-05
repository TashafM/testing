import React from "react";
import "./simpleinput.scss";

const SimpleInput = ({title, placeholder}) => {
  return (
    <div className="simple-input">
        <div className="label-text">{title}</div>
        <input type="text" placeholder={placeholder}/>
    </div>
  );
};

export default SimpleInput;
