import React from "react";
import deleteBtn from "../../assets/images/delete.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import "./DeleteButton.scss";
import { GlobalContext } from "../../App";
import { useContext } from "react";

const DeleteButton = ({
  selectedIds,
  data,
  apiTo,
  apiFrom,
  func1,
  func2,
  setSelectedIds,
  setPastData,
  setData,
  pastData,
}) => {
  const {setLoading, setMsg} = useContext(GlobalContext)

  const myUtil = new Util()
  return (
    <>
      <div className="buttons">
        <span
          className="del-button"
          onClick={() =>
            myUtil.deleteSelectedItems(
              selectedIds,
              func1,
              setSelectedIds,
              setLoading,
              setMsg,
              data,
              setData,
              pastData,
              setPastData
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
