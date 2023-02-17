import React from "react";
import restore from "../../assets/images/restore.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import "./RestoreBtn.scss";

const RestoreBtn = ({
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
      <div
        className="buttons"
        onClick={() =>
          Util.restorePastMembers(
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
        <span className="restore-button">
          <span>
            <img src={restore} alt="" />
          </span>
          <span className="name">Restore</span>
        </span>
      </div>
    </>
  );
};

export default RestoreBtn;
