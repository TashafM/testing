import React, { useContext, useEffect, useState } from "react";
import "./sidepanel.scss";
import { Button, Offcanvas } from "react-bootstrap";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import { AddProducts, GlobalSidePanel } from "../../Dealers";
import { API } from "../../../../helper/API";
import { axiosInstance } from "../../../../helper/axios";



const SidePanel = () => {
  const {setShowPanel, showPanel} = useContext(GlobalSidePanel)
  const {setIsEmpty, isEmpty} = useContext(AddProducts)
  const [cartProducts, setCartProducts] = useState([]);
  const [data, setData] = useState([])

  const [clicked, setClicked] = useState(false)

  useEffect(()=>{
    if (localStorage.getItem('cart')) {
      // Retrieve the data as a string
      const productString = localStorage.getItem('cart');
      
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
      // console.log(products,'products changes')
    }
  },[localStorage.getItem('initialProductData')])

  const [isLoading, setIsLoading] = useState(false)

  const addingItems =()=>{
    setIsLoading(true);
    addItemToCart((res)=>{
      setIsLoading(false)
      setIsEmpty(false)
    })
  }

  const editProducts =(id)=>{
    const pop = JSON.parse(localStorage.getItem('popupItems'))
    // console.log(id)
    const filtered = pop.filter((item)=>item.itemNumber == id.itemNumber)
    const result = filtered[0]
    // console.log(result,'data fileererer')
    const final = JSON.stringify(result)
    // console.log(final,'final result')
    setData(result)
    localStorage.setItem('initialProductData', final)
    setClicked(true)
  }


  const [aData, setA] = useState([])
  const getFromPop = (product) => {
    const data = JSON.parse(localStorage.getItem('cart'))
    const flt = data.filter((itm)=>itm.variantId == product.variantId)
    setA(flt[0])
  }

  const addItemToCart = () => {
    const sgst = localStorage.getItem("sgstPercentage");
    const igst = localStorage.getItem("igstPercentage");
    const cgst = localStorage.getItem("cgstPercentage");

    // const sumOfTotal = cartProducts.reduce(
    //   (acc, item) => acc + item.totalPrice,
    //   0
    // );
    const sumOfTotal = cartProducts.reduce(
      (acc, item) => acc + Number(item.totalPrice),
      0
    );
    console.log(sumOfTotal, 'sumtotal')
    const sumOfTaxes = Number(cgst) + Number(sgst) + Number(igst);
    const taxAmount = (sumOfTotal * sumOfTaxes) / 100; // this is final taxAmount
    const totalAmt = taxAmount + sumOfTotal; // this is totalAmount

    axiosInstance
      .post(API.DEALER_ADD_TO_CART, {
        principalCompanyUserCode: localStorage.getItem(
          "principalCompanyUserCode"
        ),
        cartItems: cartProducts.map((item) => ({
          variantId: item.variantId,
          quantity: item.quantity.toString(),
          grossPrice: item.grossPrice.toString(),
          productId: item.productId,
          saleDescription: item.saleDescription,
          totalPrice: item.totalPrice.toString(),
        })),
        totalAmount: totalAmt.toString(),
        taxAmount: taxAmount.toString(),
      })
      .then((res) => {
        if (res.success) {
          setShowPanel(false);
          console.log(res.result[0].cartItems,'cart items')
        }
      });
  };
  
  return (
    <div className="sidepanel">
      <Offcanvas
        show={showPanel}
        onHide={() => {
          // setShowPanel(false);
          {cartProducts.length>0 ? addItemToCart() : setShowPanel(false)}
        }}
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
                clicked={clicked}
                aData={aData}
              />
            </div>
            <div className="vertical-line"></div>
            <div className="div-2">
              <RightSide
                setShowPanel={setShowPanel}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                addItemToCart={addingItems}
                isLoading={isLoading}
                editProducts={editProducts}
                getFromPop={getFromPop}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidePanel;
