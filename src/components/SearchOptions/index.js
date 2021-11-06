import React from "react";

const SearchOptions = ({ options }) => {
  return (
    <div>
      {options.map((option) => (
        <div key={option.id} style={{ display: "flex", gap: 0 }}>
          <div>{option.artists.map((artist) => artist.name).join(", ")}</div> 
          -
          <div>{option.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchOptions;
