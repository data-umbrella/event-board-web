import SearchEventCard from 'components/elements/SearchEventCard';

const styleClasses = {
  searchEventGroup: `
    gap-6
    grid
    md:grid-cols-3
    container
    mx-auto
    sm:grid-cols-none
    mb-10
  `,
  searchResultsHeading: 'font-bold text-lg mb-2',
}

function SearchEvents({ events }) {
  return (
    <div>
      <div>
        <h1 className={styleClasses.searchResultsHeading}>
          Search Results
        </h1>
      </div>
      <div className={styleClasses.searchEventGroup}>
        {events.map(eventData => {
          return (
            <SearchEventCard key={eventData.id} eventData={eventData} />
          )
        })}
      </div>
    </div>
  )
}

export default SearchEvents;
