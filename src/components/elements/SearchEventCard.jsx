import logo from 'assets/thumbnail.png';

const styleClasses = {
  searchEventCard: `
    bg-white
    block
    border
    border-slate-300
    border-solid
    mh-120
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
  return (
    <div className={styleClasses.searchEventCard}>
      <img src={logo} className={styleClasses.searchEventThumbnail} />

      <div className="p-8">
        <div className={styleClasses.searchEventCardDetail}>
          <time className="text-neutral-500" dateTime="2018-07-07">July 7, 2022</time>
          <p className="text-right text-neutral-500 pr-2">Free</p>
        </div>

        <div>
          <p className="mt-6 font-bold text-xl">{ eventData.title }</p>
        </div>
      </div>
    </div>
  )
}

export default SearchEventCard;
