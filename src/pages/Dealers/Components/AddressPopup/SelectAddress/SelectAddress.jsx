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
  setDisplayAddress
}) => {
  const editEnable = (data, idx) => {
    setAddress(false);
    setIsEdit(true);
    setEditData(data);
  };

  const deleteAddress = (idx) => {
    const filteredData = data.filter((item, id) => id !== idx);
    addAddressFunction(filteredData);

    // If the deleted address was selected and there are still addresses in the array, select the first address
    if (data[idx].selected && filteredData.length > 0) {
      filteredData[0].selected = true;
      addAddressFunction(filteredData);
    }
  };

  const selectAddress = (id) => {
    const newData = data.map((obj, i) => {
      if (obj._id === id) {
        return { ...obj, selected: true };
      } else {
        return { ...obj, selected: false };
      }
    });
    addAddressFunction(newData);

    // If no item was selected, select the first item in the array
    if (id === null && newData.length > 0) {
      newData[0].selected = true;
      addAddressFunction(newData);
    }
  };

  // Select the first address by default if all items have selected set to false
  if (data.every((item) => item.selected === false) && data.length > 0) {
    data[0].selected = true;
    addAddressFunction(data);
  }

  return (
    <div className="selectaddress">
      <div className="title">{title} :</div>
      <div className="address-box">
        {data.map((item, id) => (
          <div key={id}>
            {id !== 0 && <div className="address-divider"></div>}
            <div className="upper-line">
              <input
                type="radio"
                name={name}
                value={item._id}
                checked={item.selected}
                onChange={() => selectAddress(item._id)}
              />
              <div
                className="text-add"
                onClick={() => selectAddress(item._id)}
              >
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectAddress;
