import React, { Fragment, useState } from "react";
import "./FAQ.scss";
import Collapsible from "../../../components/Collapsible/Collapsible";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import ModalComponent from "../../../components/Modal";

import { useResponse } from "../../../hooks/useResponse";
import { usePostAsyncResponse } from "../../../hooks/usePostAsyncResponse";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { SUCCESS_MESSAGES } from "../../../helper/messages";

function FAQ() {
  const [showModal, setShowModal] = useState(false);
  // const { data, loading, error } = useResponse();

  const { data, setData, loading } = useResponse("/portalViewCompanyFaqs");

  const [postData, { error, loading: loadingFaq }] = usePostAsyncResponse(
    "/portalPostCompanyFaqs"
  );

  const HandleOpenModal = () => {
    setShowModal(true);
  };

  const editSaveCallback = (data) => {
    console.log("shdj", data);
    const arr = [];
    data?.map((ele) => {
      arr.push({ question: ele?.question, answer: ele?.answer });
    });
    const body = {
      faqs: arr,
    };

    postData(body, () => {
      setShowModal(false);
      setData(data);
      toast.success(SUCCESS_MESSAGES.EDIT_FAQ);
    });
  };

  if (loading) {
    return (
      <div className=" loading-screen default-height d-flex align-items-center justify-content-center">
        <CircularProgress size={24} />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="d-flex faq-title">
        Frequently Asked Questions <BtnIconOnly onClick={HandleOpenModal} />
      </div>
      {data.length ? (
        <div>
          {data.map((item, index) => {
            return (
              <Collapsible
                key={index}
                title={item.question}
                description={item.answer}
                eventKey={index.toString()}
              />
            );
          })}
        </div>
      ) : (
        <div className="default-height d-flex align-items-center justify-content-center">
          <p className="terms-title empty-screen-text">
            No frequently asked questions added yet.
          </p>
        </div>
      )}
      {showModal && (
        <ModalComponent
          title="Frequently Asked Questions"
          show={showModal}
          close={() => setShowModal(false)}
          data={data}
          editSaveCallback={editSaveCallback}
          type={"FAQ"}
          btnTitle="Add more"
          emptyadta={{ question: "", answer: "" }}
          loading={loadingFaq}
        />
      )}
    </Fragment>
  );
}

export default FAQ;
