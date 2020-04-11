import React from "react";
import Downshift from "downshift";
import "./Select.css";

export const Select = ({ handleSearch, data }) => {
  return (
    <Downshift
      onChange={handleSearch}
      itemToString={(item) => (item ? item.value : "")}
      initialInputValue={data[0].description.en}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        getLabelProps,
        getRootProps,
        getMenuProps,
        highlightedIndex,
        selectedItem,
      }) => {
        return (
          <fieldset className="dropdown">
            <label {...getLabelProps()}></label>
            <div
              className="icon"
              {...getRootProps({}, { suppressRefError: true })}
            >
              <input
                placeholder="Search for a vote"
                className="dropdown-input"
                {...getInputProps()}
              />
            </div>
            <ul {...getMenuProps()} className="dropdown--open">
              {isOpen
                ? data
                    .map((item) => item.description.en)
                    .filter((item) => !inputValue || item.includes(inputValue))
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: `result-${index}`,
                          index,
                          item,
                          style: {
                            fontSize: "20px",
                            color:
                              highlightedIndex === index
                                ? "#fbfbfb" // off-white
                                : "#0b3536", // dark-grey
                            backgroundColor:
                              highlightedIndex === index
                                ? "#eb0505" // power-blue
                                : "#fbfbfb", // off-white
                            fontWeight:
                              selectedItem === item ? "bold" : "normal",

                            padding: "5px 15px",
                          },
                        })}
                      >
                        {item}
                      </li>
                    ))
                : null}
            </ul>
          </fieldset>
        );
      }}
    </Downshift>
  );
};
