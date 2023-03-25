import React, { Fragment, useState } from "react";
import TextInput from "../../../../components/Input/TextInput";
import EditorInput from "../../../../components/Input/EditorInput";
import { faqData } from "../../data/data";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import BtnTitleIcon from "../../../../components/Button/BtnTitleIcon";
import TextArea from "../../../../components/Input/TextArea";
import cross from "../../../../assets/images/cross.png";
import { Modal } from "react-bootstrap";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
// import BtnTitleCenter from "../Button/BtnTitleCenter";

function EditPrivacy({ data = [], show, close }) {
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

    postData(body);
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={close}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-content-container"
    >
      <Modal.Body className="modalbody">
        <div className="d-flex justify-content-between  pb-3">
          <p>Privacy Policy</p>
          <div className="d-flex justify-content-center align-items-center">
            <BtnTitleCenter onClick={onSaveData} title="Save" />
            <img
              src={cross}
              alt="icon-cross"
              onClick={() => close()}
              className="crossCloseButton"
            />
          </div>
        </div>
        {privacyData.map((item, index) => {
          return (
            <div key={`privacy-item-${index}`} style={{}}>
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

        <div className="default-height d-flex align-items-center justify-content-center">
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
