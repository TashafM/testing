import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./DataTable.scss";

const DataTable = ({ data, columns }) => {
  const members = data;

  if (!members) {
    return <div>Loading...</div>;
  } else
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              {columns.map((col,idx) => (
                <th key={idx}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={col}>{row[col.value]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
};

export default DataTable;
