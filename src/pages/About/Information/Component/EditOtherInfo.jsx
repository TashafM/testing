import React, { useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import ReactSelector from "../../../../components/ReactSelect";
import "./styles.scss";
import CheckBox from "../../../../components/CheckBox";
import TextArea from "../../../../components/Input/TextArea";
import { Interested, nameLabel, Placeses } from "../../../../helper/constant";

function EditOtherInfo(props) {
  const { type } = props;
  const [ischecked, setIschecked] = useState(false);

  const onchange = (e) => {
    setIschecked(e.target.value);
  };

  return (
    <div>
      <p className="drawer-title">
        Write down the company’s sales reach, services & support and interested
        to purchase
      </p>
      <div>
        <h5>Sales reach is at</h5>
        <ReactSelector options={Placeses} />
      </div>
      <div className="mb-3 mt-5">
        <h5 className="mb-2">Do you offer any services & support?</h5>
        <CheckBox type={"radio"} nameLabel={nameLabel} onChange={onchange} />
        {ischecked === "Yes" && (
          <>
            <TextArea
              name="about"
              value={
                "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoet dolore magna aliqua. Ut enim ut aliquip ex ea . Ut enim...Read more "
              }
              placeholder="About"
            />
          </>
        )}
      </div>
      <div className="mb-3 mt-5">
        <h5 className="mb-2">You are interested to purchase</h5>
        <ReactSelector options={Interested} />
      </div>
      <div>
        <BtnTitleCenter
          title={"Edit"}
          onClick={() => {
            console.log("save buttonclick");
          }}
        />
      </div>
    </div>
  );
}

export default EditOtherInfo;
