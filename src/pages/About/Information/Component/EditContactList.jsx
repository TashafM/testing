import React, { Fragment, useEffect, useState } from "react";
import "./styles.scss";
import { useContextProvider } from "../../../../context";
import CardContacts from "./CardContacts";
import chat from "../../../../assets/images/chat-icon.png";
import Switch from "../../../../components/Input/Switch";

function EditContactList() {
  const { openDrawer, setOpenDrawer } = useContextProvider();
  const [data, setData] = useState(openDrawer.data ?? []);

  console.log({ openDrawer });
  useEffect(() => {
    setData(openDrawer.data ?? []);
  }, [openDrawer]);

  const onEnableChat = (index) => {
    const arr = [...data];
    arr[index].enableChat = !arr[index].enableChat;
    setData([...arr]);
  };

  return (
    <Fragment>
      {data.map((item, index) => {
        return (
          <CardContacts
            key={item._id}
            type={"Edit Contact"}
            title={item?.title ?? ""}
            contactUs={{ ...item }}
            onClick={() => {
              setOpenDrawer({
                ...openDrawer,
                type: "Edit Contact",
                data: { ...item },
                index: index,
              });
            }}
          >
            <div className="d-flex justify-content-between chat-container">
              <div className="d-flex">
                <img className="card-img" src={chat} alt="chat-icon" />
                <p className="email mb-0">Enable Chat</p>
              </div>
              <Switch
                value={item.enableChat}
                onChange={() => {
                  onEnableChat(index);
                }}
              />
            </div>
          </CardContacts>
        );
      })}
    </Fragment>
  );
}

export default EditContactList;
