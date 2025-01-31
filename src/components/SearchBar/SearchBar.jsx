import { useState } from "react";

function SearchBar({ onSearch }) {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ keywords, location });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job title"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
