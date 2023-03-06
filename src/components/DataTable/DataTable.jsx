/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./DataTable.scss";
import previous from "../../assets/images/previous.svg";
import next from "../../assets/images/next.svg";
import Util from "../UtilityFunctions/UtilityFunctions";
import deleteBtn from "../../assets/images/deleteBtn.svg";
import restoreBtn from "../../assets/images/restoreBtn.svg";
import rDisable from "../../assets/images/rDisable.svg";
import rEnable from "../../assets/images/rEnable.svg";

import UpdateMember from "../UpdateMember/UpdateMember";
import axios from "axios";
import UpdatePartners from "../../pages/Home/Partners/UpdatePartners/UpdatePartners";
import ScrollBtn from "../ScrollBtn/ScrollBtn";
import { useNavigate } from "react-router-dom";

const DataTable = ({
  columns,
  datum,
  selectedIds,
  setSelectedIds,
  api,
  api2,
  getDataFunc,
  getDataFunc2,
  delActive,
  resActive,
  ratings,
  setRatingUser,
  ratingUser,
  teamMembers,
  partners,
}) => {
  const myRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const data = datum.sort((a, b) => b.id - a.id);
  // const data = datum;
  const navigate = useNavigate();

  const gotoNew = (val) => {
    navigate(`/home/partners/detail/about`, { state: { data: val } });
  };

  const myUtil = new Util();

  return (
    <div className="dataTable">
      <div className="table-container" ref={myRef}>
        <Table hover>
          <thead className="table-head">
            <tr className="tr-head">
              <th className="checkbox-div">
                <input
                  type="checkbox"
                  // checked={selectedIds.includes(row.id)}
                  onChange={(e) =>
                    myUtil.handleCheckboxChange(
                      selectedIds,
                      row,
                      setSelectedIds,
                      setRatingUser
                    )
                  }
                />
              </th>
              {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
              ))}
              <th className="fixed-column">Actions</th>
            </tr>
          </thead>
          <tbody className="scroll-body">
            {data.map((row, id) => (
              <>
                <tr
                  key={row.id}
                  className="tr-body"
                  // onClick={() => (partners ? gotoNew(row) : null)}
                >
                  <td className="checkbox-div">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={(e) =>
                        myUtil.handleCheckboxChange(
                          selectedIds,
                          row,
                          setSelectedIds,
                          setRatingUser
                        )
                      }
                    />
                  </td>
                  {columns.map((col, id) => (
                    <>
                      <td
                        key={id}
                        onClick={() => (partners ? gotoNew(row) : null)}
                      >
                        <>
                          {row[col.value] == "" ? (
                            "--"
                          ) : (
                            <>
                              {row[col.value].length <= 10
                                ? row[col.value]
                                : row[col.value].slice(0, 10) + "..."}
                            </>
                          )}
                        </>
                        <></>
                      </td>
                    </>
                  ))}
                  <td className="action-div fixed-column">
                    {ratings &&
                      (row.rating ? (
                        <span className="icon-desc">
                          <img
                            src={rEnable}
                            onClick={(e) => {
                              e.stopPropagation();
                              myUtil.deactiveRatings(api, row.id, getDataFunc);
                            }}
                          />
                        </span>
                      ) : (
                        <span className="icon-desc">
                          <img
                            src={rDisable}
                            onClick={(e) => {
                              e.stopPropagation();
                              myUtil.activeRatings(api, row.id, getDataFunc);
                            }}
                          />
                        </span>
                      ))}
                    <span className="editBtn">
                      {teamMembers && (
                        <UpdateMember
                          editData={row}
                          api={api}
                          getDataFunc={getDataFunc}
                        />
                      )}
                      {partners && (
                        <UpdatePartners
                          editData={row}
                          api={api}
                          getDataFunc={getDataFunc}
                        />
                      )}
                    </span>
                    {resActive && (
                      <span className="icon-desc">
                        <img
                          src={restoreBtn}
                          onClick={() =>
                            myUtil.restoreSingle(
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
                          onClick={
                            () =>
                              myUtil.deleteSingle(
                                row,
                                api,
                                api2,
                                getDataFunc,
                                getDataFunc2,
                                setSelectedIds
                              )
                            // myUtil.hello()
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
      <ScrollBtn myRef={myRef} setScrollX={setScrollX} />
    </div>
  );
};

export default DataTable;
