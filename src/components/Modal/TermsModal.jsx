import React, { useState } from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import cross from "../../assets/images/cross.png";
import BtnTitleCenter from "../Button/BtnTitleCenter";
import TextInput from "../Input/TextInput";
import TextArea from "../Input/TextArea";
import BtnTitleIcon from "../Button/BtnTitleIcon";

function TermsModal({
  data = [],
  emptydata,
  show,
  close,
  title,
  children,
  editSaveCallback,
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
            <p>{type}</p>
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
          {Data.map((item, index) => {
            return (
              <div key={`privacy-item-${index}`} style={{}}>
                <TextInput
                  placeholder={"privacy title"}
                  value={item.question}
                  onChange={(e) =>
                    onChanContent(e.target.value, index, "question")
                  }
                />

                <TextArea
                  value={item.answer}
                  onChange={(e) =>
                    onChanContent(e.target.value, index, "answer")
                  }
                />
              </div>
            );
          })}

          <div className="default-height d-flex align-items-center justify-content-center">
            <BtnTitleIcon
              title="Add more topics"
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

export default TermsModal;
