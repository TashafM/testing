import React from "react";
import "./seeallproducts.scss";
import { useState } from "react";
import { Offcanvas, Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const SeeAllProducts = ({ show, handleClose }) => {
  return (
    <div className="sidepanel">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="seeAll"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Table>
              <thead className="seeall-header">
                <tr>
                  <th>Products</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
                <tbody className="right-side-body">
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                  <ItemRow disableDelete={true} popupScreen={true}/>
                </tbody>
            </Table>
          </div>
          {/* Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc. */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SeeAllProducts;
