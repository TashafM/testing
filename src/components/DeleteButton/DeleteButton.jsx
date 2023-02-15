import React from "react";
import deleteBtn from '../../assets/images/delete.svg'
import './DeleteButton.scss'

const DeleteButton = ({selectedIds, deleteSelectedItems}) => {


  return (
    <>
      <div className="buttons">
        <span className="del-button" onClick={deleteSelectedItems} disabled={selectedIds.length === 0}>
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
