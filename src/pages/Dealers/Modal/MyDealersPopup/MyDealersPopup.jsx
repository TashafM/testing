import React from "react";
import "./mydealerspopup.scss";
import { Button, Col, Modal, Offcanvas, Row } from "react-bootstrap";
import closeX from "../../../../assets/images/closeX.svg";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import DealerPopSearch from "../../Components/DealerPopSearch/DealerPopSearch";
import { dealersLogo } from "../data";
import { useNavigate } from "react-router-dom";
// import ordersuccess from '../../../../assets/images/ordersuccess.gif'

const MyDealersPopup = ({ show, setDealerPopup, data, setChange }) => {
  const navigate = useNavigate();

  const activateDealer = (dealer) => {
    console.log(dealer, "dealer changes");
    localStorage.setItem(
      "principalCompanyUserCode",
      dealer.principalCompanyUserCode
    );
    localStorage.setItem("firstname", dealer.firstname);
    localStorage.setItem("dpURL", dealer.dpURL);
    localStorage.setItem("cgstPercentage", dealer.cgstPercentage);
    localStorage.setItem("sgstPercentage", dealer.sgstPercentage);
    localStorage.setItem("igstPercentage", dealer.igstPercentage);
    localStorage.setItem("currencySymbol", dealer.currency.symbol);
    localStorage.setItem("currencyType", dealer.currency.type);
    // localStorage.removeItem('cartProducts');
    navigate(`/dealers/dashboard`);
    setDealerPopup(false);
  };
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
          {data.map((item) => (
            <Col
              className="col-xl-2 custom-column"
              onClick={() => activateDealer(item)}
            >
              <div className="logo-company">
                <img src={item.dpURL} alt="" />
              </div>
              <div className="name-company">{item.firstname}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Modal>
  );
};

export default MyDealersPopup;
