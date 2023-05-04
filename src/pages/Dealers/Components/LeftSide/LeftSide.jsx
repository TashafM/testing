import React, { useState } from "react";
import "./leftside.scss";
import mainproduct from "../../../../assets/images/mainproduct.png";
import wishlist from "../../../../assets/images/wishlist.svg";
import img600 from "../../../../assets/images/600x600pix(300dpi).png";
import { uniqBy } from "lodash";

import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useEffect } from "react";

// ---------THIS IS TESTING CODE ----------------------------
function LeftSide({ data, setCartProducts, cartProducts, clicked, aData, noHover, customVariant }) {
  // const [customVariant, setCustomVariant] = useState([])

  
  // useEffect(() => {
  //   if (localStorage.getItem("variant")) {
  //     const variation = localStorage.getItem("variant");

  //     const myVariant = JSON.parse(variation);
  //     setCustomVariant(myVariant);
  //     console.log('it is calling on rerender.................')
  //     // console.log(products,'products changes')
  //   }
  // }, []);

  console.log(data,'left side data')
  const [variants, setVariants] = useState(data.variants);
  const uniqueColors = uniqBy(data.variants, "colorDescription");
  const firstColor = clicked
    ? customVariant.colorDescription
    : uniqueColors[0].colorDescription;

    console.log(firstColor,'firstColor')
  const uniqueQuantities = uniqBy(
    data.variants.filter((variant) => variant.colorDescription === firstColor),
    "packingDescription"
  );


  const firstQuantity = clicked
    ? customVariant.packingDescription
    : uniqueQuantities[0].packingDescription;
  console.log(firstColor, firstQuantity,'object')

  // const [selectedColor, setSelectedColor] = useState(clicked ? aData.colorDescription : uniqueColors[0].colorDescription);
  const [selectedColor, setSelectedColor] = useState(firstColor);
  const [selectedQuantity, setSelectedQuantity] = useState(firstQuantity);


  useEffect(()=>{
    if(localStorage.getItem('variant')){
      const data = JSON.parse(localStorage.getItem('variant'))
      setSelectedColor(data.colorDescription)
      setSelectedQuantity(data.packingDescription)
      
    }

  },[localStorage.getItem('variant')])


  console.log(selectedColor,'this is selected color')

  // console.log(selectedColor,'66666666666')

  const [isValid, setIsValid] = useState(false); // validation for options

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedQuantity(null); // clear selected quantity --------------------- *IMPORTANT FOR CLEARING THE VALUE FROM BUTTON*
  };

  const handleQuantityClick = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const [productQuantity, setProductQuantity] = useState(
    clicked ? aData.quantity : 1
  );

  const [exceedQuantity, setExceedQuantity] = useState(false);

  const handleQuantity = (e) => {
    const value = e.target.value;
    if (Number(value) > 100) {
      setExceedQuantity(true);
    } else {
      setExceedQuantity(false);
    }
    if (!isNaN(value)) {
      setProductQuantity(value);
    }
  };

  const availableQuantities = data.variants.filter(
    (variant) =>
      variant.colorDescription ===
      (clicked ? aData.colorDescription : selectedColor)
  );
  const prices = clicked
    ? aData
    : availableQuantities.filter(
        (variant) => variant.packingDescription === selectedQuantity
      );

  const updateQuantity = () => {
    // console.log(aData.cartId,'cart id')
    // const filtered = cartProducts.filter((item)=>item.cartId==aData.cartId)
    // console.log(filtered,'**************')

    // console.log(cartProducts,'cartPRoducts--------------------------')
    const products = JSON.parse(localStorage.getItem('cart') || '[]')

    const updatedArray = products.map((obj) => {
      if (obj.cartId === aData.cartId) {
        obj.quantity = productQuantity;
        obj.totalPrice = Number(productQuantity) * Number(prices.grossPrice);
        obj.grossPrice = Number(prices.grossPrice);
      }
      return obj;
    });
    setCartProducts(updatedArray);
    localStorage.setItem("cart", JSON.stringify(updatedArray));
  };

  // rest of your code...

  const testConsole = () => {
    if (exceedQuantity) {
      console.log("quantity exceeding");
    } else {
      const storedCartProducts = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      const itemIndex = storedCartProducts.findIndex(
        (item) => item.variantId === prices[0].variantId
      );
      const popupData = JSON.parse(localStorage.getItem('popupItems'));
      const newPopupData = JSON.parse(localStorage.getItem('initialProductData'))

      if (itemIndex === -1) {
        // Item not found in cart, add it as a new item
        const newItem = {
          principalCompanyUserCode: localStorage.getItem(
            "principalCompanyUserCode"
          ),
          variantId: prices[0].variantId,
          selectedColor: selectedColor,
          selectedQuantity: selectedQuantity,
          saleDescription: prices[0].saleDescription,
          quantity: Number(productQuantity),
          totalPrice: Number(productQuantity) * Number(prices[0].grossPrice),
          grossPrice: Number(prices[0].grossPrice),
          productId: data.productId,
          name: data.itemDescription,
          itemNumber: data.itemNumber,
          productId: data.productId,
        };
        const updatedCartProducts = [...storedCartProducts, newItem];
        console.log(newItem,'new Item adding')
        const test = popupData.filter((item)=>item.itemNumber==newItem.itemNumber)
        if(test.length==0){
          localStorage.setItem('popupItems',JSON.stringify([...popupData, newPopupData]));
        }
        setCartProducts(updatedCartProducts); // push the new item to the cart array

        // Store updated cartProducts in localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCartProducts));
        console.log(updatedCartProducts,'updated cart')

      } else {
        // Item found in cart, update its quantity
        const updatedCart = [...storedCartProducts];
        updatedCart[itemIndex].quantity =
          Number(updatedCart[itemIndex].quantity) + Number(productQuantity);
        updatedCart[itemIndex].totalPrice =
          Number(updatedCart[itemIndex].totalPrice) +
          Number(productQuantity) * Number(prices[0].grossPrice);
        setCartProducts(updatedCart);

        // Store updated cartProducts in localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        console.log(updatedCart,'updated cart')
      }
    }
  };

  //***************************VALIDATION */

  useEffect(() => {
    if (!productQuantity || !selectedColor || !selectedQuantity) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [productQuantity, selectedColor, selectedQuantity]);

  return (
    <div className="scrollable-left">
      <div className="leftside">
        <div className="title">Konica Chrome</div>
        <div className="image-div">
          {/* <div className="sub-images">
            <div className="toggle-img">
              <img src={mainproduct} alt="" />
            </div>
            <div className="toggle-img">
              <img src={mainproduct} alt="" />
            </div>
            <div className="toggle-img">
              <img src={mainproduct} alt="" />
            </div>
          </div> */}
          <img src={img600} alt="" className="main-img" />
          <div className="wish-list">
            <img src={wishlist} alt="" />
          </div>
        </div>
        <div className="about-product">
          <div className="product-code">
            {" "}
            {clicked
              ? prices.bpCatalogNumber
              : prices?.[0]?.bpCatalogNumber ?? "----"}
          </div>
          <div className="product-price">
            <div className="product-name"> {data.itemDescription}</div>
            <div>
              {data.currency.symbol}
              {clicked
                ? prices.grossPrice
                : prices.length > 0
                ? prices[0].grossPrice || "N/A API"
                : "--"}
            </div>
          </div>
          <div className="product-desc">
            {clicked
              ? prices.saleDescription
              : prices?.[0]?.saleDescription ?? ""}
          </div>
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            {clicked ? "Color Description" : "Please Select Color Description"}
          </div>
          {uniqueColors.map((variant, id) => (
            <button
              key={id}
              className={`color-btn ${
                variant.colorDescription === selectedColor
                  ? "selected"
                  : "not-selected"
              }`}
              // className={`color-btn ${
              //   variant.colorDescription ===
              //   (clicked ? aData.colorDescription : selectedColor)
              //     ? "selected"
              //     : clicked
              //     ? "disabled-selected"
              //     : "not-selected"
              // }`}
              onClick={() => handleColorClick(variant.colorDescription)}
            >
              {variant.colorDescription}
            </button>
          ))}
        </div>

        <div className="color-description">
          <div className="color-desc-title">
            {clicked
              ? "Packaging Description"
              : "Please Select Packaging Description"}
          </div>
          {availableQuantities.map((variant, id) => (
            <button
              key={id}
              // className={`quantity-btn ${
              //   variant.packingDescription ===
              //   (clicked ? aData.packingDescription : selectedQuantity)
              //     ? "selected"
              //     : clicked
              //     ? "disabled-selected"
              //     : "not-selected"
              // }`}

              className={`color-btn ${
                variant.packingDescription === selectedQuantity
                  ? "selected"
                  : "not-selected"
              }`}
              onClick={() => handleQuantityClick(variant.packingDescription)}
            >
              {variant.packingDescription}
              {console.log(variant.packingDescription,'')}
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
          <div className="max-orders">Maximum orders 100 *</div>
        </div>

        {/* <Form className="urgent-order">
          <Form.Check
            type="checkbox"
            label="Need urgent order"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
          />
        </Form> */}

        <div className="add-div-btn">
          <Button
            className="add-product-button"
            onClick={clicked ? updateQuantity : testConsole}
            disabled={isValid || exceedQuantity}
          >
            {clicked ? "Update" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
