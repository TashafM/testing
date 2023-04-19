import React, { Fragment, useState } from "react";
import { Badge, Offcanvas } from "react-bootstrap";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import Badges from "../../../../components/Input/Badges";
import DrawerHead from "./DrawerHead";
import EditOtherInfo from "./EditOtherInfo";

function OtherInfoDetails({ show, handleClose, data, onUpdate, completeData }) {
  const [showEditOther, setShowEditOther] = useState(false);
  return (
    <Fragment>
      <EditOtherInfo
        show={showEditOther}
        handleClose={() => {
          setShowEditOther(false);
        }}
        data={data}
        completeData={completeData}
        onUpdate={onUpdate}
      />
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="teamMember-add"
      >
        <div className="content drawer-conter-canvas">
          <div className="d-flex justify-content-between">
            <DrawerHead
              title="Other info"
              handleClose={handleClose}
              description=" Write down the company’s sales reach, services & support and
          interested to purchase"
            />
            <div className="">
              <BtnTitleCenter
                title="Edit"
                className="btn-bg-trasparent"
                onClick={() => {
                  setShowEditOther(true);
                }}
              />
            </div>
          </div>

          <div className="row ">
            <div className="mb-4">
              <h5 className="cont-title">Our Sales reach is at</h5>
            </div>
            <div className="col-12 title-other-Info d-flex flex-wrap">
              {data?.salesReachAt &&
                data?.salesReachAt.map((item) => {
                  return <Badges value={item.city} />;
                })}
            </div>
          </div>
          <hr />
          <div className="row ">
            <div className="mb-4">
              <h5 className="cont-title"> Our Services & support?</h5>
            </div>

            {data?.servicesAndSupport?.provided === "yes" ? (
              <div className="col-12 email margin-text">
                {data?.servicesAndSupport?.details}
              </div>
            ) : null}
          </div>
          <hr />
          <div className="mb-4">
            <h5 className="cont-title">You are interested to purchase</h5>
          </div>
          <div className="row mb-2">
            <div className="col-12 title-other-Info d-flex flex-wrap">
              {data?.interestedToPurchase &&
                data?.interestedToPurchase.map((item) => {
                  return (
                    <div className="mb-2">
                      <Badges key={item._id} value={item.value} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Offcanvas>
    </Fragment>
  );
}

export default OtherInfoDetails;
