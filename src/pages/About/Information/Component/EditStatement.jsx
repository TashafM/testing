import React, { useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextArea from "../../../../components/Input/TextArea";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
import "./styles.scss";
import { Offcanvas } from "react-bootstrap";
import DrawerHead from "./DrawerHead";
import { toast } from "react-toastify";
import { SUCCESS_MESSAGES } from "../../../../helper/messages";

function EditStatement({ show, handleClose, data, onUpdate, completeData }) {
  const [statement, setStatement] = useState(data ?? "");
  const [makeApiCall, setMakeApiCall] = useState(false);
  const [postData, { loading }] = usePostAsyncResponse(
    "/portalPostCompanyStatement"
  );

  const onSaveStatement = () => {
    const body = {
      companyStatement: statement?.trim(),
    };

    if (makeApiCall) {
      postData(body, (res) => {
        const arr = JSON.parse(JSON.stringify(completeData));
        arr[0].companyStatement = res[0].companyStatement;
        console.log({ arr });
        onUpdate(arr);
        handleClose();
        toast.success(SUCCESS_MESSAGES.STAEMENT);
      });
    } else {
      handleClose();
    }
  };
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content content-height">
        <DrawerHead
          title="Statement"
          handleClose={handleClose}
          description=" Write down the Statement of the Company to convey your vision to
          your Potential Customer"
        />
        <div>
          <TextArea
            value={statement}
            onChange={(e) => {
              !makeApiCall && setMakeApiCall(true);
              setStatement(e.target.value);
            }}
          />

          <div className="btn-align-bottom">
            <BtnTitleCenter
              title="Save"
              type="button"
              loading={loading}
              disabled={loading}
              onClick={onSaveStatement}
            />
          </div>
        </div>
      </div>
    </Offcanvas>
  );
}

export default EditStatement;
