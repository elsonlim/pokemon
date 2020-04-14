import React, { useState } from "react";
import { connect } from "react-redux";
import { updateFilter } from "../actions";

const SearchBar = ({ updateFilter }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <header className="AppHeader">
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
    </header>
  );
};

const mapDispatchToProps = { updateFilter };

export default connect(null, mapDispatchToProps)(SearchBar);
