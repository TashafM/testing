import React, { useContext, useEffect, useState } from "react";
import "./sidepanel.scss";
import { Button, Offcanvas } from "react-bootstrap";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import { GlobalSidePanel } from "../../Dealers";

const SidePanel = () => {
  const {setShowPanel, showPanel} = useContext(GlobalSidePanel)
  const [cartProducts, setCartProducts] = useState([]);
  const [data, setData] = useState([])


  useEffect(()=>{
    if (localStorage.getItem('cartProducts')) {
      // Retrieve the data as a string
      const productString = localStorage.getItem('cartProducts');
      
      // Parse the string into an array
      const products = JSON.parse(productString);
      setCartProducts(products)
      
    }
  },[])

  useEffect(()=>{
    if(localStorage.getItem('initialProductData')){
      const productDataStr = localStorage.getItem('initialProductData');

      const products = JSON.parse(productDataStr);
      setData(products);
    }
  },[localStorage.getItem('initialProductData')])
  
  return (
    <div className="sidepanel">
      <Offcanvas
        show={showPanel}
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
