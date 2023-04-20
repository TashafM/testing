import React from "react";
import "./addresspopup.scss";
import { useState } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";
import SelectAddress from "./SelectAddress/SelectAddress";
import AddButton from "./AddButton/AddButton";
import TextInput from "../../../../components/Input/TextInput";
import SimpleInput from "../SimpleInput/SimpleInput";
import NewAddress from "./NewAddress/NewAddress";
import backpage from "../../../../assets/images/backpage.svg";

const AddressPopup = ({ show, handleClose, setAddress, addAddress, data }) => {
  
  const [isEdit, setIsEdit] = useState(false);
  const [freshAddress, setFreshAddress] = useState(null)

  console.log(freshAddress,'from addresspopup')

  const addNewAddress = () => {
    setAddress(false);
    setIsEdit(false);
  };
  return (
    <div className="addresspopup">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="address-popup"
      >
        <Offcanvas.Header closeButton={addAddress && true}>
          <Offcanvas.Title>
            {addAddress ? (
              "Addresses"
            ) : (
              <>
                {isEdit ? (
                  <div className="newAddress-back">
                    <span className="backToAddress">
                      <img
                        src={backpage}
                        alt=""
                        onClick={() => setAddress(true)}
                      />
                    </span>
                    Edit address
                  </div>
                ) : (
                  <div className="newAddress-back">
                    <span className="backToAddress">
                      <img
                        src={backpage}
                        alt=""
                        onClick={() => setAddress(true)}
                      />
                    </span>
                    Add a new address
                  </div>
                )}
              </>
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {addAddress ? (
            <>
              <div className="popup-container">
                <AddButton onClick={addNewAddress} />
                <SelectAddress
                  title={"Ship To"}
                  name={"ship-address"}
                  value1={"s-address1"}
                  value2={"s-address2"}
                  setIsEdit={setIsEdit}
                  setAddress={setAddress}
                  data={data.billingAddress}
                />
                <SelectAddress
                  title={"Bill To"}
                  name={"bill-address"}
                  value1={"b-address1"}
                  value2={"b-address2"}
                  setIsEdit={setIsEdit}
                  setAddress={setAddress}
                  data={data.shippingAddress}
                />
                <div className="save-address-div">
                  <Button className="save-address save-btn">Save</Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {isEdit ? (
                <NewAddress setAddress={setAddress} editMode={true} />
              ) : (
                <NewAddress setAddress={setAddress} setFreshAddress={setFreshAddress}/>
              )}
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AddressPopup;
