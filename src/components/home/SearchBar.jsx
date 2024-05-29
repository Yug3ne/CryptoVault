import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex px-8 gap-2 items-center rounded-md bg-transparent "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search Crypto"
        className="rounded-md bg-transparent p-3 flex border"
      />
      <button className="cursor-pointer">
        <IoSearch size={30} />
      </button>
    </form>
  );
};

export default SearchBar;
