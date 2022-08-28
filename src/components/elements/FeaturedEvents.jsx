import React from 'react';
import SearchEventCard from 'components/elements/SearchEventCard';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

// gap-6
// grid
// md:grid-cols-3
// container
// mx-auto
// sm:grid-cols-none

const styles = {
  featuredEvents: `
    mb-10
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
        <h1 className="font-bold text-lg mb-2 dark:text-slate-50">Feature Events</h1>
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
