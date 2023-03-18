import React, { Fragment } from "react";
import "./styles.scss";
import { useContextProvider } from "../../../../context";
import CardContacts from "./CardContacts";

function EditContactList() {
  const { openDrawer } = useContextProvider();

  return (
    <Fragment className="card-cont">
      {openDrawer.data.map((item) => {
        return <CardContacts key={item._id} contactUs={[{ ...item }]} />;
      })}
    </Fragment>
  );
}

export default EditContactList;
