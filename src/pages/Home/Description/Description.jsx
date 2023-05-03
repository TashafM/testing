/*eslint-disable */
import React from "react";
import upload from "../../../assets/images/upload.svg";
import "./Description.scss";
import AddMember from "../../../components/AddMember/AddMember";
import AddPartners from "../Partners/AddPartners/AddPartners";
import SearchBar from "../../../components/SearchBar/SearchBar";
import FilterBtn from "../../../components/FilterButton/FilterButton";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Description = ({
  icon,
  title,
  count,
  onUserAdded,
  api,
  getDataFunc,
  addMember,
  addPartners,
  getCurrMembers,
  noButtons,
  data,
  setData,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const gotoAddMember = () => {
    if (location.pathname !== `/home/team-members/current-members`) {
      navigate(`/home/team-members/current-members`);
    }
    return false;
  };
  return (
    <>
      <div className="row row-desc">
        <div className="col-6 col-xl-7 menu-info">
          <div className="new-div">
            <div>
              <img src={icon} alt="" />
            </div>
            <span className="title">{title}</span>
            <div className="count">{`(${count})`}</div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </div>
        </div>
        {noButtons ? (
          <>
            <div className="col-6 col-xl-5 no-btn-col">
              <div>
                <SearchBar />
              </div>
              <div>
                <FilterBtn
                  onClick={() => {
                    toast.success("Feature Coming Soon");
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="col-6 col-xl-5 btn-col">
            <div className="buttons-div">
              <div className="upload-btn">
                <span className="icon-desc">
                  <img src={upload} alt="" />
                </span>
                <span>Upload a csv file</span>
              </div>
              <div onClick={addMember ? gotoAddMember : null}>
                {addMember && (
                  <AddMember
                    onUser
                    Added={onUserAdded}
                    api={api}
                    getCurrMembers={getCurrMembers}
                    getDataFunc={getDataFunc}
                    data={data}
                    setData={setData}
                  />
                )}
                {addPartners && (
                  <AddPartners api={api} getDataFunc={getDataFunc} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Description;
