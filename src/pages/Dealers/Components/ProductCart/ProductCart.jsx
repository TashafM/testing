import React from "react";
import noItem from "../../../../assets/images/item-not-added.png";
import editIcon from "../../../../assets/images/edit-icon.png";

import { Button, FormControl, FormGroup, Table } from "react-bootstrap";
import "./productcart.scss";
import ItemRow from "../ItemRow/ItemRow";
import { useContext } from "react";
import { AddProducts } from "../../Dealers";
import ArrowLink from "../ArrowLink/ArrowLink";
import { useState } from "react";
import SeeAllProducts from "../SeeAllProducts/SeeAllProducts";
import AddressPopup from "../AddressPopup/AddressPopup";
import OtherInstructions from "../OtherInstructions/OtherInstructions";

const ProductCart = () => {
  const { isEmpty } = useContext(AddProducts);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const handleSetProduct = () => {
    setShowAllProducts(true)
  }
  const handleClose = () => setShowAllProducts(false)

  //------------------ADRESS POPUP--------------------------
  const [showAddress, setShowAddress] = useState(false);
  const handleAddress = () => setShowAddress(true);
  const handleCloseAddress = () => setShowAddress(false);
  //--------------------------------------------------------
//------------------OTHER INSTRUCTIONS POPUP--------------------------
const [showInstruction, setShowInstruction] = useState(false);
const handleInstruction = () => setShowInstruction(true);
const handleCloseInstruction = () => setShowInstruction(false);
//--------------------------------------------------------

  return (
    <>
      {/* <div className="heading-div-cart">
        <div>Products</div>
        <div>Quantity</div>
        <div>Price</div>
      </div> */}
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
            <ItemRow disableDelete={true} pr20={true} />
            <ItemRow disableDelete={true} pr20={true} />
            <ItemRow disableDelete={true} pr20={true} />
            <ItemRow disableDelete={true} pr20={true} />
          </tbody>
        )}
      </Table>
      {!isEmpty && (
        <>
          <div className="dashed-line"></div>
          <div className="edit-see-all">
            <div className="edit">
              <img src={editIcon} alt="" />
              <span className="text">Edit</span>
            </div>
            <ArrowLink title={"See all"} onClick={handleSetProduct}/>
          </div>
          <SeeAllProducts show={showAllProducts} handleClose={handleClose}/>

          {/**OTHER INSTRUCTIONS */}
          <div className="other-instructions">
            <div className="text">Other Instructions</div>
            <ArrowLink title={"Add"} onClick={handleInstruction}/>
          </div>
          <OtherInstructions show={showInstruction} handleClose={handleCloseInstruction}/>


          {/**PURCHASE ORDER */}
          <div className="purchase-order">
            <div className="title">Purchase Order Number:</div>
            <FormControl type="text" />
          </div>

          {/**ADDRESS */}
          <div className="addresses">
            <div className="title">Addresses:</div>
            <ArrowLink title={"View"} onClick={handleAddress}/>
          </div>
          <div className="display-address">
            Lorem ipsum dolor sit amet adipi adik...
          </div>
          <div className="dashed-line"></div>
          <AddressPopup show={showAddress} handleClose={handleCloseAddress}/>


          {/**ITEMS TOTAL */}
          <div className="item-rate-div">
            <div>Items total</div>
            <div>500</div>
          </div>
          <div className="item-rate-div">
            <div>Taxes</div>
            <div>$100</div>
          </div>
          <div className="simple-line"></div>
          <div className="total-rate-div">
            <div>Order total</div>
            <div>$1600</div>
          </div>

          {/**PLACE ORDER - CLEAR CART */}
          <div className="cart-btns">
            <Button className="clear">Clear Cart</Button>
            <Button className="place-order">Place Order</Button>
          </div>
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