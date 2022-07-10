import logo from 'assets/thumbnail.png';

const styleClasses = {
  searchEventCard: `
    bg-zinc-300
    block
    border-slate-50
    border-solid
    mh-120
    rounded
  `,
  searchEventThumbnail: `
    w-full
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
          <p className="mt-6 text-xl">{ eventData.title }</p>
        </div>
      </div>
    </div>
  )
}

export default SearchEventCard;
