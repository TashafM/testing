import React from "react";
import hashtag from '../../../../../../assets/images/hashtag.svg'
import attherate from '../../../../../../assets/images/attherate.svg'
import location from '../../../../../../assets/images/location.svg'
import profile from '../../../../../../assets/images/profile.svg'
import office from '../../../../../../assets/images/office.svg'

const UpperPart = ({data}) => {
  return (
    <>
      <div className="top-title"> My Partner / C002</div>
      <div className="userName"> {data.name}</div>
      <div className="title-main">
        <div className="title-content">
          <div>
            <img src={hashtag} alt="" />
          </div>
          <div>C00002</div>
        </div>
        <div className="title-content">
          <div>
            <img src={attherate} alt="" />
          </div>
          <div>arcymonod</div>
        </div>
        <div className="title-content">
          <div>
            <img src={location} alt="" />
          </div>
          <div>Delhi</div>
        </div>
        <div className="title-content">
          <div>
            <img src={profile} alt="" />
          </div>
          <div>Bharat</div>
        </div>
      </div>
    </>
  );
};

export default UpperPart;
