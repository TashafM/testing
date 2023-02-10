import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./BlackBtn.scss";

const BlackBtn = () => {
  return (
    <div className="custom-btn">
      <span className="cart-icon">
        <AiOutlineShoppingCart />
      </span>
      <span className="check-out">Checkout</span>
    </div>
  );
};

export default BlackBtn;
