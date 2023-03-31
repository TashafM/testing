import React from "react";
import { Button } from "react-bootstrap";

const ConfirmBox = ({
  msg,
  cancelFunction,
  showNow,
  confirmFunction,
  cancelBtn,
  actionBtn,
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
                {cancelBtn}
              </Button>
              <Button className="action" onClick={confirmFunction}>
                {actionBtn}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmBox;
