/*eslint-disable */
import React, { useEffect, useState } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { Table } from "react-bootstrap";
import "./DataTable.scss";

const DataTable = ({ data, columns }) => {
  const members = data;

  const [check, setCheck] = useState([]);
  const getItem = (val) => {
    setCheck(val);
    // alert(val)
  };

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
                              {/* <ImCheckboxUnchecked className={`${row.id == check ? 'active': ''}`}
                                onClick={() => getItem(row.id)}
                              /> */}
                              {row.id == check ? (
                                <ImCheckboxChecked />
                              ) : (
                                <ImCheckboxUnchecked
                                  onClick={() => getItem(row.id)}
                                />
                              )}
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
