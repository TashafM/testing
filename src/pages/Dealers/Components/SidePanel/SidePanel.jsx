import React, { useContext, useEffect, useState } from "react";
import "./sidepanel.scss";
import { Button, Offcanvas, Spinner } from "react-bootstrap";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import { AddProducts, EditItems, GlobalSidePanel } from "../../Dealers";
import { API } from "../../../../helper/API";
import { axiosInstance } from "../../../../helper/axios";

const SidePanel = ({ noHover }) => {
  const { setShowPanel, showPanel } = useContext(GlobalSidePanel);
  const { notEditable, setNotEditable, setEditMode } = useContext(EditItems);
  const {setCartOpen} = useContext(AddProducts)

  const { setIsEmpty, isEmpty } = useContext(AddProducts);
  const [cartProducts, setCartProducts] = useState([]);
  const [data, setData] = useState([]);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      // Retrieve the data as a string
      const productString = localStorage.getItem("cart");

      // Parse the string into an array
      const products = JSON.parse(productString);
      setCartProducts(products);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("initialProductData")) {
      const productDataStr = localStorage.getItem("initialProductData");

      const products = JSON.parse(productDataStr);
      setData(products);
      // console.log(products,'products changes')
    }
  }, []);

  const [customVariant, setCustomVariant] = useState([])
  useEffect(() => {
    if (localStorage.getItem("variant")) {
      const variation = localStorage.getItem("variant");

      const myVariant = JSON.parse(variation);
      setCustomVariant(myVariant);
      // console.log(products,'products changes')
    }
  }, [localStorage.getItem("variant")]);

  // const [indexNo, setIndexNo] = useState(null)


  const [isLoading, setIsLoading] = useState(false);

  const addingItems = () => {
    setIsLoading(true);
    addItemToCart((res) => {
      setIsLoading(false);
      setIsEmpty(false);
    });
  };

  const editProducts = (id, idx) => {
    console.log(idx,'index number')
    const pop = JSON.parse(localStorage.getItem("popupItems"));
    // console.log(id)
    const filtered = pop.filter((item) => item.itemNumber == id.itemNumber);
    const result = filtered[0];
    // console.log(result,'data fileererer')
    const final = JSON.stringify(result);
    // console.log(final,'final result')
    setData(result);
    localStorage.setItem("initialProductData", final);
    setClicked(true);
  };

  const [aData, setA] = useState([]);
  const getFromPop = (product) => {
    const data = JSON.parse(localStorage.getItem("cart"));
    const flt = data.filter((itm) => itm.variantId == product.variantId);
    setA(flt[0]);
  };

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
    // console.log(sumOfTotal, "sumtotal");
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
          setEditMode(false);
          setCartOpen(false)

          // console.log(res.result[0].cartItems, "cart items");
          localStorage.removeItem('variant')
        }
      });
  };

  return (
    <div className="sidepanel">
      <Offcanvas
        show={showPanel}
        onHide={() => {
          if (cartProducts.length > 0) {
            addItemToCart();
            localStorage.removeItem('variant')  
            setEditMode(false)
            setCartOpen(false)
          } else {
            setShowPanel(false);
            setNotEditable(true);
            localStorage.removeItem('variant')
            setEditMode(false)
            setCartOpen(false)
          }
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
                customVariant={customVariant}
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
                noHover={noHover}
                // setIndexNo={setIndexNo}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidePanel;
