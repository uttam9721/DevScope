// src/components/SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="flex gap-2 justify-center mt-10">
      <input
        type="text"
        placeholder="Enter Codeforces username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border rounded-lg w-72 outline-none"
      />
      <button
        onClick={() => onSearch(username)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;