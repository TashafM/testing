import React from "react";
import { Button } from "react-bootstrap";

const DeleteBrand = ({
  msg,
  cancelFunction,
  showNow,
  confirmFunction,
  cancelBtn,
  actionBtn,
  item,
  location,
  onClick,
  onDelete,
  index,
}) => {
  return (
    <>
      {showNow && (
        <div>
          <div className="confirm-overlay"></div>
          <div className="confirm-box">
            {msg}
            <div className="popup-btn">
              <Button className="cancel" onClick={cancelFunction}>
                Confirm
              </Button>
              <Button className="action" onClick={() => onDelete(item, index)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBrand;
