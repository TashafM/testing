import React from "react";
import "./SearchBar.scss";
import * as BS from "react-icons/bs";
import filter from "../../assets/images/filter.svg";
import downArrow from "../../assets/images/downArrow.svg";

const SearchBar = ({searchData}) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // const filteredItems = items.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <>
      <div className="search-div">
        <span className="icon-search">
          <BS.BsSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          // onChange={handleSearch}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;
