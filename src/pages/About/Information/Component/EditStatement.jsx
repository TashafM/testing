import React, { useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextArea from "../../../../components/Input/TextArea";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
import "./styles.scss";
import { Offcanvas } from "react-bootstrap";
import DrawerHead from "./DrawerHead";

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
        <DrawerHead
          title="Statement"
          handleClose={handleClose}
          description=" Write down the Statement of the Company to convey your vision to
          your Potential Customer"
        />
        {/* <Offcanvas.Header closeButton>
         <Offcanvas.Title>
            <div className="team-member-add">Statement</div>
          </Offcanvas.Title>
        </Offcanvas.Header>  */}
        <div>
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
      </div>
    </Offcanvas>
  );
}

export default EditStatement;
