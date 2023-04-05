import React from "react";
import "./mydealerspopup.scss";
import { Button, Col, Modal, Offcanvas, Row } from "react-bootstrap";
import closeX from "../../../../assets/images/closeX.svg";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import DealerPopSearch from "../../Components/DealerPopSearch/DealerPopSearch";
import { dealersLogo } from "../data";
// import ordersuccess from '../../../../assets/images/ordersuccess.gif'

const MyDealersPopup = ({ show, setDealerPopup }) => {
  return (
    <Modal
      centered
      show={show}
      onHide={() => setDealerPopup(false)}
      className="dealers-order"
    >
      <div className="fixed-top-div">
        <div className="titleNbutton">
          <div className="name">Select Company</div>
          <div className="closeBtn">
            <img src={closeX} onClick={() => setDealerPopup(false)} />
          </div>
        </div>
        <DealerPopSearch />
      </div>
      <div className="all-dealers">
        <Row className="dealer-logo-row">
          {dealersLogo.map((item) => (
            <Col className="col-xl-2 custom-column">
              <div className="logo-company">
                <img src={item.logo} alt="" />
              </div>
              <div className="name-company">{item.name}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Modal>
  );
};

export default MyDealersPopup;
