import React, { useState } from "react";
import { Link } from "react-router-dom";
import { imageUrlForEvent } from "utils/urls";
import moment from "moment";
import defaultThumbnail from "assets/thumbnail.png";

const styleClasses = {
  searchEventCard: `
    block
    border
    border-slate-300
    border-solid
    rounded
    dark:bg-du-indigo-900
    bg-white
    min-h-full
    pb-4
  `,
  searchEventThumbnail: `
    w-full
    rounded-t
  `,
  searchEventCardDetail: `
    font-lato
    font-medium
    grid
    grid-cols-2
    md:grid-cols-3
  `,
};

function formatDate(date) {
  if (!date || date === "") return "";

  return moment(date).format("ll");
}

function SearchEventCard({ eventData }) {
  console.log(eventData);
  const [imageUrl, setImageUrl] = useState(imageUrlForEvent(eventData));
  const startDate = formatDate(eventData.startDate);

  const handleImageError = () => {
    setImageUrl(defaultThumbnail);
  };

  return (
    <Link
      to={`/events/${eventData.id}/details`}
      className={styleClasses.searchEventCard}
    >
      <div
        className="card-img"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        {/**
         * This is a hidden image that loads the same background image for the card,
         * but allows us to listen for an error event. Upon an error, we can set the
         * image URL used to the default image.
         */}
        <img
          src={imageUrl}
          onError={handleImageError}
          className="w-full"
          alt="logo"
          style={{ display: "none" }}
        />
      </div>

      <div className="p-8">
        <div className={styleClasses.searchEventCardDetail}>
          <time className="text-du-purple-600 dark:text-du-lightPurple md:col-span-2">
            {startDate}
          </time>
          <p className="text-right text-du-purple-600 dark:text-du-lightPurple pr-2 md:col-span-1">
            Free
          </p>
        </div>

        <div>
          <p className="mt-6 font-bold text-base md:text-xl dark:text-du-gray">
            {eventData.eventName}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SearchEventCard;
