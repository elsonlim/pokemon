import React, { useState } from "react";
import { connect } from "react-redux";
import { updateFilter } from "../actions";

const SearchBar = ({ updateFilter }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button
        onClick={() =>
          updateFilter({
            searchText,
          })
        }
      >
        Filter
      </button>
    </div>
  );
};

const mapDispatchToProps = { updateFilter };

export default connect(null, mapDispatchToProps)(SearchBar);
