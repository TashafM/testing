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
  addAddressFunction,
  setEditData,
  setDisplayAddress,
}) => {
  const editEnable = (data, idx) => {
    setAddress(false);
    setIsEdit(true);
    setEditData(data);
  };

  const deleteAddress = (idx) => {
    const filteredData = data.filter((item, id) => id !== idx);
    addAddressFunction(filteredData);

    // check if the selected item is being deleted
    if (data[idx].selected && filteredData.length > 0) {
      const newData = [
        { ...filteredData[0], selected: true },
        ...filteredData.slice(1),
      ];
      addAddressFunction(newData);
    }
  };

  const changeHandler = (e) => {
    console.log(e.target.value, "tashaf");
    const newData = data.map((obj, i) => {
      if (obj._id === e.target.value) {
        return { ...obj, selected: true };
      } else {
        return { ...obj, selected: false };
      }
    });
    addAddressFunction(newData);
  };

  return (
    <div className="selectaddress">
      <div className="title">{title} :</div>
      {console.log(data, "checinkjkj...........")}
      <div className="address-box">
        {data.map((item, id) => (
          <>
            {id !== 0 && <div className="address-divider"></div>}
            <div className="upper-line">
              <input
                type="radio"
                name={name}
                value={item._id}
                onChange={changeHandler}
                checked={item.selected}
              />
              <div className="text-add">
                {item.fullName}, {item.floorNumber}, {item.block}, {item.street}
                , {item.city}, {item.state}, {item.country}, {item.zipCode}
              </div>
              {id !== 0 && (
                <img
                  src={editIcon}
                  alt=""
                  onClick={() => editEnable(item, id)}
                />
              )}
            </div>
            <div className="mobile-line">
              <div className="num">{item.contactNumber}</div>
              {id !== 0 && (
                <img
                  src={deleteIcon}
                  alt=""
                  onClick={() => deleteAddress(id)}
                />
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectAddress;
