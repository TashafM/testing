import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import quote from "../../../assets/images/quote.png";

import "./Information.scss";
import CardHead from "./Component/CardHead";
import Badges from "../../../components/Input/Badges";
import { useOutletContext } from "react-router-dom";
import CardContacts from "./Component/CardContacts";
import CardAddress from "./Component/CardAddress";
import CardHOpration from "./Component/CardHOpration";
import CardSocial from "./Component/CardSocial";
import CardCompStatement from "./Component/CardCompStatement";
import CardOtherInfo from "./Component/CardOtherInfo";

function Information() {
  const [data] = useOutletContext();

  console.log(data);
  return (
    <Container fluid>
      <Row className="info-container">
        <CardContacts />

        <CardAddress />

        <CardHOpration />
        <CardSocial />

        <CardCompStatement />
        <CardOtherInfo />
      </Row>
    </Container>
  );
}

export default Information;
