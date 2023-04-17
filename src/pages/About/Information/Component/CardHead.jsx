import React from "react";
import "../Information.scss";
import edit from "../../../../assets/images/edit-icon.png";
import BtnIconOnly from "../../../../components/Button/BtnIconOnly";
import { useContextProvider } from "../../../../context";
import { type } from "@testing-library/user-event/dist/type";

function CardHead({
  icon,
  title,
  changemargin,
  type,
  data,
  onClick,
  showIcon = true,
}) {
  const { setOpenDrawer } = useContextProvider();

  let cssclasseschange = changemargin ? "card-otherinfo-head" : "card-head";

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${cssclasseschange}`}
    >
      <img className="card-img" src={icon} alt="contact-icon" />
      <div className="wrapper-title">
        <span className="cont-title">{title}</span>
        {showIcon ? (
          <BtnIconOnly
            icon={edit}
            onClick={() => {
              if (onClick) {
                onClick();
              } else {
                setOpenDrawer({
                  open: true,
                  type: type,
                  data: { ...data },
                });
              }
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CardHead;
