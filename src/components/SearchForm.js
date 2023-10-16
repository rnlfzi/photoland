import React, { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem.length > 0) {
      navigate(`/search?query=${searchItem}`);
      // document.querySelector("input").value = ""; // This is not working
      setSearchItem("");
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={` ${
        isAnimating ? "animate-shake" : "animate-none"
      } w-full relative`}
    >
      <input
        value={searchItem}
        onChange={handleSearchInput}
        className="input"
        type="text"
        placeholder="Search for a product ..."
      />
      <button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
