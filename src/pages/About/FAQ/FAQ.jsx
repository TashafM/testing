import React, { Fragment, useEffect, useState } from "react";
import "./FAQ.scss";
import { faqData } from "../data/data";
import Collapsible from "../../../components/Collapsible/Collapsible";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import ModalComponent from "../../../components/Modal";
import EditFAQ from "./Component/EditFAQ";
import { Button } from "react-bootstrap";
import { useResponse } from "../../../hooks/useResponse";
import BtnTitleIcon from "../../../components/Button/BtnTitleIcon";
import { usePostAsyncResponse } from "../../../hooks/usePostAsyncResponse";

function FAQ() {
  const [showModal, setShowModal] = useState(false);
  const [getFAQ, setFAQ] = useState([]);
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
    });
  };

  if (loading) {
    return <div>loading...</div>;
  }

  if (!data.length) {
    return (
      <div className="default-height d-flex align-items-center justify-content-center">
        <BtnTitleIcon
          title="Add FAQ"
          onClick={() => {
            setShowModal(true);
          }}
        />
        {showModal && (
          <ModalComponent
            title="Frequently Asked Questions"
            show={showModal}
            close={() => setShowModal(false)}
            data={data}
            editSaveCallback={editSaveCallback}
            type={"FAQ"}
            btnTitle="Create more FAQ"
            emptyadta={{ question: "", answer: "" }}
            loading={loadingFaq}
          />
        )}
      </div>
    );
  }

  return (
    <Fragment>
      <div className="d-flex faq-title">
        Frequently Asked Questions <BtnIconOnly onClick={HandleOpenModal} />
      </div>
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
      {showModal && (
        <ModalComponent
          title="Frequently Asked Questions"
          show={showModal}
          close={() => setShowModal(false)}
          data={data}
          editSaveCallback={editSaveCallback}
          type={"FAQ"}
          btnTitle="Create more FAQ"
          emptyadta={{ question: "", answer: "" }}
          loading={loadingFaq}
        />
      )}
    </Fragment>
  );
}

export default FAQ;
