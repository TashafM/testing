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

export default function RightDrawer() {
  const { openDrawer, setOpenDrawer } = useContextProvider();

  console.log(openDrawer);

  const toggleDrawer = () => {
    console.log(openDrawer);

    setOpenDrawer({ ...openDrawer, open: !openDrawer.open });
  };

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={openDrawer.open}
          onClose={() => {
            setOpenDrawer({ ...openDrawer, open: false });
          }}
          onOpen={() => {
            setOpenDrawer({ ...openDrawer, open: true });
          }}
        >
          <Box style={{ width: "536px" }} role="presentation">
            <List>
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
            </List>
            <Divider />
            <div className="side-container">
              {openDrawer.type === "Edit" ? (
                <EditAbout />
              ) : openDrawer.type === "Social Media & Links" ? (
                <EditSocialMedia />
              ) : openDrawer.type === "Contact" ? (
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
              ) : openDrawer.type === "Add Brands" ? (
                <AddBrand />
              ) : (
                <div>other cont</div>
              )}
            </div>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
