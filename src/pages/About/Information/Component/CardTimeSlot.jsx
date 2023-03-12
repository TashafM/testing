import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import Switch from "../../../../components/Input/Switch";
import TimeInput from "../../../../components/Input/TimeInput";

function CardTimeSlot({ title, active }) {
  const [time, setTime] = useState("09:30");
  const [endTime, setEndTime] = useState("05:30");
  return (
    <div className="card-slots-container align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Switch />
        <span className="card-day cardspace">{title}</span>
      </div>

      <div className="d-flex align-items-center">
        <TimeInput
          value={time}
          onChange={(e) => {
            console.log(e.target.value);
            setTime(e.target.value);
          }}
        />
        {/* <Badge bg="light"  className='p-3 mr-2 ml-3 text-black'>9.00 AM</Badge> */}
        <span>To</span>
        <TimeInput
          value={endTime}
          onChange={(e) => {
            console.log(e.target.value);
            setEndTime(e.target.value);
          }}
        />{" "}
        {/* <Badge bg="light" className='p-3 mr-2 ml-3 text-black'>5.00 AM</Badge> */}
      </div>
    </div>
  );
}

export default CardTimeSlot;
