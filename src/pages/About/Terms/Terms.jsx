import React, { useEffect, useState } from "react";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import { termsData } from "../data/data";
import ContentPrivacy from "../Privacy/Component/ContentPrivacy";
import "./Terms.scss";
import ModalComponent from "../../../components/Modal";
import EditTerm from "./Component/EditTerms";
import { useResponse } from "../../../hooks/useResponse";
import { usePostAsyncResponse } from "../../../hooks/usePostAsyncResponse";
import BtnTitleIcon from "../../../components/Button/BtnTitleIcon";

function Terms() {
  const [showModal, setShowModal] = useState(false);
  const [termCondition, setTermCondition] = useState([]);

  const { data, loading } = useResponse("/portalViewCompanyTermsConditions");

  const [postData, { error, loading: loadingTerms }] = usePostAsyncResponse(
    "/portalPostCompanyTermsConditions"
  );

  useEffect(() => {
    const arr = [];
    data?.map((ele) => {
      arr.push({ title: ele?.title, content: ele?.content });
    });
    console.log("sbjk", arr);
    setTermCondition(arr);
  }, [data]);

  const HandleOpenModal = () => {
    setShowModal(true);
  };

  const editSaveCallback = (data) => {
    console.log("shdj", data);
    const arr = [];

    const body = {
      termsConditions: data,
    };

    postData(body, () => {
      setShowModal(false);
      setTermCondition(data);
    });
  };
  console.log("nskj", termCondition);

  if (loading) {
    return <div>loading</div>;
  }

  if (!termCondition.length) {
    return (
      <div className="default-height d-flex align-items-center justify-content-center">
        <BtnTitleIcon
          title="Add term and condition"
          onClick={() => {
            setShowModal(true);
          }}
        />
        {showModal && (
          <ModalComponent
            title="Terms & Conditions"
            show={showModal}
            close={() => setShowModal(false)}
            data={termCondition}
            editSaveCallback={editSaveCallback}
            type={"Term & Condition"}
            btnTitle="Add more topics"
            emptyadta={{ title: "", content: "" }}
            loading={loadingTerms}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex terms-title terms-titel-container">
        Terms & Conditions <BtnIconOnly onClick={HandleOpenModal} />
      </div>
      {showModal && (
        <ModalComponent
          title="Terms & Conditions"
          show={showModal}
          close={() => setShowModal(false)}
          data={termCondition}
          editSaveCallback={editSaveCallback}
          type={"Term & Condition"}
          btnTitle="Add more topics"
          emptyadta={{ title: "", content: "" }}
          loading={loadingTerms}
        />
      )}
      <ContentPrivacy data={termCondition} />
    </div>
  );
}

export default Terms;
