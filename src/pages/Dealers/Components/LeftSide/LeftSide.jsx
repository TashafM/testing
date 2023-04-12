import React, { useState } from "react";
import "./leftside.scss";
import mainproduct from "../../../../assets/images/mainproduct.png";
import wishlist from "../../../../assets/images/wishlist.svg";
import img600 from "../../../../assets/images/600x600pix(300dpi).png";

import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const LeftSide = ({ data }) => {
  const [variant, setVariant] = useState(data.variants);
  const [initial, setInitial] = useState(variant[0]);
  const [isChecked, setIsChecked] = useState(false);

  const [values, setValues] = useState(data);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="scrollable-left">
      <div className="leftside">
        <div className="title">Konica Chrome</div>
        <div className="image-div">
          <div className="sub-images">
            <div className="toggle-img">
              <img src={mainproduct} alt="" />
            </div>
            <div className="toggle-img">
              <img src={mainproduct} alt="" />
            </div>
            <div className="toggle-img">
              <img src={mainproduct} alt="" />
            </div>
          </div>
          <img src={img600} alt="" className="main-img" />
          <div className="wish-list">
            <img src={wishlist} alt="" />
          </div>
        </div>
        <div className="about-product">
          <div className="product-code">{initial.bpCatalogNumber}</div>
          <div className="product-price">
            <div className="product-name">{values.itemDescription}</div>
            <div>
              {values.currency.symbol} {initial.grossPrice}
            </div>
          </div>
          <div className="product-desc">{initial.saleDescription}</div>
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            Please Select Color Description
          </div>
          {variant.map((item, id) => (
            <Button className="select-color-btn">
              {item.colorDescription}
            </Button>
          ))}
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            Please Select Packaging Description
          </div>
          {variant.map((item, id) => (
            <Button className="select-color-btn">
              {item.packingDescription}
            </Button>
          ))}{" "}
        </div>

        <div className="quantity-input">
          <div className="quantity-desc-title">Enter Quantity</div>
          <FormControl type="text" />
        </div>

        <Form className="urgent-order">
          <Form.Check
            type="checkbox"
            label="Need urgent order"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </Form>

        <div className="add-div-btn">
          <Button className="add-product-button">Add</Button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
