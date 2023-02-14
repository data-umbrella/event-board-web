import React, { useState } from "react";
import { Link } from "react-router-dom";
import { imageUrlForEvent } from "utils/urls";
import { formatPrice } from "utils/strings";
import moment from "moment";
import defaultThumbnail from "assets/ui/thumbnail.png";

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
  const [imageUrl, setImageUrl] = useState(imageUrlForEvent(eventData));
  const startDate = formatDate(eventData.startDate);
  const eventPrice = formatPrice(eventData.price);

  const handleImageError = () => {
    setImageUrl(defaultThumbnail);
  };

  return (
    <Link
      to={`/events/${eventData.id}/details`}
      className={styleClasses.searchEventCard}
    >
      <div
        className="bg-center bg-contain min-h-[192px] h-[60%] bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        {
          /**
           * This is a hidden image that loads the same background image for the card,
           * but allows us to listen for an error event. Upon an error, we can set the
           * image URL used to the default image.
           */
        }
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
            {eventPrice}
          </p>
        </div>

        <div className="grid">
          <p className="mt-6 font-bold text-base md:text-xl max-w-prose dark:text-du-gray truncate text-left">
            {eventData.eventName}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SearchEventCard;
