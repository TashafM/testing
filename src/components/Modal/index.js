import React, { useState } from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import cross from "../../assets/images/cross.png";
import BtnTitleCenter from "../Button/BtnTitleCenter";
import TextInput from "../Input/TextInput";
import TextArea from "../Input/TextArea";
import BtnTitleIcon from "../Button/BtnTitleIcon";

function ModalComponent({
  data = [],
  emptydata,
  show,
  close,
  title,
  children,
  editSaveCallback,
  btntitle,
  type,
}) {
  const [Data, setData] = useState(data ?? []);
  const empty = emptydata;
  console.log("kjshkj", emptydata);
  const onChanContent = (value, index, key) => {
    const arr = [...Data];
    arr[index][key] = value;
    setData([...arr]);
  };

  const onSaveData = () => {
    editSaveCallback([...Data]);
  };

  console.log("faqData", Data);

  return (
    <div>
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
            <p className="modal-title">{type}</p>
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
          {Data.map((item, index) => {
            return (
              <div
                key={`privacy-item-${index}`}
                style={{}}
                className="text-input-faq"
              >
                <TextInput
                  placeholder={"privacy title"}
                  value={type === "FAQ" ? item.question : item.title}
                  onChange={(e) => {
                    const key = type === "FAQ" ? "question" : "title";
                    onChanContent(e.target.value, index, key);
                  }}
                />

                <TextArea
                  value={type === "FAQ" ? item.answer : item.content}
                  onChange={(e) => {
                    const key = type === "FAQ" ? "answer" : "content";

                    onChanContent(e.target.value, index, key);
                  }}
                />
              </div>
            );
          })}

          <div className="default-height d-flex align-items-center justify-content-center btn-add-more">
            <BtnTitleIcon
              title="Create more FAQ"
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
