import React from "react";
import ratings from '../../assets/images/ratings.svg'
import './RatingBtn.scss'

const RatingBtn = ({selectedIds, deleteSelectedItems}) => {


  return (
    <>
      <div className="buttons">
        <span className="rating-button">
          <span>
            <img src={ratings} alt="" />
          </span>
          <span className="name">Hide Ratings</span>
        </span>
      </div>
    </>
  );
};

export default RatingBtn;
