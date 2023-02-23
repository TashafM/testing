import React from "react";
import "./Styles.scss";

function ContentPrivacy({ data }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          {data.map((item, index) => {
            return (
              <div>
                <p className="privacy-title">
                  {index + 1}
                  {". "}
                  {item.title}
                </p>
                <p className="privacy-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="col-2 ">
          <div className="table-of-content">
            <div className="title">Table of Contents:</div>
            {data.map((item, index) => {
              return (
                <div className="content" key={item.title}>
                  <a href="#">{item.title}</a>
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
