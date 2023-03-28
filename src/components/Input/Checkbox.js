import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

function Checkbox({ checked, onChange }) {
  // const [checked, setChecked] = useState(false);
  return <FormCheck checked={checked} value onChange={onChange} />;
}

export default Checkbox;
