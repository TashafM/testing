import React, { useState } from 'react';

function AddMemberDate() {
  const [date, setDate] = useState(['', '', '']);

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
    <div>
      <label>
        Day:
        <input type="text" value={date[0]} onChange={({ target: { value } }) => setDate([value, date[1], date[2]])} onBlur={handleBlur(0, 1, 31)} />
        {date[0] && !validate(date[0], 1, 31) && <span style={{ color: 'red' }}>Invalid value (must be between 1 and 31).</span>}
      </label>
      <label>
        Month:
        <input type="text" value={date[1]} onChange={({ target: { value } }) => setDate([date[0], value, date[2]])} onBlur={handleBlur(1, 1, 12)} />
        {date[1] && !validate(date[1], 1, 12) && <span style={{ color: 'red' }}>Invalid value (must be between 1 and 12).</span>}
      </label>
      <label>
        Year:
        <input type="text" value={date[2]} onChange={({ target: { value } }) => setDate([date[0], date[1], value])} onBlur={handleBlur(2, 1950, 2050)} />
        {date[2] && !validate(date[2], 1950, 2050) && <span style={{ color: 'red' }}>Invalid value (must be between 1950 and 2050).</span>}
      </label>
    </div>
  );
}

export default AddMemberDate;
