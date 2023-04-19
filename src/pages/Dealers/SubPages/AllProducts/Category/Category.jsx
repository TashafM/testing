import { useEffect, useState } from "react";
import { uniqBy } from "lodash";

function Category() {
  const variants = [
    { color: "red", quantity: "1 gallon", price: "$20" },
    { color: "red", quantity: "5 gallons", price: "$90" },
    { color: "red", quantity: "10 gallons", price: "$90" },
    { color: "blue", quantity: "1 gallon", price: "$22" },
    { color: "blue", quantity: "5 gallons", price: "$100" },
    { color: "blue", quantity: "10 gallon", price: "$22" },
    { color: "blue", quantity: "20 gallon", price: "$22" },
    { color: "green", quantity: "1 gallon", price: "$25" },
    { color: "green", quantity: "5 gallons", price: "$110" },
    { color: "green", quantity: "10 gallon", price: "$265" },
    { color: "green", quantity: "20 gallons", price: "$1150" },
    { color: "green", quantity: "25 gallons", price: "$110" },
    { color: "green", quantity: "50 gallon", price: "$265" },
    { color: "green", quantity: "100 gallons", price: "$1150" },
  ];

  const uniqueColors = uniqBy(variants, "color");
  const firstColor = uniqueColors[0].color;
  const uniqueQuantities = uniqBy(
    variants.filter((variant) => variant.color === firstColor),
    "quantity"
  );
  const firstQuantity = uniqueQuantities[0].quantity;

  const [selectedColor, setSelectedColor] = useState(firstColor);
  const [selectedQuantity, setSelectedQuantity] = useState(firstQuantity);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedQuantity(null); // clear selected quantity
  };

  const handleQuantityClick = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const availableQuantities = variants.filter(
    (variant) => variant.color === selectedColor
  );
  const prices = availableQuantities.filter(
    (variant) => variant.quantity === selectedQuantity
  );

  useEffect(()=>{
    console.log(selectedColor, selectedQuantity,'ffffffffffff')
  },[selectedColor, selectedQuantity])

  return (
    <div className="App">
      <div className="color-selector">
        {uniqueColors.map((variant) => (
          <button
            key={variant.color}
            className={`color-btn ${
              variant.color === selectedColor ? "selected" : ""
            }`}
            style={{
              backgroundColor:
                variant.color === selectedColor ? "red" : "transparent",
            }}
            onClick={() => handleColorClick(variant.color)}
          >
            {variant.color}
          </button>
        ))}
      </div>
      <div className="quantity-selector">
        {availableQuantities.map((variant) => (
          <button
            key={variant.quantity}
            className={`quantity-btn ${
              variant.quantity === selectedQuantity ? "selected" : ""
            }`}
            style={{
              backgroundColor:
                variant.quantity === selectedQuantity ? "red" : "transparent",
            }}
            onClick={() => handleQuantityClick(variant.quantity)}
          >
            {variant.quantity}
          </button>
        ))}
      </div>
      <div className="price">{prices.length > 0 ? prices[0].price : "--"}</div>
    </div>
  );
}

export default Category;


// import React, { useState } from "react";

// function Category() {
//   const [value, setValue] = useState(1);

//   const options = [];
//   for (let i = 1; i <= 10; i++) {
//     options.push(<option key={i} value={i}>{i}</option>);
//   }

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <select value={value} onChange={handleChange}>
//       {options}
//     </select>
//   );
// }

// export default Category;
