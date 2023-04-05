import React from "react";
import { newAddressField } from "../data";
import SimpleInput from "../../SimpleInput/SimpleInput";
import "./newaddress.scss";
import { Button } from "react-bootstrap";

const NewAddress = ({ setAddress, editMode }) => {
  return (
    <div className="new-address">
      {editMode ? null : (
        <>
          <div className="shipping-billing">This address is :</div>
          <div className="radio-div">
            <div className="shipping">
              <input type="radio" name="address-type" id="" />
              Shipping address
            </div>
            <div className="billing">
              <input type="radio" name="address-type" id="" />
              Billing address
            </div>
          </div>
        </>
      )}
      {newAddressField.map((item) => (
        <SimpleInput title={item.title} placeholder={item.placeholderText} />
      ))}

      <div className="button-div">
        <Button className="save-btn" onClick={() => setAddress(true)}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default NewAddress;
