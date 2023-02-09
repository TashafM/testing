/*eslint-disable */
import React, { useEffect, useState } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { Table } from "react-bootstrap";
import "./DataTable.scss";

const DataTable = ({ data, columns }) => {
  const members = data;

  const [check, setCheck] = useState(false)
  const getItem = () => {
    setCheck(true)
  }

  if (!members) {
    return <div>Loading...</div>;
  } else
    return (
      <>
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
              {data.map((row, id) => (
                <>
                  <tr key={row.id} className="tr-body">
                    {columns.map((col, id) => (
                      <>
                        <td key={id}>
                          {row[col.value] == undefined ? (
                            <>
                              <ImCheckboxUnchecked
                                onClick={() => alert(row.id)}
                              />
                            </>
                          ) : (
                            row[col.value]
                          )}
                        </td>
                      </>
                    ))}
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
