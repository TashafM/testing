import React from "react";
import { amPm, hour, minutes } from "./data";
import { Dropdown, Form } from "react-bootstrap";

function TimeInput({ value, onChange, disabled, index, label }) {
  const hourValue = value?.split(":")?.shift() ?? "09";
  const minutesValue = value?.split(":")?.pop().split(" ").shift() ?? "30";
  const amPmValue = value.split(" ").pop() ?? "am";

  return (
    <div className="time-select-container d-flex">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {hourValue}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {hour.map((item, i) => {
            const showDivider = i !== hour?.length - 1;
            return (
              <>
                <Dropdown.Item
                  onClick={(e) => {
                    onChange(item.label, index, label, "hour");
                  }}
                  key={`hour-${item.value}`}
                >
                  {item.label}
                </Dropdown.Item>
                {showDivider ? <Dropdown.Divider /> : null}
              </>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      {/* <Form.Select
        // disabled={disabled}
        className="hour-select"
        value={hourValue}
      
      >
     
      </Form.Select> */}

      <Dropdown className="minutes-dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {minutesValue}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {minutes.map((item, i) => {
            const showDivider = i !== minutes?.length - 1;
            return (
              <>
                <Dropdown.Item
                  onClick={(e) => {
                    onChange(item.label, index, label, "minutes");
                  }}
                  key={`minutes-${item.value}`}
                >
                  {item.label}
                </Dropdown.Item>
                {showDivider ? <Dropdown.Divider /> : null}
              </>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      {/* <Form.Select
        // disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value, index, label, "minutes");
        }}
        value={minutesValue}
        className="hour-select minute-input"
      >
        {minutes.map((item) => {
          return (
            <option key={`minutes-${item.value}`} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </Form.Select> */}

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {amPmValue}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {amPm.map((item, i) => {
            const showDivider = i !== amPm?.length - 1;
            return (
              <>
                <Dropdown.Item
                  onClick={(e) => {
                    onChange(item.label, index, label, "ampm");
                  }}
                  key={`amPm-${item.value}`}
                >
                  {item.label}
                </Dropdown.Item>
                {showDivider ? <Dropdown.Divider /> : null}
              </>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      {/* 
      <Form.Select
        // disabled={disabled}
        value={amPmValue}
        className="hour-select"
        onChange={(e) => {
          onChange(e.target.value, index, label, "ampm");
        }}
      >
        {amPm.map((item) => {
          return (
            <option key={`amPm-${item.value}`} value={item.label}>
              {item.label}
            </option>
          );
        })}
      </Form.Select> */}
    </div>
  );
}

export default TimeInput;
