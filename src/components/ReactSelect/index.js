import React, { useState } from "react";
import Select from "react-select";
import "./styles.scss";
const ReactSelector = (props) => {
  const { options } = props;
  const [fruits, setFruits] = useState(null);
  const [states, setStates] = useState(null);

  return (
    <div>
      <Select
        defaultValue={[options[2], options[3]]}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select select-container "
        classNamePrefix="select"
      />
    </div>
  );
};

export default ReactSelector;
