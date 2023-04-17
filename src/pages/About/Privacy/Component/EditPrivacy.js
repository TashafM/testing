import React, { useState } from "react";
import TextInput from "../../../../components/Input/TextInput";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import BtnTitleIcon from "../../../../components/Button/BtnTitleIcon";
import TextArea from "../../../../components/Input/TextArea";
import cross from "../../../../assets/images/cross.png";
import { Modal } from "react-bootstrap";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
// import BtnTitleCenter from "../Button/BtnTitleCenter";

function EditPrivacy({ data = [], show, close, editSaveCallback }) {
  const [privacyData, setPrivacyData] = useState(
    JSON.parse(JSON.stringify(data)) ?? []
  );
  const empty = { title: "", content: "" };

  const [postData, { loading, error }] = usePostAsyncResponse(
    "/portalPostCompanyPrivacyPolicy"
  );

  const onChanContent = (value, index, key) => {
    const arr = [...privacyData];
    arr[index][key] = value;
    setPrivacyData([...arr]);
  };

  const onSaveData = () => {
    const body = {
      privacyPolicy: [...privacyData],
    };

    postData(body, () => {
      close();
      editSaveCallback([...privacyData]);
    });
  };

  // console.log("jfhkj",privacyData)
  return (
    <Modal
      size="xl"
      show={show}
      onHide={close}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-content-container"
    >
      <Modal.Body className="scrollbody">
        <div className="d-flex justify-content-between align-items-center modal-header-faq ">
          <p className="modal-title">Privacy Policy</p>
          <div className="d-flex justify-content-center align-items-center btn-save-container me-2">
            <BtnTitleCenter
              loading={loading}
              disabled={loading}
              onClick={onSaveData}
              title="Save"
            />
            <img
              src={cross}
              alt="icon-cross"
              onClick={() => close()}
              className="crossCloseButton ms-5"
            />
          </div>
        </div>
        {privacyData.map((item, index) => {
          return (
            <div
              key={`privacy-item-${index}`}
              style={{}}
              className="text-input-privacy"
            >
              <div className="privay-title-container">
                <TextInput
                  placeholder={"privacy title"}
                  value={item.title}
                  onChange={(e) =>
                    onChanContent(e.target.value, index, "title")
                  }
                />
              </div>

              <div className="privacy-value-description">
                <TextArea
                  value={item.content}
                  rows={6}
                  onChange={(e) =>
                    onChanContent(e.target.value, index, "content")
                  }
                />
              </div>
            </div>
          );
        })}

        <div className="default-height d-flex align-items-center justify-content-center btn-add-more">
          <BtnTitleIcon
            title="Add more topics"
            onClick={() => {
              const arr = [...privacyData];
              arr.push({ ...empty });
              setPrivacyData([...arr]);
            }}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditPrivacy;
