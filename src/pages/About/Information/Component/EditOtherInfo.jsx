import React, { useEffect, useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import ReactSelector from "../../../../components/ReactSelect";
import "./styles.scss";
import CheckBox from "../../../../components/CheckBox";
import TextArea from "../../../../components/Input/TextArea";
import { Interested, nameLabel, Placeses } from "../../../../helper/constant";
import { Offcanvas } from "react-bootstrap";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";

function EditOtherInfo({ show, handleClose, data, onUpdate, completeData }) {
  const [ischecked, setIschecked] = useState(false);
  const [salesReachAt, setSalesReachAt] = useState([]);
  const [intrestedIn, setIntrestedIn] = useState([]);
  const [value, setValue] = useState("");
  const [postData, { loading }] = usePatchAsyncReponse(
    "/portalPatchCompanyOtherInfo"
  );

  useEffect(() => {
    setSalesReachAt(data?.salesReachAt ?? []);
    setIntrestedIn(data?.interestedToPurchase);
    setIschecked(data?.servicesAndSupport?.provided === "yes" ? true : false);
    setValue(data?.servicesAndSupport?.details);
  }, [data]);

  const onchange = (e) => {
    setIschecked(e.target.value);
  };

  const onUpdateData = () => {
    const body = {
      interestedToPurchase: [...intrestedIn],
      salesReachAt: [...salesReachAt],
      servicesAndSupport: {
        provided: ischecked ? "yes" : "no",
        details: ischecked ? value : "",
      },
    };

    postData(body, (res) => {
      const data = JSON.parse(JSON.stringify(completeData));
      data[0].otherInfo = res[0];
      onUpdate(data);
      handleClose();
    });
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="team-member-add">Other info</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <p className="drawer-title">
              Write down the company’s sales reach, services & support and
              interested to purchase
            </p>
            <div>
              <h5>Sales reach is at</h5>
              <ReactSelector
                value={salesReachAt}
                onChange={(e) => {
                  setSalesReachAt(e);
                }}
                options={Placeses}
                getOptionLabel={(options) => options?.city}
                getOptionValue={(options) => options?.city}
              />
            </div>
            <div className="mb-3 mt-5">
              <h5 className="mb-2">Do you offer any services & support?</h5>
              <CheckBox
                type={"radio"}
                nameLabel={nameLabel}
                onChange={onchange}
              />
              {ischecked === "Yes" && (
                <>
                  <TextArea
                    name="about"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                    placeholder="Please mention here"
                  />
                </>
              )}
            </div>
            <div className="mb-3 mt-5">
              <h5 className="mb-2">You are interested to purchase</h5>
              <ReactSelector
                options={Interested}
                value={intrestedIn}
                onChange={(e) => {
                  setIntrestedIn(e);
                }}
                getOptionLabel={(options) => options.value}
                getOptionValue={(options) => options.value}
              />
            </div>
            <div>
              <BtnTitleCenter
                title={"Edit"}
                loading={loading}
                onClick={onUpdateData}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  );
}

export default EditOtherInfo;
