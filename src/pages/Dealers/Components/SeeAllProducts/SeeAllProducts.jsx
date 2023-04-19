import React from "react";
import "./seeallproducts.scss";
import { Offcanvas, Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const SeeAllProducts = ({ show, handleClose, data }) => {
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
                {data.map((item, id) => (
                  <ItemRow data={item} popupScreen disableDelete />
                ))}
              </tbody>
            </Table>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SeeAllProducts;
