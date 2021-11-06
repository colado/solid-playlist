import React, { useEffect, useState } from "react";
import { getSpotifyAccessToken, searchSpotifyItem } from "../../api";
import SearchInput from "../SearchInput";

const Form = () => {
  const [token, setToken] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    getSpotifyToken();
  }, []);

  const getSpotifyToken = async () => {
    const token = await getSpotifyAccessToken();
    setToken(token);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    searchSpotifyItem(token, value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          gap: 10,
          padding: 10,
        }}
      >
        <SearchInput handleChange={handleChange} label="artist" />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Form;
