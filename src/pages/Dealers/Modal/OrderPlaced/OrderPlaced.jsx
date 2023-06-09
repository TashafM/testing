import React from "react";
import "./orderplaced.scss";
import { Button, Modal } from "react-bootstrap";
import ordersuccess from '../../../../assets/images/ordersuccess.gif'
import { useNavigate } from "react-router-dom";

const OrderPlaced = ({ modalShow , closeSuccessModal, gotoOrders}) => {
  const navigate = useNavigate()
  return (
    <Modal centered show={modalShow} onHide={closeSuccessModal} className="success-order">
      <div className="orderplaced-popup">
        <img src={ordersuccess} alt="" />
        <div className="msg">Your order has been sent successfully !!!</div>
        <Button className="save-btn view-order-btn" onClick={gotoOrders}>View Order</Button>
      </div>
      <div className="mobile-not-supported">

      </div>
    </Modal>
  );
};

export default OrderPlaced;
