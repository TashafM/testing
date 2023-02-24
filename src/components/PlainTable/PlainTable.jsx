/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './PlainTable.scss'

const PlainTable = ({
  columns,
  datum,
}) => {
//   const data = datum.sort((a, b) => b.id - a.id);  -----------> for sorting we can use this
  const navigate = useNavigate();

//   const gotoNew = (val) => {
//     navigate(`/home/partners/detail/about`, { state: { data: val } });
//   };

  const dummy = (a) => console.log(a);

  return (
    <div className="plainTable">
      <div className="table-container">
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="scroll-body">
            {datum.map((row, id) => (
              <>
                <tr
                  key={row.id}
                  className="tr-body"
                >
                  {columns.map((col, id) => (
                    <>
                      <td
                        key={id}
                      >
                        <>
                          {/* {row[col.value] == "" ? (
                            "--"
                          ) : (
                            <>
                              {row[col.value].length <= 10
                                ? row[col.value]
                                : row[col.value].slice(0, 10) + "..."}
                            </>
                          )} */}
                          {row[col.value]}
                        </>
                      </td>
                    </>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <ScrollBtn myRef={myRef} setScrollX={setScrollX} /> */}
    </div>
  );
};

export default PlainTable;


