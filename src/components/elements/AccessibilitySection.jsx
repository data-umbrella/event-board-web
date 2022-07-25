import { eventStyleClasses } from 'styles/events';

function AccessibilitySection({ evt }) {
  return (
    <div className={eventStyleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Accessibility: </h2>
      <div className="grid grid-cols-2">
        {evt.accessibilityOptions.map(detail => {
          return <div key={detail} className="mr-6 mb-2">{detail}</div>
        })}
      </div>
    </div>
  )
}

export default AccessibilitySection;
