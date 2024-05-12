import { useState } from "react";
import axios from "axios";
import MediaCard from "../components/MediaCard";
import loadingImage from "../assets/loading.gif";

const MediaSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [media, setMedia] = useState("image");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state
  const itemsPerPage = 12; // Number of items to display per page

  const fetchSearchResults = async () => {
    setLoading(true); // Set loading state to true when fetching results
    try {
      const response = await axios.get("https://images-api.nasa.gov/search", {
        params: {
          q: query,
          page: page,
        },
      });
      setResults(response.data.collection.items);
      setTotalResults(response.data.collection.metadata.total_hits);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching results
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setPage(1); // Reset page to 1 when performing a new search
    fetchSearchResults();
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Calculate total number of pages based on total results and items per page
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  // Slice the results array to display only items for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageResults = results.slice(startIndex, endIndex);

  return (
    <div>
      <div className="flex items-center justify-center m-8 md:m-20  bg-[#282828] p-4 rounded-lg text-black">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter search query"
          className="bg-white ml-7 border border-black p-3 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="ml-7 bg-black p-3 rounded-md text-white"
        >
          Search
        </button>
      </div>
      <div>
        {loading ? ( // Conditionally render loading image if loading is true
          <div className="flex justify-center items-center">
            {" "}
            <img src={loadingImage} alt="Loading..." />
          </div>
        ) : (
          currentPageResults.map(
            (item) =>
              item.data[0].media_type === "image" && (
                <MediaCard
                  key={item.data[0].nasa_id}
                  item={item}
                  image={item.links[0].href}
                />
              )
          )
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mb-24 mt-36">
        <div className="flex justify-center items-center gap-6">
          <div className="border border-black p-3">
            <button onClick={handlePreviousPage}>Previous</button>
          </div>
          <div>
            <span>
              {page} of {totalPages}
            </span>
          </div>
          <div className="border border-black p-3">
            <button onClick={handleNextPage}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSearch;
