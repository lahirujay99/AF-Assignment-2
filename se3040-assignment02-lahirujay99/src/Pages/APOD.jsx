import { useState, useEffect } from "react";
import axios from "axios";
import SingleAPOD from "../components/SingleAPOD";
import SearchResults from "../components/SearchResults";
import { Link, useParams } from "react-router-dom";

const APOD = () => {
  const { startDate, endDate } = useParams(); // Get startDate and endDate from URL params

  const [data, setData] = useState(null);
  const [dataArr, setDataArr] = useState([]);
  const [error, setError] = useState("");
  const [searchType, setSearchType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (startDate && endDate) {
      setSearchType("dateRange");
    } else {
      getTodayAPOD();
    }
  }, [startDate, endDate]);

  const getTodayAPOD = async () => {
    try {
      const res = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "zhjPr1rcBT0GQpheh6Bsec2BtZkmTafDMkJ9AhGM",
        },
      });

      setData(res.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Error in Fetching APOD data 1");
    }
  };

  const handleSearch = () => {
    setSearchType("dateRange");
    setDataArr([]); // Clear previous search results
  };

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div>
      <div className="mt-20 bg">
        <div className="">
          {searchType === "" && (
            <div className="flex m-20 justify-center items-center gap-7 bg-white p-4 rounded-lg  border border-[#41A4FF] bg-opacity-15">
              <div>
                <label htmlFor="start_date">Start Date:</label>
                <input
                  type="date"
                  id="start_date"
                  value={start}
                  min={new Date()}
                  onChange={(e) => setStart(e.target.value)}
                  className="bg-white ml-7 text-[#313131]  border border-black p-2 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="end_date">End Date:</label>
                <input
                  type="date"
                  id="end_date"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  className="bg-white ml-7 border border-black text-[#313131]  p-2 rounded-lg"
                />
              </div>
              <div>
                <Link
                  to={`/apod/${start}/${end}`}
                  className="block mt-1  leading-tight font-medium text-white hover:underline"
                >
                  <button
                    className="bg-black p-3 rounded-md "
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </Link>
              </div>
            </div>
          )}

          {searchType === "dateRange" && <SearchResults dataArr={dataArr} />}
        </div>
        <div>
          {searchType === "" && (
            <div>{data && <SingleAPOD apodData={data} />}</div>
          )}

          {searchType === "dateRange" && (
            <div>
              <SearchResults dataArr={dataArr} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default APOD;
