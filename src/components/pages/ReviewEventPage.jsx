import ReviewEventMainSection from 'components/elements/ReviewEventMainSection';

import { MOCK_EVENT } from 'constants/events';

const styleClasses = {
  mainSectionContainer: 'grid md:grid-cols-2 gap-24 mb-16 bg-white grid-cols-none',
  imageContainer: 'bg-gray-300',
  eventTypePillbox: 'block mb-4 bg-pink-300 pl-1 pr-1 w-1/4 text-center rounded text-xl font-medium',
  infoTextSection: 'bg-white p-6 border-slate-300 border-solid border rounded mb-6',
}

export function EventPlanningSection({ evt }) {
  return (
    <div className="grid md:grid-cols-2 mb-10">
      <div className="grid grid-rows-3 gap-1 mb-6">
        <div>
          Call for Proposal Deadline: { evt.cfpDeadline }
        </div>

        <div>
          Call for Proposal Link: { evt.cfpLink }
        </div>

        <div>
          Registration Deadline: { evt.registrationDeadline }
        </div>

        <div>
          Start Date: { evt.startDate }
        </div>

        <div>
          End Date: { evt.endDate }
        </div>

        <div>
          Time: { evt.startTime } - { evt.endTime } { evt.timeZone }
        </div>

        <div>
          Location: { evt.location }
        </div>
      </div>

      <div className="grid grid-rows-3 gap-1">
        <div>
          Discount: { evt.discount }
        </div>

        <div>
          Language: { evt.language }
        </div>

        <div>
          <a
            className="underline text-blue-600"
            href={evt.organizationUrl}
          >
            {evt.organizationUrl}
          </a>
        </div>

        <div>
          <a
            className="underline text-blue-600"
            href={evt.organizationUrl}
          >
            Contact Us
          </a>
        </div>

        <div>
          Social Media Hashtag: { evt.socialMediaHashTag }
        </div>

        <div>
          <span className="mr-2">Eventboard Tags:</span>

          { evt.tags.map(tag => {
            return (
                <div
                  key={tag}
                  className="inline-block mr-1 mb-2 bg-purple-500 text-white pl-2 pr-2 rounded"
                >
                  {tag}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function DescriptionSection({ evt }) {
  return (
    <div className={styleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Description: </h2>
      <p className="leading-7">{evt.description}</p>
    </div>
  )
}

function SpeakersSection({ evt }) {
  return (
    <div className={styleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Speakers: </h2>
      <p className="leading-7">
        {evt.speakers.map(speaker => {
          return <span key={speaker} className="mr-6">{speaker}</span>
        })}
      </p>
    </div>
  )
}

function NotesSection({ evt }) {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-6">
      <div className={styleClasses.infoTextSection}>
        <h2 className="font-semibold text-lg mb-2 rounded">Volunteering: </h2>
        <p className="leading-7">{evt.volunteeringNotes}</p>
      </div>

      <div className={styleClasses.infoTextSection}>
        <h2 className="font-semibold text-lg mb-2 rounded">Notes: </h2>
        <p className="leading-7">{evt.notes}</p>
      </div>
    </div>
  )
}

function AccessibilitySection({ evt }) {
  return (
    <div className={styleClasses.infoTextSection}>
      <h2 className="font-semibold text-lg mb-2 rounded">Accessibility: </h2>
      <div className="grid grid-cols-2">
        {evt.accessibilityDetails.map(detail => {
          return <div key={detail} className="mr-6 mb-2">{detail}</div>
        })}
      </div>
    </div>
  )
}

function ReviewEventPage() {
  const evt = MOCK_EVENT;

  return (
    <div className="container mx-auto pt-16">
      <ReviewEventMainSection evt={evt} />
      <EventPlanningSection evt={evt} />
      <DescriptionSection evt={evt} />
      <SpeakersSection evt={evt} />
      <NotesSection evt={evt} />
      <AccessibilitySection evt={evt} />
    </div>
  )
}

export default ReviewEventPage;
