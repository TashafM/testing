import React, { useState } from "react";
import Switch from "../../../../components/Input/Switch";
import TimeInput from "../../../../components/Input/TimeInput";

function CardTimeSlot({ title, active, onChange, index }) {
  const [time, setTime] = useState("09:30");
  const [endTime, setEndTime] = useState("05:30");

  const onTimeChange = (e) => {
    let timeSplit = e.target.value.split(":");
    let hours = "";
    let minutes = "";
    let meridian = "";
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "AM";
      if (hours === 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }

    console.log(meridian, minutes, hours);
  };

  return (
    <div className="card-slots-container align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Switch value={active} onChange={() => onChange(index)} />
        <span className="card-day cardspace">{title}</span>
      </div>

      <div className="d-flex align-items-center">
        <TimeInput
          value={time}
          onChange={(e) => {
            onTimeChange(e);
            console.log(e.target.value);
            setTime(e.target.value);
          }}
        />
        {/* <Badge bg="light"  className='p-3 mr-2 ml-3 text-black'>9.00 AM</Badge> */}
        <span>To</span>
        <TimeInput
          value={endTime}
          disabled={active}
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
