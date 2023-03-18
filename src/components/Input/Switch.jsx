import React from "react";

function Switch({ value = false, onChange = () => {} }) {
  // const [first, setfirst] = useState(false)
  return (
    <div>
      <label class="switch">
        <input type="checkbox" checked={value} onChange={onChange} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default Switch;
