import React from "react";
import "./selectaddress.scss";
import editIcon from "../../../../../assets/images/edit-icon.png"
import deleteIcon from "../../../../../assets/images/delete.png"


const SelectAddress = ({title, name, value1, value2, setIsEdit, setAddress}) => {
const editEnable = () => {
  setAddress(false);
  setIsEdit(true)
}
 
  return (
    <div className="selectaddress">
      <div className="title">{title} :</div>
      <div className="address-box">
        <div className="upper-line">
          <input type="radio" name={name} value={value1}/>
          <div className="text-add">
            28, Rajasthani Udhyog Nagar, G.T. Karnal Road, Delhi - 110033 IN
          </div>
          <img src={editIcon} alt="" onClick={editEnable}/>
        </div>
        <div className="mobile-line">
            <div className="num">+ 91 9184202391</div>
            <img src={deleteIcon} alt="" />
        </div>

        <div className="address-divider"></div>

        <div className="upper-line">
          <input type="radio" name={name} value={value2} />
          <div className="text-add">
            27, Rajasthani Udhyog Nagar, G.T. Karnal Road, Delhi - 110033 IN
          </div>
          <img src={editIcon} alt="" onClick={editEnable}/>
        </div>
        <div className="mobile-line">
            <div className="num">+ 91 9184202391</div>
            {/* <img src={deleteIcon} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
