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
import { useContextProvider } from "../../../context";
import EditAddress from "./Component/EditAddress";
import { useState } from "react";
import EditSocialMedia from "./Component/EditSocialMedia";
import EditStatement from "./Component/EditStatement";
import EditOperations from "./Component/EditOperations";
import OtherInfoDetails from "./Component/OtherInfoDetails";
import { CircularProgress } from "@mui/material";
import EditOtherInfo from "./Component/EditOtherInfo";

function Information() {
  const [data, setData, loading] = useOutletContext();
  const { setOpenDrawer } = useContextProvider();
  const [openAddress, setopenAddress] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  const [openStatement, setOpenStatement] = useState(false);
  const [openOperation, setOpenOperation] = useState(false);
  const [openotherInfor, setOpenOtherInfor] = useState(false);
  const [editOtherInfo, setEditOtherInfo] = useState(false);

  const onUpdate = (cache) => {
    setData(cache);
  };

  return (
    <Container fluid>
      {loading ? (
        <div className=" loading-screen default-height d-flex align-items-center justify-content-center">
          <CircularProgress size={24} />
        </div>
      ) : (
        <Row className="info-container">
          <Col className="card-wrapper" md={6} xl={4}>
            {/* {data[0]?.contactUs?.length ? ( */}
            <CardContacts
              type={"Contact"}
              contactUs={data?.[0]?.contactUs ?? {}}
              length={data?.[0]?.contactUs?.length ?? 0}
              title="Contact"
              onClick={() => {
                setOpenDrawer({
                  type: "Contacts",
                  title: "Contacts",
                  open: true,
                  data: [...data[0]?.contactUs],
                  callback: onUpdate,
                  completeData: data,
                });
              }}
            />
          </Col>
          <CardAddress
            onClick={() => {
              setopenAddress(true);
            }}
            registeredAddress={data?.[0]?.registeredAddress ?? {}}
          />
          {openAddress && (
            <EditAddress
              show={openAddress}
              handleClose={() => {
                setopenAddress(false);
              }}
              data={data?.[0]?.registeredAddress ?? {}}
              completeData={data}
              onUpdate={(data) => {
                setData(data);
              }}
            />
          )}

          <CardHOpration
            hoursOfOperation={data?.[0]?.hoursOfOperation}
            onClick={() => {
              setOpenOperation(true);
            }}
          />

          {openOperation && (
            <EditOperations
              show={openOperation}
              handleClose={() => {
                setOpenOperation(false);
              }}
              data={data?.[0]?.hoursOfOperation ?? {}}
              completeData={data}
              onUpdate={(data) => {
                setData(data);
              }}
            />
          )}
          <CardSocial
            socialMediaDetails={data?.[0]?.socialMediaDetails ?? []}
            onClick={() => {
              setOpenSocial(true);
            }}
          />

          {openSocial && (
            <EditSocialMedia
              show={openSocial}
              handleClose={() => {
                setOpenSocial(false);
              }}
              data={data?.[0]?.socialMediaDetails ?? []}
              completeData={data}
              onUpdate={(data) => {
                setData(data);
              }}
            />
          )}

          <CardCompStatement
            companyStatement={data?.[0]?.companyStatement ?? ""}
            onClick={() => {
              setOpenStatement(true);
            }}
          />

          {openStatement && (
            <EditStatement
              show={openStatement}
              handleClose={() => {
                setOpenStatement(false);
              }}
              data={data?.[0]?.companyStatement ?? []}
              completeData={data}
              onUpdate={(data) => {
                setData(data);
              }}
            />
          )}
          <CardOtherInfo
            otherInfo={data?.[0]?.otherInfo}
            onClick={() => {
              setEditOtherInfo(true);
            }}
            onViewAllClick={() => {
              setOpenOtherInfor(true);
            }}
          />

          {editOtherInfo && (
            <EditOtherInfo
              show={editOtherInfo}
              handleClose={() => {
                setEditOtherInfo(false);
              }}
              data={data?.[0]?.otherInfo ?? []}
              completeData={data}
              onUpdate={onUpdate}
            />
          )}

          {openotherInfor && (
            <OtherInfoDetails
              show={openotherInfor}
              handleClose={() => {
                setOpenOtherInfor(false);
              }}
              data={data?.[0]?.otherInfo ?? []}
              completeData={data}
              onUpdate={(res) => {
                setData(res);
              }}
            />
          )}
        </Row>
      )}
    </Container>
  );
}

export default Information;
