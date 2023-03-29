import React from "react";
import { Form } from "react-bootstrap";

function Switch({ value = false, onChange = () => {} }) {
  // const [first, setfirst] = useState(false)
  return <Form.Check type="switch" checked={value} onChange={onChange} />;
}

export default Switch;
