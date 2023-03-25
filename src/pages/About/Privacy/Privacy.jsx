import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnIconOnly from "../../../components/Button/BtnIconOnly";
import BtnTitleIcon from "../../../components/Button/BtnTitleIcon";
import ModalComponent from "../../../components/Modal";
import { useResponse } from "../../../hooks/useResponse";
import { privacyPolicyData } from "../data/data";
import ContentPrivacy from "./Component/ContentPrivacy";
import EditPrivacy from "./Component/EditPrivacy";
import "./Privacy.scss";

function Privacy() {
  const [privacy, setPrivacy] = useState([]);
  const [showModal, setShowModal] = useState("");

  const { data, loading } = useResponse("/portalViewCompanyPrivacyPolicy");

  console.log({ data });

  useEffect(() => {
    const arr = [];
    data?.map((ele) => {
      arr.push({ question: ele?.title, answer: ele?.content });
    });
    // console.log("sbjk",arr)
    setPrivacy(arr);
  }, [data]);

  const editSaveCallback = (data) => {
    console.log("shdj", data);
    setPrivacy(data);
  };

  if (loading) {
    return <div>loading ...</div>;
  }
  console.log("jhsgjh", privacy);

  if (!privacy.length) {
    return (
      <div className="default-height d-flex align-items-center justify-content-center">
        <BtnTitleIcon
          title="Add Address"
          onClick={() => {
            setShowModal(true);
          }}
        />
        {showModal && (
          <EditPrivacy
            title="Privacy Policy"
            show={showModal}
            close={() => setShowModal(false)}
            data={privacy}
            editSaveCallback={editSaveCallback}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex privacy-title">
        Your Privacy Matters{" "}
        <BtnIconOnly
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
      <ContentPrivacy data={privacy} />
      {showModal && (
        <EditPrivacy
          title="Privacy Policy"
          show={showModal}
          close={() => setShowModal(false)}
          data={privacy}
          editSaveCallback={editSaveCallback}
        />
      )}
    </div>
  );
}

export default Privacy;
