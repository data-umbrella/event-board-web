import React from 'react';
import { Link } from 'react-router-dom';
import { imageUrlForEvent  } from 'utils/urls';

const styleClasses = {
  searchEventCard: `
    bg-white
    block
    border
    border-slate-300
    border-solid
    rounded
  `,
  searchEventThumbnail: `
    w-full
    rounded-t
  `,
  searchEventCardDetail: `
    grid
    grid-cols-2
  `
}

function SearchEventCard({ eventData }) {
  const imageSrc = imageUrlForEvent(eventData);

  return (
    <Link to={`/events/${eventData.id}/details`} className={styleClasses.searchEventCard}>
      <div
        className="card-img"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
      </div>

      <div className="p-8 h-40">
        <div className={styleClasses.searchEventCardDetail}>
          <time className="text-neutral-500" dateTime="2018-07-07">
            {eventData.startDate}
          </time>
          <p className="text-right text-neutral-500 pr-2">
            Free
          </p>
        </div>

        <div>
          <p className="mt-6 font-bold text-xl">{ eventData.eventName }</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchEventCard;
