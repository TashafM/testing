import React, { useEffect, useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import ReactSelector from "../../../../components/ReactSelect";
import "./styles.scss";
import TextArea from "../../../../components/Input/TextArea";
import { Interested, Placeses } from "../../../../helper/constant";
import { Offcanvas } from "react-bootstrap";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import Checkbox from "../../../../components/Input/Checkbox";
import DrawerHead from "./DrawerHead";

function EditOtherInfo({ show, handleClose, data, onUpdate, completeData }) {
  const [ischecked, setIschecked] = useState(false);
  const [salesReachAt, setSalesReachAt] = useState([]);
  const [intrestedIn, setIntrestedIn] = useState([]);
  const [isCheckedNo, setIsCheckedNo] = useState(false);
  const [value, setValue] = useState("");
  const [postData, { loading }] = usePatchAsyncReponse(
    "/portalPatchCompanyOtherInfo"
  );

  const [makeApiCall, setMakeApiCall] = useState(false);

  useEffect(() => {
    setSalesReachAt(data?.salesReachAt ?? []);
    setIntrestedIn(data?.interestedToPurchase);
    const check = data?.servicesAndSupport?.provided === "yes" ? true : false;
    setIschecked(check);
    setValue(data?.servicesAndSupport?.details);
  }, [data]);

  const onUpdateData = () => {
    if (makeApiCall) {
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
    } else {
      handleClose();
    }
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content drawer-conter-canvas">
        <DrawerHead
          title="Other info"
          handleClose={handleClose}
          description="Write down the company’s sales reach, services & support and
              interested to purchase"
        />
        <div>
          <div>
            <h5>Sales reach is at</h5>
            <ReactSelector
              value={salesReachAt}
              onChange={(e) => {
                !makeApiCall && setMakeApiCall(true);
                setSalesReachAt(e);
              }}
              options={Placeses}
              getOptionLabel={(options) => options?.city}
              getOptionValue={(options) => options?.city}
            />
          </div>
          <div className="mb-3 mt-4">
            <h5 className="mb-2">Do you offer any services & support?</h5>
            <div className="d-flex">
              <div className="d-flex check-container">
                <Checkbox
                  checked={ischecked}
                  onChange={() => {
                    !makeApiCall && setMakeApiCall(true);
                    setIschecked(!ischecked);
                    setIsCheckedNo(false);
                  }}
                />
                <span className="px-2">yes</span>
              </div>
              <div className="d-flex">
                <Checkbox
                  checked={isCheckedNo}
                  onChange={() => {
                    !makeApiCall && setMakeApiCall(true);
                    setIsCheckedNo(!isCheckedNo);
                    setIschecked(false);
                  }}
                />
                <span className="px-2">no</span>
              </div>
            </div>

            {/* <CheckBox
                type={"radio"}
                nameLabel={nameLabel}
                value={ischecked}
                onChange={onchange}
              /> */}
            {ischecked && (
              <div className="mt-3">
                <TextArea
                  name="about"
                  value={value}
                  onChange={(e) => {
                    !makeApiCall && setMakeApiCall(true);
                    setValue(e.target.value);
                  }}
                  rows={5}
                  placeholder="Please mention here"
                />
              </div>
            )}
          </div>
          <div className="mb-3 mt-3">
            <h5 className="mb-2">You are interested to purchase</h5>
            <ReactSelector
              options={Interested}
              value={intrestedIn}
              onChange={(e) => {
                !makeApiCall && setMakeApiCall(true);
                setIntrestedIn(e);
              }}
              getOptionLabel={(options) => options.value}
              getOptionValue={(options) => options.value}
            />
          </div>
          <div>
            <BtnTitleCenter
              title={"Save"}
              loading={loading}
              disabled={loading}
              onClick={onUpdateData}
            />
          </div>
        </div>
      </div>
    </Offcanvas>
  );
}

export default EditOtherInfo;
