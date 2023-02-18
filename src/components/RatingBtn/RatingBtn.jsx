import React, { useState } from "react";
import eye from "../../assets/images/eye.svg";
import greyEye from "../../assets/images/greyEye.svg";

import Util from "../UtilityFunctions/UtilityFunctions";
import "./RatingBtn.scss";

const RatingBtn = ({ selectedIds, ratingUser, getDataFunc, api }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      {selectedIds.length == 1 && !ratingUser.rating ? (
        clicked ? 
        <div className="buttons-disable">
          <span className="rating-button" >
            <span>
              <img src={greyEye} alt="" />
            </span>
            <span className="name">Show Rating</span>
          </span>
        </div>
        :
        <div className="buttons" onClick={()=>Util.activeRatings(api,selectedIds,getDataFunc, setClicked)}>
          <span className="rating-button" >
            <span>
              <img src={eye} alt="" />
            </span>
            <span className="name">Show Rating</span>
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RatingBtn;

{
  /* <div className="buttons">
        <span className="rating-button">
          <span>
            <img src={ratings} alt="" />
          </span>
          <span className="name">Hide Ratings</span>
        </span>
      </div> */
}
