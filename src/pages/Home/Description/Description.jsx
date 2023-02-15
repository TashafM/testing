/*eslint-disable */
import React from "react";
import upload from "../../../assets/images/upload.svg";

import "./Description.scss";
import AddMember from "../../../components/AddMember/AddMember";

const Description = ({ icon, title, count, onUserAdded, api, getDataFunc }) => {
  return (
    <>
      <div className="row row-desc">
        <div className="col-8 menu-info">
          <div className="new-div">
            <div>
              <img src={icon} alt="" />
            </div>
            <span className="title">{title}</span>
            <div className="count">{`(${count})`}</div>
          </div>
          <div className="description">
            {/* {description} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </div>
        </div>
        <div className="col-4 btn-col">
          <div className="buttons-div">
            <div
              className="upload-btn"
              onClick={() => alert("Upload button clicked")}
            >
              <span className="icon-desc">
                <img src={upload} alt="" />
              </span>
              <span>Upload a csv file</span>
            </div>
            <AddMember
              onUserAdded={onUserAdded}
              api={api}
              getDataFunc={getDataFunc}
            />

            {/* <div className="add-member" onClick={()=>alert('Add member button clicked')}>
              <span className="icon-desc">
                <img src={add} alt="" />
              </span>
              <span>Add Team Member</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
