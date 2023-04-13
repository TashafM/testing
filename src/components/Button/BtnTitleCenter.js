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
  ...rest
}) {
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        className={
          !disabled
            ? "btn-title-center"
            : " btn-title-center btn-disbaled-opacity "
        }
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
