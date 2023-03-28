import React from "react";
import f1 from '../../../assets/images/frame_1.png';
import f2 from '../../../assets/images/frame_2.png';
import f3 from '../../../assets/images/frame_3.png';
import f4 from '../../../assets/images/frame_4.png';

const LoginImages = () => {
  return (
    <div className="col-md-5 loginNav-right">
      <div className="row">
        <div className="col-md-6 image-box">
          <img src={f1} alt="afa" />
        </div>
        <div className="col-md-6 image-box">
          <img src={f2} alt="afa" />
        </div>
        <div className="col-md-6 image-box">
          <img src={f3} alt="afa" />
        </div>
        <div className="col-md-6 image-box">
          <img src={f4} alt="afa" />
        </div>
      </div>
    </div>
  );
};

export default LoginImages;
