// CardView.js

import React from "react";
import { Link } from "react-router-dom";

const CardView = ({ apodData }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 border-2 border-blue-950">
      <div className="m-2">
        <div className="flex items-center justify-center">
          {apodData.media_type === "image" && (
            <img
              src={apodData.url}
              alt={apodData.title}
              className="aspect-square"
            />
          )}
          {apodData.media_type === "video" && (
            <iframe src={apodData?.url} className="aspect-square"></iframe>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center m-2">
        <p className="text-center mt-4 font-semibold">{apodData.title}</p>
      </div>
      <div className="flex items-center justify-center m-5">
        <Link
          to={`/apod/${apodData.date}`}
          className="block mt-1 p-2 text-lg leading-tight text-center font-medium text-black shadow-xl shadow-red-100 border-2 border-blue-950 hover:bg-black hover:bg-opacity-50 rounded-2xl w-full"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default CardView;
