import React from "react";
import "./orderlisttable.scss";
import { Table } from "react-bootstrap";
import ItemRow from "../ItemRow/ItemRow";

const OrderListTable = ({ disableDelete, data, setData, editProducts, getFromPop }) => {
  // const del = (val) => {
  //   const filtered = data.filter((item) => item.variantId !== val);
  //   setData(filtered);
  // };

  const del = (val) => {
    const filtered = data.filter((item) => item.variantId !== val);
    setData(filtered);
    localStorage.setItem("cartProducts", JSON.stringify(filtered)); // Add this line to update local storage
  };

  return (
    <Table>
      <thead className="header">
        <tr>
          <th>Products</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="right-side-body">
          {data.map((item, id) => (
            <ItemRow
              disableDelete={disableDelete}
              data={item}
              removeItem={del}
              editProducts={editProducts}
              getFromPop={getFromPop}
            />
          ))}
      </tbody>
    </Table>
  );
};

export default OrderListTable;
