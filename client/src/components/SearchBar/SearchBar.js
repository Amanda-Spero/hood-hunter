import React from "react";

const SearchBar = () => (
 <nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field orange darken-3">
          <input id="search" type="search"  />
          <label htmlFor="search"><i className="material-icons">  Search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
);

export default SearchBar;