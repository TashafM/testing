import React, { useState } from "react";
import "./leftside.scss";
import mainproduct from "../../../../assets/images/mainproduct.png";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const LeftSide = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="scrollable-left">
      <div className="leftside">
        <div className="title">Konica Chrome</div>
        <div className="image-div">
          <img src={mainproduct} alt="" />
        </div>
        <div className="about-product">
          <div className="product-code">#000789</div>
          <div className="product-price">
            <div>Konica Chrome</div>
            <div>$300</div>
          </div>
          <div className="product-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusm od tempor incididunt ut labore et dolore ent, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            Please Select Color Description
          </div>
          <Button className="select-color-btn">Cyan color</Button>
          <Button className="select-color-btn">Bluish Magenta Color</Button>
          <Button className="select-color-btn">Lemon Yellow Color</Button>
          <Button className="select-color-btn">Black Color</Button>
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            Please Select Packaging Description
          </div>
          <Button className="select-color-btn">RNB 1 Liter</Button>
          <Button className="select-color-btn">
            5 Liter Bottle AK-RCT (467A)
          </Button>
          <Button className="select-color-btn">NM 1 Liter</Button>
          <Button className="select-color-btn">
            1 Liter Round XT 45 Bottle
          </Button>
          <Button className="select-color-btn">5 Ltr RIB Can</Button>
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
