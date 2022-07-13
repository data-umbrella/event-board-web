import SearchEventCard from 'components/elements/SearchEventCard';

const styleClasses = {
  featuredEvents: `
    gap-6
    grid
    md:grid-cols-3
    container
    mx-auto
    sm:grid-cols-none
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
    <div className="mt-10">
      <div>
        <h1 className="font-bold text-lg mb-2">Feature Events</h1>
      </div>

      <div className={styleClasses.featuredEvents}>
        {events.map(eventData => {
          return <SearchEventCard key={eventData.id} eventData={eventData} />
        })}
      </div>
    </div>
  )
}

export default FeaturedEvents;
