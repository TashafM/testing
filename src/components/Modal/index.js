import React, { useState } from "react";
import "./index.scss";
import { Modal } from "react-bootstrap";
import cross from "../../assets/images/cross.png";
import deleteIcon from "../../assets/images/delete.png";

import BtnTitleCenter from "../Button/BtnTitleCenter";
import TextInput from "../Input/TextInput";
import TextArea from "../Input/TextArea";
import BtnTitleIcon from "../Button/BtnTitleIcon";
import BtnIconOnly from "../Button/BtnIconOnly";

function ModalComponent({
  data = [],
  emptydata,
  show,
  close,
  title,
  editSaveCallback,
  btnTitle,
  loading,
  type,
}) {
  const [Data, setData] = useState(JSON.parse(JSON.stringify(data)) ?? []);

  const [makeApiCall, setMakeApiCall] = useState(false);
  const empty = emptydata;
  const onChanContent = (value, index, key) => {
    const arr = [...Data];
    arr[index][key] = value;
    setData([...arr]);
  };

  const onSaveData = () => {
    if (makeApiCall) {
      editSaveCallback([...Data]);
      close();
    } else {
      close();
    }
  };

  const onDelete = (index) => {
    const data = JSON.parse(JSON.stringify(Data));
    data.splice(index, 1);
    setData(data);
  };

  console.log("faqData", Data);

  return (
    <div>
      <Modal
        size="xl"
        show={show}
        onHide={close}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-content-container"
      >
        <Modal.Body className=" scrollbody">
          <div className="d-flex justify-content-between align-items-center modal-header-faq ">
            <p className="modal-title">{title}</p>
            <div className="d-flex justify-content-center btn-save-container  align-items-center me-2">
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
          {Data.map((item, index) => {
            return (
              <div
                key={`privacy-item-${index}`}
                style={{}}
                className="text-input-faq"
              >
                <div className="privacy-title-container d-flex align-items-center">
                  <TextInput
                    placeholder={"type here..."}
                    value={type === "FAQ" ? item.question : item.title}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      const key = type === "FAQ" ? "question" : "title";
                      onChanContent(e.target.value, index, key);
                    }}
                  />
                  <BtnIconOnly
                    icon={deleteIcon}
                    onClick={() => {
                      onDelete(index);
                    }}
                  />
                </div>

                <div className="privacy-description-container">
                  <TextArea
                    rows={6}
                    placeholder={"type here..."}
                    value={type === "FAQ" ? item.answer : item.content}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      const key = type === "FAQ" ? "answer" : "content";
                      onChanContent(e.target.value, index, key);
                    }}
                  />
                </div>
              </div>
            );
          })}

          <div className="default-height d-flex align-items-center justify-content-center btn-add-more">
            <BtnTitleIcon
              title={btnTitle}
              onClick={() => {
                const arr = [...Data];
                arr.push({ ...empty });
                setData([...arr]);
              }}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;
