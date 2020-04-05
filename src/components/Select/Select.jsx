import React from "react";

export const Select = ({ options, setSelected, selected }) => {
  return (
    <select
      value={selected}
      onChange={e => {
        setSelected(e.currentTarget.value);
      }}
    >
      {options.map(el => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};
