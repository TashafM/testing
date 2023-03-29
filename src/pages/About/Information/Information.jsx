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
import EditAddress from "./Component/EditAddress";
import { useState } from "react";
import EditSocialMedia from "./Component/EditSocialMedia";
import EditStatement from "./Component/EditStatement";
import EditOperations from "./Component/EditOperations";
import EditOtherInfo from "./Component/EditOtherInfo";

function Information() {
  const [data, setData] = useOutletContext();
  const { setOpenDrawer } = useContextProvider();
  const [openAddress, setopenAddress] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  const [openStatement, setOpenStatement] = useState(false);
  const [openOperation, setOpenOperation] = useState(false);
  const [openotherInfor, setOpenOtherInfor] = useState(false);

  const onUpdate = (cache) => {
    setData(cache);
  };
  if (!data.length) {
    return <div>Company not availvable</div>;
  }

  return (
    <Container fluid>
      <Row className="info-container">
        <Col className="card-wrapper" md={6} xl={4}>
          {data[0]?.contactUs?.length ? (
            <CardContacts
              type={"Contact"}
              contactUs={data[0]?.contactUs[0] ?? {}}
              length={data[0]?.contactUs?.length ?? 0}
              title="Contact"
              onClick={() => {
                setOpenDrawer({
                  type: "Contacts",
                  open: true,
                  data: [...data[0]?.contactUs],
                  callback: onUpdate,
                  completeData: data,
                });
              }}
            />
          ) : (
            <div className="card-cont default-height d-flex align-items-center justify-content-center">
              <BtnTitleIcon
                title="Add Contacts"
                onClick={() => {
                  setOpenDrawer({
                    open: true,
                    type: "Add Contact",
                    data: {},
                    callback: onUpdate,
                    completeData: data,
                  });
                }}
              />
            </div>
          )}
        </Col>
        <CardAddress
          onClick={() => {
            setopenAddress(true);
          }}
          registeredAddress={data[0]?.registeredAddress ?? {}}
        />
        <EditAddress
          show={openAddress}
          handleClose={() => {
            setopenAddress(false);
          }}
          data={data[0]?.registeredAddress ?? {}}
          completeData={data}
          onUpdate={(data) => {
            setData(data);
          }}
        />

        <CardHOpration
          hoursOfOperation={data[0].hoursOfOperation}
          onClick={() => {
            setOpenOperation(true);
            // setOpenDrawer({
            //   type: "Hours of operations",
            //   title: "Hours of operations",
            //   open: true,
            //   data: data[0]?.hoursOfOperation ?? [],
            // });
          }}
        />

        <EditOperations
          show={openOperation}
          handleClose={() => {
            setOpenOperation(false);
          }}
          data={data[0]?.hoursOfOperation ?? {}}
          completeData={data}
          onUpdate={(data) => {
            setData(data);
          }}
        />
        <CardSocial
          socialMediaDetails={data[0].socialMediaDetails ?? []}
          onClick={() => {
            setOpenSocial(true);
            // setOpenDrawer({
            //   type: "Social Media & Links",
            //   open: true,
            //   data: data[0]?.socialMediaDetails ?? [],
            //   completeData: data,
            // });
          }}
        />

        <EditSocialMedia
          show={openSocial}
          handleClose={() => {
            setOpenSocial(false);
          }}
          data={data[0]?.socialMediaDetails ?? []}
          completeData={data}
          onUpdate={(data) => {
            setData(data);
          }}
        />

        <CardCompStatement
          companyStatement={data[0]?.companyStatement ?? ""}
          onClick={() => {
            setOpenStatement(true);
            // setOpenDrawer({
            //   type: "Statement",
            //   open: true,
            //   data: data[0]?.companyStatement ?? [],
            // });
          }}
        />

        <EditStatement
          show={openStatement}
          handleClose={() => {
            setOpenStatement(false);
          }}
          data={data[0]?.companyStatement ?? []}
          completeData={data}
          onUpdate={(data) => {
            setData(data);
          }}
        />
        <CardOtherInfo
          otherInfo={data[0]?.otherInfo}
          onClick={() => {
            setOpenOtherInfor(true);
          }}
        />

        <EditOtherInfo
          show={openotherInfor}
          handleClose={() => {
            setOpenOtherInfor(false);
          }}
          data={data[0]?.otherInfo ?? []}
          completeData={data}
          onUpdate={(res) => {
            setData(res);
          }}
        />
      </Row>
    </Container>
  );
}

export default Information;
