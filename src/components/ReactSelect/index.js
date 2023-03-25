import React from "react";
import Select from "react-select";
import "./styles.scss";

const ReactSelector = (props) => {
  const { options, getOptionLabel, getOptionValue, value, onChange } = props;

  return (
    <div>
      <Select
        isMulti
        value={value}
        name="colors"
        onChange={onChange}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        options={options}
        className="basic-multi-select select-container "
        classNamePrefix="select"
      />
    </div>
  );
};

export default ReactSelector;
