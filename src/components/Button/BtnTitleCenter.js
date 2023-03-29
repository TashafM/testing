import { CircularProgress } from "@mui/material";
import React from "react";
import "./Button.scss";

function BtnTitleCenter({
  title,
  onClick = () => {},
  type = "submit",
  smallbutton,
  disabled = false,
  loading = false,
  className = "",
}) {
  let newstyle = (smallbutton ? "btnsmall " : "btn-title-center ") + className;

  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        className={newstyle}
        onClick={onClick}
      >
        {loading ? (
          <CircularProgress color="inherit" size={20} />
        ) : (
          <>{title}</>
        )}
      </button>
    </div>
  );
}

export default BtnTitleCenter;
