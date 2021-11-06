import React, { useEffect, useState } from "react";
import { getSpotifyAccessToken, searchSpotifyItem } from "../../api";
import SearchInput from "../SearchInput";
import SearchOptions from "../SearchOptions";

const Form = () => {
  const [token, setToken] = useState();
  const [value, setValue] = useState();
  const [results, setResults] = useState([]);

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

  const handleSearch = async () => {
    const queryResults = await searchSpotifyItem(token, value);
    
    setResults(queryResults);
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

      {results.length > 0 && <SearchOptions options={results} />}
    </div>
  );
};

export default Form;
