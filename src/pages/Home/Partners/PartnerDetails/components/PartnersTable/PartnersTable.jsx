import React from "react";
import { Col, Row } from "react-bootstrap";

const PartnersTable = ({staticData, data, title}) => {
  return (
    <>
      <div className="title">{title}:</div>
      <div>
        <Row className="row-inside">
          {staticData.map((item, val) => (
            <Col
              lg={2}
              className="item-div "
              // style={{ margin: "20px 0", marginRight: "1%" }}
              md={3}
              sm={4}
            >
              <div className="item-title">{item.name}</div>
              <div className="item-desc">{data[item.value]}</div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default PartnersTable;
