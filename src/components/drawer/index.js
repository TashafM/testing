import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./styles.css";
import { useContextProvider } from "../../context";
import back from "../../assets/images/back.png";
import EditAbout from "../../pages/About/Information/Component/EditAbout";
import EditSocialMedia from "../../pages/About/Information/Component/EditSocialMedia";
import EditContacts from "../../pages/About/Information/Component/EditContacts";
import EditContactsList from "../../pages/About/Information/Component/EditContactList";
import EditAddress from "../../pages/About/Information/Component/EditAddress";
import EditOperations from "../../pages/About/Information/Component/EditOperations";
import EditStatement from "../../pages/About/Information/Component/EditStatement";
import EditOtherInfo from "../../pages/About/Information/Component/EditOtherInfo";
import BtnIconOnly from "../Button/BtnIconOnly";
import edit from "../../assets/images/edit-icon.png";
import OtherInfoDetails from "../../pages/About/Information/Component/OtherInfoDetails";
import AddBrand from "../../pages/About/Brand/Component/AddBrand";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import ConfirmBox from "../ConfirmBox/ConfirmBox";
import DrawerHead from "../../pages/About/Information/Component/DrawerHead";

export default function RightDrawer() {
  const { loading, setLoading, setMsg, msg, alert, setAlert } =
    useContext(GlobalContext);
  // const [showDiv, setShowDiv] = useState(false);

  const { openDrawer, setOpenDrawer } = useContextProvider();

  console.log(openDrawer);

  const toggleDrawer = () => {
    console.log(openDrawer);

    setOpenDrawer({ ...openDrawer, open: !openDrawer.open });
  };

  return (
    <div className={loading ? "overlay-div" : ""}>
      {loading ? (
        <div className="msg-div">
          <span className="spinner"></span>
          <span>{msg}</span>
        </div>
      ) : (
        <React.Fragment>
          <SwipeableDrawer
            anchor={"right"}
            // variant="persistent"
            open={openDrawer.open}
            // ModalProps={{
            //   keepMounted: false,
            // }}
            // disableBackdropTransition={true}
            onClose={() => {
              setOpenDrawer({ ...openDrawer, open: false, type: "" });
            }}
            onOpen={() => {
              setOpenDrawer({ ...openDrawer, open: true });
            }}
          >
            <Box
              style={{ width: "636px", padding: "42px" }}
              role="presentation"
            >
              <div style={{ paddingBottom: "30px" }}>
                <DrawerHead
                  title="Other info"
                  handleClose={() => toggleDrawer()}
                  description=""
                />
              </div>

              {/* <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon
                      onClick={() => {
                        toggleDrawer();
                      }}
                    >
                      <img src={back} alt="back icon" />
                    </ListItemIcon>
                    <ListItemText className="title" primary={openDrawer.type} />
                    {openDrawer.type === "Other Info" && (
                      <BtnIconOnly
                        icon={edit}
                        onClick={() => {
                          setOpenDrawer({
                            open: true,
                            type: "Other Info Edit",
                          });
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              </List> */}
              <div className="side-container">
                {openDrawer.type === "Edit" ? (
                  <EditAbout />
                ) : openDrawer.type === "Social Media & Links" ? (
                  <EditSocialMedia />
                ) : openDrawer.type === "Contacts" ? (
                  <EditContactsList />
                ) : openDrawer.type === "Edit Contact" ||
                  openDrawer.type === "Add Contact" ? (
                  <EditContacts />
                ) : openDrawer.type === "Address" ? (
                  <EditAddress />
                ) : openDrawer.type === "Hours of operations" ? (
                  <EditOperations />
                ) : openDrawer.type === "Statement" ? (
                  <EditStatement />
                ) : openDrawer.type === "Other Info" ? (
                  <EditOtherInfo type={openDrawer.type} />
                ) : openDrawer.type === "Other Info Edit" ? (
                  <OtherInfoDetails />
                ) : openDrawer.type === "Add Brands" ||
                  openDrawer.type === "Edit Brands" ? (
                  <AddBrand />
                ) : (
                  <div>other cont</div>
                )}
              </div>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      )}
    </div>
  );
}
