import React from "react";

const TabList = ({ tab, selectedIndex, onTabChange }) => {
  const { label, index } = tab;

  return (
    <input
      type="radio"
      name="my_tabs_2"
      className={`tab tab-list ${
        selectedIndex === index ? "!text-[#E5933A]" : "!text-white"
      }`}
      aria-label={label}
      checked={selectedIndex === index}
      onChange={() => onTabChange(index)}
    />
  );
};

export default TabList;
