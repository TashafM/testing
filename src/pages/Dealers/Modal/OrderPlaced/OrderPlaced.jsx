import React from "react";
import "./orderplaced.scss";
import { Button, Modal } from "react-bootstrap";
import ordersuccess from '../../../../assets/images/ordersuccess.gif'

const OrderPlaced = ({ modalShow, setModalShow }) => {
  return (
    <Modal centered show={modalShow} onHide={() => setModalShow(false)} className="success-order">
      <div className="orderplaced-popup">
        <img src={ordersuccess} alt="" />
        <div className="msg">Your order has been sent successfully !!!</div>
        <Button className="save-btn view-order-btn" onClick={()=>setModalShow(false)}>View Order</Button>
      </div>
    </Modal>
  );
};

export default OrderPlaced;
