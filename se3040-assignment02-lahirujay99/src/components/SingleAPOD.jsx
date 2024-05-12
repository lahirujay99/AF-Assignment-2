import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import loadingGif from "../assets/loading.gif";

const SingleAPOD = () => {
  const [apodData, setApodData] = useState(null);
  const { date } = useParams();
  const [dataType, setDataType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getSingleAPOD = async () => {
      try {
        const res = await axios.get("https://api.nasa.gov/planetary/apod", {
          params: {
            api_key: "zhjPr1rcBT0GQpheh6Bsec2BtZkmTafDMkJ9AhGM",
            date: date,
          },
        });
        setApodData(res.data);
        setDataType(res.data.media_type);
        setError("");
      } catch (error) {
        console.error("Error fetching APOD data:", error);
        setError("Error fetching APOD data");
      }
    };

    getSingleAPOD();
  }, [date]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!apodData) {
    return (
      <div className="flex justify-center items-center mt-10">
        <img src={loadingGif} className="mb-4 max-w-full max-h-[500px] " />
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className="mt-20 m-10">
        <h1 className="flex justify-center items-center mb-20 text-4xl">
          ASTRONOMY PIC OF {apodData?.date}
        </h1>
      </div>

      <div className="justify-center items-center grid grid-cols-2 gap-8 px-8 md:px-24 pb-24">
        <div className="text-justify">
          <div>
            <h1 className="text-3xl font-bold mb-4">{apodData?.title}</h1>
          </div>
          <div className="">
            <p>{apodData.explanation}</p>
          </div>
        </div>
        <div>
          {dataType === "image" ? (
            <img
              src={apodData?.url}
              alt={apodData?.title}
              className="shadow-lg mb-4 max-w-full max-h-[500px] rounded-lg"
            />
          ) : dataType === "video" ? (
            <iframe
              src={apodData?.url}
              title={apodData?.title}
              className="shadow-lg mb-4 max-w-full max-h-[500px] rounded-lg"
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <p>No media</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAPOD;
