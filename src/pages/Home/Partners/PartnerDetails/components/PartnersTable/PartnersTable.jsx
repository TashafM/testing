import React from "react";
import { Col, Row } from "react-bootstrap";

const PartnersTable = ({ staticData, data, title }) => {
  return (
    <>
      <div className="title">{title}:</div>
      <div>
        <Row className="row-inside">
          {staticData.map((item, val) =>
            item.check ? (
              <Col
                lg={6}
                className="item-div "
                md={6}
                sm={6}
              >
                <div className="item-title">{item.name}</div>
                <div className="item-desc">{data[item.value]}</div>
              </Col>
            ) : (
              <Col
                lg={2}
                className="item-div "
                md={3}
                sm={4}
              >
                <div className="item-title">{item.name}</div>
                <div className="item-desc">{data[item.value]}</div>
              </Col>
            )
          )}
        </Row>
      </div>
    </>
  );
};

export default PartnersTable;
