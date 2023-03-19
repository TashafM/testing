import React from "react";
import "./Button.scss";

function BtnTitleCenter({
  title,
  onClick = () => {},
  type = "submit",
  smallbutton,
  disabled = false,
}) {
  let newstyle = smallbutton ? "btnsmall" : "btn-title-center";

  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        className={newstyle}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default BtnTitleCenter;
