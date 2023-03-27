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
import InfiniteScroll from "react-infinite-scroll-component";

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
  dataLength,
  next,
  hasMore,
  restoreApi,
}) => {
  const myRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const data = datum.sort((a, b) => b.id - a.id);
  const companyUserCode = localStorage.getItem("usercode");
  // const data = datum;
  const navigate = useNavigate();

  // Function to handle "select all" checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(data.map((row) => row.teamMemberId));
    } else {
      setSelectedIds([]);
    }
  };

  const gotoNew = (val) => {
    navigate(`/home/partners/detail/about`, { state: { data: val } });
  };

  const myUtil = new Util();

  return (
    <div className="dataTable">
      <InfiniteScroll
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
        // loader={<h4>Loading...</h4>}
      >
        <div className="table-container" ref={myRef}>
          <Table hover>
            <thead className="table-head">
              <tr className="tr-head">
                <th className="checkbox-div">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === data.length}
                    onChange={handleSelectAll}
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
                  {/* {console.log(row.teamMemberId,'---------')} */}
                  <tr
                    key={row.teamMemberId}
                    className="tr-body"
                    // onClick={() => (partners ? gotoNew(row) : null)}
                  >
                    <td className="checkbox-div">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(row.teamMemberId)}
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
                        
                        <td key={id}>
                          {col.value.includes(".") ? (
                            col.value
                              .split(".")
                              .reduce((obj, key) => obj[key], row)
                          ) : Array.isArray(row[col.value]) ? (
                            <>
                              {row[col.value][0].value}{" "}
                              <span>{row[col.value].length}</span>
                            </>
                          ) : (
                            row[col.value]
                          )}
                        </td>
                      </>
                    ))}
                    <td className="action-div fixed-column">
                      {ratings &&
                        (row.showRatings ? (
                          <span className="icon-desc">
                            <img
                              src={rEnable}
                              onClick={(e) => {
                                e.stopPropagation();
                                myUtil.deactiveRatings(row, getDataFunc);
                              }}
                            />
                          </span>
                        ) : (
                          <span className="icon-desc">
                            <img
                              src={rDisable}
                              onClick={(e) => {
                                e.stopPropagation();
                                myUtil.activeRatings(row, getDataFunc);
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
                            isCurrent={ratings}
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
                                restoreApi,
                                getDataFunc
                                
                              )
                            }
                          />
                        </span>
                      )}
                      {delActive && (
                        <span className="icon-desc">
                          <img
                            src={deleteBtn}
                            onClick={() => {
                              myUtil.teamMemberSingleDelete(row, getDataFunc);
                            }}
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
      </InfiniteScroll>
      <ScrollBtn myRef={myRef} setScrollX={setScrollX} />
    </div>
  );
};

export default DataTable;
