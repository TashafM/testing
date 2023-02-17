import React from "react";
import deleteBtn from "../../assets/images/delete.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import "./DeleteButton.scss";

const DeleteButton = ({
  selectedIds,
  data,
  apiTo,
  apiFrom,
  func1,
  func2,
  setSelectedIds,
}) => {
  return (
    <>
      <div className="buttons">
        <span
          className="del-button"
          onClick={() =>
            Util.deleteSelectedItems(
              selectedIds,
              data,
              apiTo,
              apiFrom,
              func1,
              func2,
              setSelectedIds
            )
          }
        >
          <span>
            <img src={deleteBtn} alt="" />
          </span>
          <span className="name">Delete</span>
        </span>
      </div>
    </>
  );
};

export default DeleteButton;
