/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import "./DataTable.scss";
import previous from "../../assets/images/previous.svg";
import next from "../../assets/images/next.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import deleteBtn from "../../assets/images/deleteBtn.svg";
import restoreBtn from "../../assets/images/restoreBtn.svg";

import UpdateMember from "../UpdateMember/UpdateMember";
import ReactTooltip from "react-tooltip";

const DataTable = ({
  columns,
  datum,
  selectedIds,
  setSelectedIds,
  handleCheckboxChange,
  api,
  api2,
  getDataFunc,
  getDataFunc2,
  delActive,
  resActive,
  singleOperation,
}) => {
  const myRef = useRef(null);
  const data = datum.sort((a, b) => b.id - a.id);

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
              <th>Actions</th>
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
                      // onChange={() => handleCheckboxChange(row.id)}
                      onChange={() =>
                        Util.handleCheckboxChange(
                          selectedIds,
                          row.id,
                          setSelectedIds
                        )
                      }
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
                  <td className="action-div">
                    <span className="editBtn">
                      <UpdateMember
                        editData={row}
                        api={api}
                        getDataFunc={getDataFunc}
                      />
                    </span>
                    {resActive && (
                      <span className="icon-desc">
                        <img
                          src={restoreBtn}
                          alt=""
                          onClick={() =>
                            Util.restoreSingle(
                              row,
                              api,
                              api2,
                              getDataFunc,
                              getDataFunc2,
                              setSelectedIds
                            )
                          }
                        />
                      </span>
                    )}
                    {delActive && (
                      <span className="icon-desc">
                        <img
                          src={deleteBtn}
                          alt=""
                          onClick={() =>
                            Util.deleteSingle(
                              row,
                              api,
                              api2,
                              getDataFunc,
                              getDataFunc2,
                              setSelectedIds
                            )
                          }
                        />
                      </span>
                    )}
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
