import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import restore from "../../assets/images/restore.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import "./RestoreBtn.scss";

const RestoreBtn = ({
  selectedIds,
  data,
  apiTo,
  apiFrom,
  func1,
  func,
  setSelectedIds,
  setPastData,
  setData,
  pastData,
  api,
}) => {
  const myUtil = new Util()
  const {setLoading, setMsg} = useContext(GlobalContext)
  return (
    <>
      <div
        className="buttons"
        onClick={() =>
          myUtil.restorePastMembers(
            selectedIds,
              func1,
              setSelectedIds,
              setLoading,
              setMsg,
              data,
              setData,
              pastData,
              setPastData,
              api
           
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
