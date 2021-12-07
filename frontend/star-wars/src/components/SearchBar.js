import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        type='text'
        value={props.search}
        onChange={(e) => {
          props.setSearch(e.target.value);
          console.log(props.search);
        }}
      />
    </div>
  );
};

export default SearchBar;
