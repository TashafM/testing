import { useState } from "react";
import { uniqBy } from "lodash";

function Category() {
  const variants = [
    { color: 'red', quantity: '1 gallon', price: '$20' },
    { color: 'red', quantity: '5 gallons', price: '$90' },
    { color: 'blue', quantity: '1 gallon', price: '$22' },
    { color: 'blue', quantity: '5 gallons', price: '$100' },
    { color: 'green', quantity: '1 gallon', price: '$25' },
    { color: 'green', quantity: '5 gallons', price: '$110' }
  ];

  const uniqueColors = uniqBy(variants, 'color');
  const firstColor = uniqueColors[0].color;
  const uniqueQuantities = uniqBy(variants.filter(variant => variant.color === firstColor), 'quantity');
  const firstQuantity = uniqueQuantities[0].quantity;

  const [selectedColor, setSelectedColor] = useState(firstColor);
  const [selectedQuantity, setSelectedQuantity] = useState(firstQuantity);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedQuantity(uniqueQuantities[0].quantity);
  };

  const handleQuantityClick = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const availableQuantities = variants.filter(variant => variant.color === selectedColor);
  const prices = availableQuantities.filter(variant => variant.quantity === selectedQuantity);

  return (
    <div className="App">
      <div className="color-selector">
        {uniqueColors.map(variant => (
          <button
            key={variant.color}
            className={`color-btn ${variant.color === selectedColor ? 'selected' : ''}`}
            disabled={variant.color === selectedColor}
            onClick={() => handleColorClick(variant.color)}
          >
            {variant.color}
          </button>
        ))}
      </div>
      <div className="quantity-selector">
        {uniqueQuantities.map(variant => (
          <button
            key={variant.quantity}
            className={`quantity-btn ${variant.quantity === selectedQuantity ? 'selected' : ''}`}
            disabled={!availableQuantities.find(qty => qty.quantity === variant.quantity)}
            onClick={() => handleQuantityClick(variant.quantity)}
          >
            {variant.quantity}
          </button>
        ))}
      </div>
      <div className="price">
        {prices.length > 0 ? prices[0].price : 'N/A'}
      </div>
    </div>
  );
}

export default Category;
