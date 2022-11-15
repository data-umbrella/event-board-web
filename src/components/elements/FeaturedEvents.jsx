import React from 'react';
import SearchEventCard from 'components/elements/SearchEventCard';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 641 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const styles = {
  featuredEvents: `
    mb-4
  `,
  featuredEventCard: `
    bg-stone-400
    block
    border-slate-50
    border-solid
    h-60
    rounded
  `,
}

function FeaturedEvents ({ events }) {
  return (
    <div className="">
      <div>
        <h1 className="font-semibold mb-2 md:font-bold text-xl md:text-2xl dark:text-slate-50">
          Featured Events
        </h1>
      </div>

      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass={styles.featuredEvents}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="item-class"
      >
        {events.map(eventData => {
          return <SearchEventCard key={eventData.id} eventData={eventData} />
        })}
      </Carousel>
    </div>
  )
}

export default FeaturedEvents;
