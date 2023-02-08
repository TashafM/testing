import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./BlackBtn.scss";

const BlackBtn = () => {
  return (
    <div className="custom-btn">
      <span>
        <AiOutlineShoppingCart />
      </span>
      <span>Checkout</span>
    </div>
  );
};

export default BlackBtn;
