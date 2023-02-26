import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UnderLineTabs from "../../../components/Tabs/UnderLineTabs";
import tag from "../../../assets/images/tag.svg";
import deleteIcon from "../../../assets/images/delete.png";
import { CreateJobsTabs } from "../data/data";
import "./CreateJobs.scss";
import edit from "../../../assets/images/edit-icon.png";
import ModalComponent from "../../../components/Modal";
import EditFAQ from "./Component/EditJobs";

function CreateJobs() {
  const [showModal, setShowModal] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="tag-icon w-100 h-100">
            <img className="tag-icon-img " src={tag} alt="" />
          </div>

          <div className="w-100">
            <p className="m-0 text-job">Backend Lead</p>
            <p className="m-0">Posted on : 20/01/2023</p>
          </div>
        </div>

        <div className=" d-flex justify-content-around ">
          <div
            className="upload-btn-job job-btn me-5"
            onClick={() => handleOpenModal()}
          >
            <span className="me-3 ">
              <img className="job-btn-icon" src={edit} alt="" />
            </span>
            <span>Edit Post</span>
          </div>
          <div
            className="upload-btn-job"
            onClick={() => alert("delete post button clicked")}
          >
            <span className="me-3">
              <img src={deleteIcon} alt="" />
            </span>
            <span>Delete Post</span>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalComponent
          title="Posted on : 20/01/2023"
          show={showModal}
          close={() => setShowModal(false)}
        >
          <EditFAQ close={() => setShowModal(false)} />
        </ModalComponent>
      )}
      <UnderLineTabs tabs={CreateJobsTabs} />
      <Outlet />
    </div>
  );
}

export default CreateJobs;
