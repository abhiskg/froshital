import { IconSearch } from "icons";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === "") {
        setSearchResults([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm.toLowerCase()}`);
        const { results } = await res.json();

        setSearchResults(results);
      }
    };

    getResults();
  }, [searchTerm]);

  return (
    <div className="relative w-full text-gray-600 sm:w-72">
      <form>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-10 w-full rounded-full bg-white px-5 pr-10 text-sm focus:outline-none sm:w-72"
        />
        <span className="absolute top-0 right-0 mt-3 mr-4 text-black">
          <IconSearch />
        </span>
      </form>
      <SearchResults results={searchResults} />
    </div>
  );
}
