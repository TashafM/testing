import React from "react";
import "./Styles.scss";

function ContentPrivacy({ data }) {
  console.log("dsh",data)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 col-lg-9 col-md-12 p-0">
          {data.map((item, index) => {
            return (
              <div>
                <p className="privacy-title">
                  {index + 1}
                  {". "}
                  {item.question}
                </p>
                <p className="privacy-desc">{item.answer}</p>
              </div>
            );
          })}
        </div>
        <div className="col-2 col-lg-3 col-md-0 p-0 ">
          <div className="table-of-content">
            <div className="title">Table of Contents:</div>
            {data.map((item, index) => {
              return (
                <div className="content" key={index}>
                  <a href="#">{item.question}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPrivacy;
