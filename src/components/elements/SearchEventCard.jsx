import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { imageUrlForEvent  } from 'utils/urls';
import defaultThumbnail from 'assets/thumbnail.png';

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
  const [imageUrl, setImageUrl] = useState(imageUrlForEvent(eventData));

  const handleImageError = () => {
    setImageUrl(defaultThumbnail);
	};

  return (
		<Link to={`/events/${eventData.id}/details`} className={styleClasses.searchEventCard}>
			<div className="card-img" style={{ backgroundImage: `url('${imageUrl}')` }}>
        {/**
         * This is a hidden image that loads the same background image for the card,
         * but allows us to listen for an error event. Upon an error, we can set the
         * image URL used to the default image.
         */}
				<img src={imageUrl} onError={handleImageError} className="w-full" alt="logo" style={{display: "none"}}/>
			</div>

			<div className="p-8 h-40">
				<div className={styleClasses.searchEventCardDetail}>
					<time className="text-neutral-500" dateTime="2018-07-07">
						{eventData.startDate}
					</time>
					<p className="text-right text-neutral-500 pr-2">Free</p>
				</div>

				<div>
					<p className="mt-6 font-bold text-xl">{eventData.eventName}</p>
				</div>
			</div>
		</Link>
	);
}

export default SearchEventCard;
