import React, { useEffect } from "react";
import noItem from "../../../../assets/images/item-not-added.png";
import editIcon from "../../../../assets/images/edit-icon.png";

import { Button, FormControl, FormGroup, Modal, Table } from "react-bootstrap";
import "./productcart.scss";
import ItemRow from "../ItemRow/ItemRow";
import { useContext } from "react";
import { AddProducts, GlobalSidePanel } from "../../Dealers";
import ArrowLink from "../ArrowLink/ArrowLink";
import { useState } from "react";
import SeeAllProducts from "../SeeAllProducts/SeeAllProducts";
import AddressPopup from "../AddressPopup/AddressPopup";
import OtherInstructions from "../OtherInstructions/OtherInstructions";
import OrderPlaced from "../../Modal/OrderPlaced/OrderPlaced";
import { axiosInstance } from "../../../../helper/axios";
import { API } from "../../../../helper/API";
import { useLocation } from "react-router-dom";

const ProductCart = () => {

  const {showPanel, setShowPanel} = useContext(GlobalSidePanel)
  const location = useLocation()
  
  // const { isEmpty, setIsEmpty } = useContext(AddProducts);

  //==========================BILLING-ADDRESS | SHIPPING-ADDRESS==========================
  const [billingAddress, setBillingAddress] = useState([]);
  const [shippingAddress, setShippingAddress] = useState([]);
  const [defaultShipping, setDefaultShipping] = useState([]);
  const [defaultBilling, setDefaultBilling] = useState([]);


  const [showAllProducts, setShowAllProducts] = useState(false);
  const handleSetProduct = () => {
    setShowAllProducts(true);
  };
  const handleClose = () => {
    setShowAllProducts(false);
  };

  //------------------ADRESS POPUP--------------------------
  const [showAddress, setShowAddress] = useState(false);
  const [addAddress, setAddress] = useState(true);
  const handleAddress = () => {
    setShowAddress(true);
  };
  const handleCloseAddress = () => {
    setShowAddress(false);
    setAddress(true);
    setShippingAddress(defaultShipping);
    setBillingAddress(defaultBilling);
  };

  const [displayAddress, setDisplayAddress] = useState([])

  //--------------------------------------------------------
  //------------------OTHER INSTRUCTIONS POPUP--------------------------
  const [showInstruction, setShowInstruction] = useState(false);
  const handleInstruction = () => setShowInstruction(true);
  const handleCloseInstruction = () => setShowInstruction(false);
  //--------------------------------------------------------

  //------------------------------------------------- modal
  const [modalShow, setModalShow] = useState(false);

  //------------------------------------------
  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [itemTotal, setItemTotal] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const currencySymbol = localStorage.getItem("currencySymbol");

  const emptyCart = () => {
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );
    axiosInstance
      .post(API.DEALER_CLEAR_CART, { principalCompanyUserCode })
      .then((res) => res.success && setIsEmpty(true));
  };

  useEffect(() => {
    const getViewCart = () => {
      const principalCompanyUserCode = localStorage.getItem(
        "principalCompanyUserCode"
      );
      axiosInstance
        .post(API.VIEW_DEALER_CART, { principalCompanyUserCode })
        .then((res) => {
          setCartItem(res.result[0].cartItems);
          setCart(res.result[0]);
          setBillingAddress(res.result[0].billingAddress);
          setShippingAddress(res.result[0].shippingAddress);
          setDefaultBilling(res.result[0].billingAddress);
          setDefaultShipping(res.result[0].shippingAddress);

          if (res.result[0].cartItems.length > 0) {
            setIsEmpty(false);
          }
          const sumOfTotal = res.result[0].cartItems.reduce(
            (acc, item) => acc + Number(item.totalPrice),
            0
          );
          setItemTotal(sumOfTotal);

          const selectedAddress = res.result[0].shippingAddress.filter(address => address.selected === true);
          console.log(...selectedAddress,'selected address')
          setDisplayAddress(...selectedAddress)
        });
    };

    getViewCart();
  }, [showPanel]);

  //==============================================SET ADDRESS API
  const dummy = () => {
    const modifiedBillingAddress = billingAddress.map(({ type, ...rest }) => rest);
    const modifiedShippingAddress = shippingAddress.map(({ type, ...rest }) => rest);
  
    axiosInstance.post(API.EDIT_CART_ADDRESS,{
      principalCompanyUserCode: localStorage.getItem('principalCompanyUserCode'),
      billingAddress: modifiedBillingAddress,
      shippingAddress: modifiedShippingAddress,
    }).then((res)=>{

      const selectedAddress = res.result[0].shippingAddress.filter(address => address.selected === true);
      console.log(...selectedAddress,'selected address')
      setDisplayAddress(...selectedAddress)
  // Return the selected address, or null if none found
  // return selectedAddress || null;
    })
  };
  
const {fullName, floorNumber,block , street, city, state, country, zipCode, contactNumber} = displayAddress
  return (
    <>
      <Table>
        <thead className="productcart-header">
          <tr>
            <th>Products</th>
            <th>Quantity</th>
            <th className="price">Price</th>
          </tr>
        </thead>
        {!isEmpty && (
          <tbody className="right-side-body">
            {cartItem.slice(0, 5).map((item, id) => (
              <ItemRow disableDelete pr20 data={item} />
            ))}
          </tbody>
        )}
      </Table>
      {!isEmpty && (
        <>
          <div className="dashed-line"></div>
          <div className="edit-see-all">
            <div className="edit" onClick={() => {
              setShowPanel(true)
              console.log('hiii')
            }}>
              <img src={editIcon} alt="" />
              <span className="text">Edit</span>
            </div>
            <ArrowLink title={"See all"} onClick={handleSetProduct} />
          </div>
          <SeeAllProducts
            show={showAllProducts}
            handleClose={handleClose}
            data={cartItem}
          />

          {/**OTHER INSTRUCTIONS */}
          <div className="other-instructions">
            <div className="text">Other Instructions</div>
            <ArrowLink title={"Add"} onClick={handleInstruction} />
          </div>
          <OtherInstructions
            show={showInstruction}
            handleClose={handleCloseInstruction}
          />
          {console.log(showPanel,'showPanel fro global')}
          {/**PURCHASE ORDER */}
          <div className="purchase-order">
            <div className="title">Purchase Order Number:</div>
            <FormControl type="text" />
          </div>

          {/**ADDRESS */}
          <div className="addresses">
            <div className="title">Addresses:</div>
            <ArrowLink title={"View"} onClick={handleAddress} />
          </div>
          <div className="display-address">
            {`${fullName}, ${floorNumber}, ${block}, ${street}, ${city}, ${state}, ${country}, ${zipCode}, ${contactNumber}`}
          </div>
          <div className="dashed-line"></div>
          <AddressPopup
            show={showAddress}
            handleClose={handleCloseAddress}
            addAddress={addAddress}
            setAddress={setAddress}
            billingAddress={billingAddress}
            shippingAddress={shippingAddress}
            setShippingAddress={setShippingAddress}
            setBillingAddress={setBillingAddress}
            callApi={dummy}
            defaultShipping={defaultShipping}
            setDisplayAddress={setDisplayAddress}
            // data={cart}
          />

          {/**ITEMS TOTAL */}
          <div className="item-rate-div">
            <div>Items total</div>
            <div>
              {currencySymbol}
              {itemTotal}
            </div>
          </div>
          <div className="item-rate-div">
            <div>Taxes</div>
            <div>
              {currencySymbol}
              {cart.taxAmount}
            </div>
          </div>
          <div className="simple-line"></div>
          <div className="total-rate-div">
            <div>Order total</div>
            <div>
              {currencySymbol}
              {cart.totalAmount}
            </div>
          </div>

          {/**PLACE ORDER - CLEAR CART */}
          <div className="cart-btns">
            <Button className="clear" onClick={emptyCart}>
              Clear Cart
            </Button>
            <Button className="place-order" onClick={() => setModalShow(true)}>
              Place Order
            </Button>
          </div>
          <OrderPlaced modalShow={modalShow} setModalShow={setModalShow} />
        </>
      )}

      {isEmpty && (
        <div className="no-item">
          <img src={noItem} alt="" />
          <div className="no-text">Items not added yet </div>
        </div>
      )}
    </>
  );
};

export default ProductCart;
