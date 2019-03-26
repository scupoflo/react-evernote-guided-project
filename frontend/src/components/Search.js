import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        className="search"
        type="text"
        value={props.searchTerm}
        placeholder="Search Notes"
        onChange= {props.handleSearch}
      />
    </div>
  );
}

export default Search;


// <input
//          onChange={this.props.thisIsAFunction}
//          className="search"
//          type="text"
//          value={this.props.text}
//        />
