import React, { useEffect, useState } from "react";
import "./sidepanel.scss";
import { Button, Offcanvas } from "react-bootstrap";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const SidePanel = ({ show, setShowPanel, data }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(()=>{
    if (localStorage.getItem('cartProducts')) {
      // Retrieve the data as a string
      const productString = localStorage.getItem('cartProducts');
      
      // Parse the string into an array
      const products = JSON.parse(productString);
      setCartProducts(products)
      
    }
  },[cartProducts])
  
  return (
    <div className="sidepanel">
      <Offcanvas
        show={show}
        onHide={() => setShowPanel(false)}
        placement="end"
        className="dm"
      >
        <Offcanvas.Body>
          <div className="divided-div">
            <div className="div-1">
              <LeftSide
                data={data}
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
              />
            </div>
            <div className="vertical-line"></div>
            <div className="div-2">
              <RightSide
                setShowPanel={setShowPanel}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidePanel;
