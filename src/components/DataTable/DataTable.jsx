/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./DataTable.scss";
import previous from "../../assets/images/previous.svg";
import next from "../../assets/images/next.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import axios from "axios";

const DataTable = ({
  columns,
  data,
  handleSelect,
  deleteSelectedItems,
  selected,
  setSelected,
  getDataFunc,
  api,
  selectedIds,
  setSelectedIds,
  handleCheckboxChange,
}) => {
  return (
    <>
      <div className="table-container">
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              <th></th>
              {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="scroll-body">
            {data.map((row, id) => (
              <>
                <tr key={row.id} className="tr-body">
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                  </td>
                  {columns.map((col, id) => (
                    <>
                      <td key={id}>
                        <>
                          {row[col.value].length <= 10
                            ? row[col.value]
                            : row[col.value].slice(0, 10) + "..."}
                        </>
                      </td>
                    </>
                  ))}
                  {/* <td>
                    <button onClick={()=>deleteHandler(row.id)}>delete</button>
                  </td> */}
                </tr>
              </>
            ))}
          </tbody>
          <div className="navigator">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </Table>
      </div>
    </>
  );
};

export default DataTable;
