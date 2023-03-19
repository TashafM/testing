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
import BtnTitleIcon from "../../../components/Button/BtnTitleIcon";
import { useContextProvider } from "../../../context";

function Information() {
  const [data] = useOutletContext();
  const { setOpenDrawer } = useContextProvider();

  if (!data.length) {
    return <div>Company not availvable</div>;
  }

  return (
    <Container fluid>
      <Row className="info-container">
        <Col className="card-wrapper" md={6} xl={4}>
          {data[0].contactUs.length ? (
            <CardContacts
              type={"Contact"}
              contactUs={data[0].contactUs[0]}
              title="Contact"
              onClick={() => {
                setOpenDrawer({
                  type: "Contact",
                  open: true,
                  data: [...data[0].contactUs],
                });
              }}
            />
          ) : (
            <div className="card-cont default-height d-flex align-items-center justify-content-center">
              <BtnTitleIcon
                title="Add Contacts"
                onClick={() => {
                  setOpenDrawer({ open: true, type: "Add Contacts" });
                }}
              />
            </div>
          )}
        </Col>
        <CardAddress
          onClick={() => {
            setOpenDrawer({
              type: "Address",
              open: true,
              data: data[0].registeredAddress,
            });
          }}
          registeredAddress={data[0].registeredAddress}
        />

        <CardHOpration hoursOfOperation={data[0].hoursOfOperation} />
        <CardSocial socialMediaDetails={data[0].socialMediaDetails} />

        <CardCompStatement companyStatement={data[0].companyStatement} />
        <CardOtherInfo otherInfo={data[0].otherInfo} />
      </Row>
    </Container>
  );
}

export default Information;
