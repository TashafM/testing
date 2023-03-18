import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Information.scss";
import { useOutletContext } from "react-router-dom";
import CardContacts from "./Component/CardContacts";
import CardAddress from "./Component/CardAddress";
import CardHOpration from "./Component/CardHOpration";
import CardSocial from "./Component/CardSocial";
import CardCompStatement from "./Component/CardCompStatement";
import CardOtherInfo from "./Component/CardOtherInfo";
import { Col } from "react-bootstrap";

function Information() {
  const [data] = useOutletContext();

  if (!data.length) {
    return <div>Company not availvable</div>;
  }

  return (
    <Container fluid>
      <Row className="info-container">
        <Col className="card-wrapper" md={6} xl={4}>
          <CardContacts
            contactUs={data[0].contactUs}
            newContact={data[0]?.contactUs?.length}
          />
        </Col>
        <CardAddress registeredAddress={data[0].registeredAddress} />

        <CardHOpration hoursOfOperation={data[0].hoursOfOperation} />
        <CardSocial socialMediaDetails={data[0].socialMediaDetails} />

        <CardCompStatement companyStatement={data[0].companyStatement} />
        <CardOtherInfo otherInfo={data[0].otherInfo} />
      </Row>
    </Container>
  );
}

export default Information;
