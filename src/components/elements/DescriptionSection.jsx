import { eventStyleClasses } from 'styles/events';

function DescriptionSection({ evt }) {
  return (
    <div className={eventStyleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Description: </h2>
      <p className="leading-7">{evt.description}</p>
    </div>
  )
}

export default DescriptionSection;
