import React, { useState } from "react";
import "./leftside.scss";
import mainproduct from "../../../../assets/images/mainproduct.png";
import wishlist from "../../../../assets/images/wishlist.svg";
import img600 from "../../../../assets/images/600x600pix(300dpi).png";
import { uniqBy } from "lodash";

import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useEffect } from "react";

// ---------THIS IS TESTING CODE ----------------------------
function LeftSide({ data, setCartProducts, cartProducts }) {
  const [variants, setVariants] = useState(data.variants);
  const uniqueColors = uniqBy(variants, "colorDescription");
  const firstColor = uniqueColors[0].colorDescription;
  const uniqueQuantities = uniqBy(
    variants.filter((variant) => variant.colorDescription === firstColor),
    "packingDescription"
  );
  const firstQuantity = uniqueQuantities[0].packingDescription;

  const [selectedColor, setSelectedColor] = useState(firstColor);
  const [selectedQuantity, setSelectedQuantity] = useState(firstQuantity);

  const [isValid, setIsValid] = useState(false); // validation for options

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedQuantity(null); // clear selected quantity --------------------- *IMPORTANT FOR CLEARING THE VALUE FROM BUTTON*
  };

  const handleQuantityClick = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const [productQuantity, setProductQuantity] = useState(1);
  // const handleQuantity = (e) => {
  //   setProductQuantity(e.target.value)
  // }

  const handleQuantity = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setProductQuantity(value);
    }
  };

  const availableQuantities = variants.filter(
    (variant) => variant.colorDescription === selectedColor
  );
  const prices = availableQuantities.filter(
    (variant) => variant.packingDescription === selectedQuantity
  );

  // const [cart, setCart] = useState([]);

  const testConsole = () => {
    // console.log(isValid,'jjjjjjjjjjjj')
    // if (!isValid) {
    //   return;
    // }
  
    // const principalCompanyUserCode = localStorage.getItem('pricipalCompanyUserCode')
    const newItem = {
      principalCompanyUserCode : localStorage.getItem('principalCompanyUserCode'),
      variantId: prices[0].variantId,
      selectedColor: selectedColor,
      selectedQuantity: selectedQuantity,
      saleDescription: prices[0].saleDescription,
      quantity: productQuantity,
      totalPrice: productQuantity * prices[0].grossPrice,
      productId: prices[0]._id,
      name: data.itemDescription,
    };
  
    console.log(newItem,'new item'); // log the new item to check
  
    setCartProducts([...cartProducts, newItem]); // push the new item to the cart array
  };

  //***************************VALIDATION */
  

  useEffect(() => {
    if (!productQuantity || !selectedColor || !selectedQuantity) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [productQuantity, selectedColor, selectedQuantity]);
  
  // const testConsole = () => {
  //   localStorage.setItem('myArr', JSON.stringify(myArr))
  // };

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
          <div className="product-code">
            {" "}
            {prices?.[0]?.bpCatalogNumber ?? "----"}
          </div>
          <div className="product-price">
            <div className="product-name"> {data.itemDescription}</div>
            <div>
              {data.currency.symbol}
              {prices.length > 0 ? prices[0].grossPrice || "N/A API" : "--"}
            </div>
          </div>
          <div className="product-desc">
            {prices?.[0]?.saleDescription ?? ""}
          </div>
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            Please Select Color Description
          </div>
          {uniqueColors.map((variant, id) => (
            <button
              key={variant.colorDescription}
              className={`color-btn ${
                variant.colorDescription === selectedColor
                  ? "selected"
                  : "not-selected"
              }`}
              onClick={() => handleColorClick(variant.colorDescription)}
            >
              {variant.colorDescription}
            </button>
          ))}
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            Please Select Packaging Description
          </div>
          {availableQuantities.map((variant, id) => (
            <button
              key={variant.packingDescription}
              className={`quantity-btn ${
                variant.packingDescription === selectedQuantity
                  ? "selected"
                  : "not-selected"
              }`}
              onClick={() => handleQuantityClick(variant.packingDescription)}
            >
              {variant.packingDescription}
            </button>
          ))}
        </div>

        <div className="quantity-input">
          <div className="quantity-desc-title">Enter Quantity</div>
          <FormControl
            type="text"
            onChange={handleQuantity}
            value={productQuantity}
          />
        </div>

        <Form className="urgent-order">
          <Form.Check
            type="checkbox"
            label="Need urgent order"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />
        </Form>

        <div className="add-div-btn">
          <Button
            className="add-product-button"
            onClick={testConsole}
            disabled={isValid}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

//==========================STABLE DATA======================S
// const LeftSide = ({ data }) => {
//   const [variant, setVariant] = useState(data.variants);
//   const uniqueVariants = uniqBy(variant, "packingDescription");
//   const uniqueColor = uniqBy(variant, "colorDescription");

//   const [initial, setInitial] = useState(variant[0]);
//   const [isChecked, setIsChecked] = useState(false);

//   const [values, setValues] = useState(data);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };
//   return (
//     <div className="scrollable-left">
//       <div className="leftside">
//         <div className="title">Konica Chrome</div>
//         <div className="image-div">
//           <div className="sub-images">
//             <div className="toggle-img">
//               <img src={mainproduct} alt="" />
//             </div>
//             <div className="toggle-img">
//               <img src={mainproduct} alt="" />
//             </div>
//             <div className="toggle-img">
//               <img src={mainproduct} alt="" />
//             </div>
//           </div>
//           <img src={img600} alt="" className="main-img" />
//           <div className="wish-list">
//             <img src={wishlist} alt="" />
//           </div>
//         </div>
//         <div className="about-product">
//           <div className="product-code">{initial.bpCatalogNumber}</div>
//           <div className="product-price">
//             <div className="product-name">{values.itemDescription}</div>
//             <div>
//               {values.currency.symbol} {initial.grossPrice}
//             </div>
//           </div>
//           <div className="product-desc">{initial.saleDescription}</div>
//         </div>

//         <div className="color-description">
//           <div className="color-desc-title">
//             Please Select Color Description
//           </div>
//           {uniqueColor.map((item, id) => (
//             <Button className="select-color-btn">
//               {item.colorDescription}
//             </Button>
//           ))}
//         </div>

//         <div className="color-description">
//           <div className="color-desc-title">
//             Please Select Packaging Description
//           </div>
//           {uniqueVariants.map((item, id) => (
//             <Button className="select-color-btn">
//               {item.packingDescription}
//             </Button>
//           ))}
//         </div>

//         <div className="quantity-input">
//           <div className="quantity-desc-title">Enter Quantity</div>
//           <FormControl type="text" />
//         </div>

//         <Form className="urgent-order">
//           <Form.Check
//             type="checkbox"
//             label="Need urgent order"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//           />
//         </Form>

//         <div className="add-div-btn">
//           <Button className="add-product-button">Add</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default LeftSide;
