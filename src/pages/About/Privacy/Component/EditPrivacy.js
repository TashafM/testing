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
  const [privacyData, setPrivacyData] = useState(data ?? []);
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
      <Modal.Body className="modalbody">
        <div className="d-flex justify-content-between  pb-3">
          <p className="modal-title">Privacy Policy</p>
          <div className="d-flex justify-content-center align-items-center me-2">
            <BtnTitleCenter onClick={onSaveData} title="Save" />
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
              <TextInput
                placeholder={"privacy title"}
                value={item.title}
                onChange={(e) => onChanContent(e.target.value, index, "title")}
              />

              <TextArea
                value={item.content}
                onChange={(e) =>
                  onChanContent(e.target.value, index, "content")
                }
              />
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
