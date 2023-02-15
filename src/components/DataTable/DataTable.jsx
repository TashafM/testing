/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import "./DataTable.scss";
import previous from "../../assets/images/previous.svg";
import next from "../../assets/images/next.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import edit from "../../assets/images/edit.svg";
import UpdateMember from "../UpdateMember/UpdateMember";

const DataTable = ({ columns, data, selectedIds, handleCheckboxChange }) => {
  const myRef = useRef(null);

  const setToLocal = (values) => {
    console.log(values )
  };

  return (
    <>
      <div className="table-container" ref={myRef}>
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              <th></th>
              {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
              ))}
              <th></th>
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
                  <td>
                    <span className="editBtn" onClick={() => setToLocal(row)}>
                      {/* <img src={edit} alt="" onClick={()=>setClick(true)}/> */}
                      <UpdateMember />
                    </span>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DataTable;
