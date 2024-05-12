import React from "react";

const MediaCard = ({ item, image }) => {
  // Destructure the data from the item prop
  const { data } = item || {};
  const {
    title,
    photographer,
    keywords,
    nasa_id,
    date_created,
    description,
    media_type,
  } = data?.[0] || {};

  const [showMore, setShowMore] = React.useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex items-center justify-center m-8 md:m-24 mb-10">
      <div>
        <div className="flex mb-10 text-3xl justify-center items-center font-medium">
          <h1>{title}</h1>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="flex w-96 h-56 cursor-pointer rounded-md mb-4"
            src={image}
            alt="not loaded"
            onClick={toggleShowMore}
          />
        </div>
        {showMore && (
          <div className="mt-4">
            <div className="mb-2">
              <p>
                <b>Photographer:</b> {photographer}
              </p>
            </div>
            <div className="mb-2">
              <p>
                <b>Keywords:</b> {keywords?.join(", ")}
              </p>
            </div>
            <div className="mb-2">
              <p>
                <b>Date Created:</b> {date_created}
              </p>
            </div>
            <div className="text-justify mb-2 flex md:w-[1200px]">
              <p>
                <b>Description:</b> {description}
              </p>
            </div>
            <hr className="mt-8"></hr>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
