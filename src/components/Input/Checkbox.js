import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <FormCheck
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
    />
  );
}

export default Checkbox;
