import React, { Fragment, useEffect, useState } from "react";
import "./styles.scss";
import { useContextProvider } from "../../../../context";
import email from "../../../../assets/images/color-email.png";
import phone from "../../../../assets/images/color-contact.png";
import location from "../../../../assets/images/color-location.png";

import chat from "../../../../assets/images/chat-icon.png";
import Switch from "../../../../components/Input/Switch";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import edit from "../../../../assets/images/edit-icon.png";
import delet from "../../../../assets/images/delete.svg";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { toast } from "react-toastify";
import ConfirmBox from "../../../../components/ConfirmBox/ConfirmBox";
import { SUCCESS_MESSAGES } from "../../../../helper/messages";

function EditContactList() {
  const { openDrawer, setOpenDrawer } = useContextProvider();
  const [data, setData] = useState(openDrawer.data ?? []);
  const [showModal, setShowModal] = useState(false);
  const [deletedItem, setDeletedItem] = useState({ item: {}, index: -1 });

  console.log(deletedItem);

  const [deleteData] = usePostAsyncResponse(
    "/portalDeleteCompanyContactUsDetails"
  );
  const [pathcData] = usePatchAsyncReponse(
    "/portalPatchCompanyContactUsDetails"
  );

  useEffect(() => {
    setData(openDrawer.data ?? []);
  }, [openDrawer]);

  const onDeletecontacts = () => {
    const { item, index } = deletedItem;
    const body = {
      contactUsId: item._id,
    };

    deleteData(body, (res) => {
      console.log({ openDrawer });
      const arr = JSON.parse(JSON.stringify(data));
      arr.splice(index, 1);

      const d = JSON.parse(JSON.stringify(openDrawer.completeData));
      d[0].contactUs = arr;
      openDrawer.callback(d);
      setOpenDrawer({
        ...openDrawer,
        data: arr,
        completeData: d,
      });
      toast.success(SUCCESS_MESSAGES.DELETE_CONTACT);
      setShowModal(false);
      setData(arr);
    });
  };

  const onPostEnableChat = (arr) => {
    const currentContact = JSON.parse(JSON.stringify(arr));
    const contactUsId = currentContact._id;
    delete currentContact._id;

    const body = {
      ...currentContact,
      contactUsId,
    };

    pathcData(body, (res) => {
      try {
        const d = JSON.parse(JSON.stringify(openDrawer.completeData));
        d[0].contactUs[openDrawer.index] = { ...res[0] };
        openDrawer.callback(d);
      } catch (error) {
        console.log(error);
      }

      if (currentContact.enableChat) {
        toast.success("chat enabled!!");
      } else {
        toast.success("chat disabled!!");
      }
    });
  };

  const onEnableChat = (index) => {
    const arr = [...data];
    arr[index].enableChat = !arr[index].enableChat;
    setData([...arr]);

    onPostEnableChat(arr[index]);
  };

  return (
    <Fragment>
      <div className="btn-add-container">
        <BtnTitleCenter
          title="Add"
          className="btn-bg-trasparent"
          onClick={() => {
            setOpenDrawer({
              ...openDrawer,
              type: "Add Contact",
              title: "Add Contact",
              data: {},
            });
          }}
        />
      </div>
      <p className="drawer-description-text">
        Please provide the company’s email & contacts
      </p>

      {data.map((item, index) => {
        return (
          <div className="contact-us-container">
            <div
              className={`d-flex justify-content-center align-items-center `}
            >
              <div className=" wrapper-title">
                <span className="cont-title contact-us-title">
                  {item.title}
                </span>

                <div className="d-flex">
                  <BtnIconOnly
                    icon={delet}
                    onClick={() => {
                      setDeletedItem({ item, index });
                      setShowModal(true);
                    }}
                  />
                  <BtnIconOnly
                    icon={edit}
                    onClick={() => {
                      setOpenDrawer({
                        ...openDrawer,
                        type: "Edit Contact",
                        title: "Edit Contact",
                        data: { ...item },
                        index: index,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <ConfirmBox
              msg={"Are you sure you want to delete this item?"}
              cancelFunction={() => {
                setShowModal(false);
              }}
              showNow={showModal}
              confirmFunction={onDeletecontacts}
              cancelBtn={"Cancel"}
              actionBtn={"Delete"}
            />
            <div className="d-flex email-cont align-items-center">
              <img className="" height={25} src={email} alt="email-icon" />
              <span className="email">{item?.email ?? ""}</span>
            </div>

            <div className="d-flex email-cont">
              <img height={25} src={phone} alt="phone-icon" />
              <span className="email phone">{item?.contact ?? ""}</span>
            </div>

            <div className="d-flex">
              <img height={25} src={location} alt="phone-icon" />
              <span className="email phone">{item?.address?.city ?? ""}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center chat-container">
              <div className="d-flex align-items-center">
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
          </div>
        );
      })}
    </Fragment>
  );
}

export default EditContactList;
