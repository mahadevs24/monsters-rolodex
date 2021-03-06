import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
    ></input>
  );
};

export default SearchBox;
