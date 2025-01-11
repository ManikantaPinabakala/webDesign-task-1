import searchIcon from "@/assets/search-icon.png";

import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="w-[90%] flex justify-between items-center self-center mt-4 border-[#D2D8E0] border-2 rounded-xl p-4 card-shadow">
      <input
        type="text"
        placeholder="Find lab tests, diagnostics centres"
        className="text-[#4D5C6F] font-[250] w-[100%] self-center outline-none"
      />
      <img src={searchIcon} alt="search" className="cursor-pointer scale-110" />
    </div>
  );
};

export default SearchBar;
