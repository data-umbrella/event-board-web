import { eventStyleClasses } from 'styles/events';

function SpeakersSection({ evt }) {
  return (
    <div className={eventStyleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Speakers: </h2>
      <p className="leading-7">
        {evt.speakers.map(speaker => {
          return <span key={speaker} className="mr-6">{speaker}</span>
        })}
      </p>
    </div>
  )
}

export default SpeakersSection;
