import React, { useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextArea from "../../../../components/Input/TextArea";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
import "./styles.scss";
import { Offcanvas } from "react-bootstrap";

function EditStatement({ show, handleClose, data, onUpdate, completeData }) {
  const [statement, setStatement] = useState(data ?? "");
  const [postData, { loading }] = usePostAsyncResponse(
    "/portalPostCompanyStatement"
  );

  const onSaveStatement = () => {
    const body = {
      companyStatement: statement,
    };

    postData(body, (res) => {
      const arr = JSON.parse(JSON.stringify(completeData));
      arr[0].companyStatement = res[0].companyStatement;
      console.log({ arr });
      onUpdate(arr);
      handleClose();
    });
  };
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="team-member-add">Statement</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <p className="drawer-title">
              Write down the Statement of the Company to convey your vision to
              your Potential Customer
            </p>

            <TextArea
              value={statement}
              onChange={(e) => {
                console.log(e.target.value);
                setStatement(e.target.value);
              }}
            />
            <BtnTitleCenter
              title="Save"
              type="button"
              loading={loading}
              onClick={onSaveStatement}
            />
          </div>
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  );
}

export default EditStatement;
