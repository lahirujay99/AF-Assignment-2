import { useEffect, useState } from "react";
import CardView from "../components/CardView";
import { useParams } from "react-router-dom";
import axios from "axios";
import loadingGif from "../assets/loading.gif";

const SearchResults = () => {
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState("");
  const { startDate, endDate } = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "zhjPr1rcBT0GQpheh6Bsec2BtZkmTafDMkJ9AhGM",
          start_date: startDate,
          end_date: endDate,
        },
      });
      setDataArr(res.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError("Error in Fetching APOD data");
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  // Render loading GIF while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10 m-auto">
        <img src={loadingGif} className="mb-4 max-w-full max-h-[500px]" />
      </div>
    );
  }

  return (
    <div className="m-10">
      <div>
        <h1>
          Search Results between {startDate} to {endDate}
        </h1>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-10">
        {Array.isArray(dataArr) &&
          dataArr.map((apod) => <CardView key={apod.date} apodData={apod} />)}
      </div>
    </div>
  );
};

export default SearchResults;
