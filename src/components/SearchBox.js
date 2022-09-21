import React from "react";
import "../searchBox.css"
const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div id="inputBox">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder ="search robots" 
            onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;