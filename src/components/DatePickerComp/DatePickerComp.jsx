import React, { useState } from "react";
import { Form, FormGroup, InputGroup } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerComp.scss";

const DatePickerComp = ({heading, date, setDate}) => {
  // const [date, setDate] = useState(['', '', '']);

  const validate = (value, min, max) => parseInt(value, 10) >= min && parseInt(value, 10) <= max;

  const handleBlur = (field, min, max) => ({ target: { value } }) =>
    setDate((prevDate) => {
      const newValue = value.padStart(2, '0');
      const isValid = validate(newValue, min, max);
      const newState = [...prevDate];
      if (!isValid) {
        newState[field] = '';
      } else {
        newState[field] = newValue;
      }
      return newState;
    });


  return (
    <div className="date-picker-comp">
      <Form.Label className="date-heading">{heading}</Form.Label>
      <InputGroup className="date-main">
        <Form.Control
          type="text"
          placeholder="DD"
          maxLength={2}
          value={date[0]}
          onChange={({ target: { value } }) => {
            if (/^\d*$/.test(value)) {
              setDate([value, date[1], date[2]]);
            }
          }}
          onBlur={handleBlur(0, 1, 31)}
          className={`date-input day`}

          required
        />
        {date[0] && !validate(date[0], 1, 31) && <span style={{ color: 'red' , fontSize: '24px' }}>*</span>}

        <Form.Control
          className="date-input"
          type="text"
          placeholder="MM"
          maxLength={2}
          value={date[1]}
          onChange={({ target: { value } }) => {
            if (/^\d*$/.test(value)) {
              setDate([date[0], value, date[2]])
            }
          }}
          onBlur={handleBlur(1, 1, 12)}
          required
        />
        {date[1] && !validate(date[1], 1, 12) && <span style={{ color: 'red', fontSize: '24px'  }}>*</span>}
        <Form.Control
          type="text"
          placeholder="YYYY"
          maxLength={4}
          className="date-input year"
          value={date[2]}
          onChange={({ target: { value } }) => {
            if (/^\d*$/.test(value)) {
              setDate([date[0], date[1], value])
            }
          }}
          onBlur={handleBlur(2, 1950, 2050)}
          required
        />
        {date[2] && !validate(date[2], 1950, 2050) && <span style={{ color: 'red' , fontSize: '24px' }}>*</span>}
      </InputGroup>
    </div>
  );
};

export default DatePickerComp;



// import React from "react";
// import { Form, FormGroup, InputGroup } from "react-bootstrap";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./DatePickerComp.scss";

// const DatePickerComp = ({ heading, dateInput, selectedDate }) => {
//   return (
//     <div className="date-picker-comp">
//       <Form.Label className="date-heading">{heading}</Form.Label>
//       <InputGroup className="date-main">
//         <Form.Control
//           className="date-input day"
//           type="text"
//           placeholder="DD"
//           maxLength={2}
//           value={selectedDate[0]}
//           onChange={(e) => {
//             dateInput(0, e.target.value);
//           }}

//           // required
//         />
//         <Form.Control
//           className="date-input"
//           type="text"
//           placeholder="MM"
//           maxLength={2}
//           value={selectedDate[1]}
//           onChange={(e) => dateInput(1, e.target.value)}
//           // required
//         />
//         <Form.Control
//           type="text"
//           placeholder="YYYY"
//           maxLength={4}
//           className="date-input year"
//           value={selectedDate[2]}
//           onChange={(e) => dateInput(2, e.target.value)}
//           // required
//         />
//       </InputGroup>
//     </div>
//   );
// };

// export default DatePickerComp;
