export function EventPlanningSection({ evt }) {
  return (
    <div className="grid md:grid-cols-2 mb-10">
      <div className="grid grid-rows-3 gap-1 mb-6">
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
          Registration Deadline: { evt.registrationDeadline }
        </div>

        <div>
          Call for Proposal Deadline: { evt.cfpDeadline }
        </div>

        <div>
          Call for Proposal Link: { evt.cfpLink }
        </div>
        <div>
          Location: { evt.location }
        </div>
      </div>

      <div className="grid grid-rows-3 gap-1">
        { evt.discount && <div>Discount: { evt.discount }</div> }

        <div>
          Language: { evt.language || 'English' }
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

export default EventPlanningSection;
