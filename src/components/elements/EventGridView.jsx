import SearchEventCard from 'components/elements/SearchEventCard';

const styles = {
  searchEventGroup: `
    gap-6
    grid
    md:grid-cols-3
    container
    mx-auto
    sm:grid-cols-none
    mb-10
  `,
}

function GridView({ events }) {
  return (
    <div className={styles.searchEventGroup}>
      {events.map(eventData => {
        return (
          <SearchEventCard key={eventData.id} eventData={eventData} />
        )
      })}
    </div>
  )
}

export default GridView;
