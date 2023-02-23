import React from "react";
import { Table } from "react-bootstrap";
import pdf from "../../../../assets/images/pdf.svg";
import icon from "../../../../assets/images/icon.svg";
import "../../../../components/DataTable/DataTable";
import "./styles.scss";
function Applications() {
  return (
    <div className="table-container mt-5">
      <Table hover>
        <thead className="table-head">
          <tr className="tr-head ">
            <td className="td-head">Candidate</td>
            <td className="td-head">Current Position</td>
            <td className="td-head">Applied On</td>
            <td className="td-head"></td>
          </tr>
        </thead>
        <tbody className="scroll-body">
          <tr className="tr-body">
            <td>
              <div>
                <img className="me-3" src={icon} alt="icon" />
                <a>Eva Knopps</a>
              </div>
            </td>
            <td>Application Developer</td>
            <td>20/01/2023</td>
            <td>
              <div>
                <img className="me-3" src={pdf} alt="Download" />
                <a href="#">Download resume</a>
              </div>
            </td>
          </tr>
          <tr className="tr-body">
            <td>
              <div>
                <img className="me-3" src={icon} alt="icon" />
                <a>Eva Knopps</a>
              </div>
            </td>

            <td>Application Developer</td>
            <td>20/01/2023</td>
            <td>
              <div>
                <img className="me-3" src={pdf} alt="Download" />
                <a href="#">Download resume</a>
              </div>
            </td>
          </tr>
          <tr className="tr-body">
            <td>
              <div>
                <img className="me-3" src={icon} alt="icon" />
                <a>Eva Knopps</a>
              </div>
            </td>

            <td>Application Developer</td>
            <td>20/01/2023</td>
            <td>
              <div>
                <img className="me-3" src={pdf} alt="Download" />
                <a href="#">Download resume</a>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Applications;
