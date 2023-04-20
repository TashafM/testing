import React from "react";
import "./selectaddress.scss";
import editIcon from "../../../../../assets/images/edit-icon.png";
import deleteIcon from "../../../../../assets/images/delete.png";

const SelectAddress = ({
  title,
  name,
  value1,
  value2,
  setIsEdit,
  setAddress,
  data,
}) => {
  const editEnable = () => {
    setAddress(false);
    setIsEdit(true);
  };

  return (
    <div className="selectaddress">
      <div className="title">{title} :</div>
      <div className="address-box">
        {data.map((item, id) => (
          <>
            <div className="upper-line">
              <input type="radio" name={name} value={value1} checked/>
              <div className="text-add">
                {item.fullName}, {item.floorNumber}, {item.block}, {item.street}
                , {item.city}, {item.state}, {item.country}, {item.zipCode}
              </div>
              <img src={editIcon} alt="" onClick={editEnable} />
            </div>
            <div className="mobile-line">
              <div className="num">{item.contactNumber}</div>
              {id!==0 && <img src={deleteIcon} alt="" />}
            </div>

            <div className="address-divider"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectAddress;
