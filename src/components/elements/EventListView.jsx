import logo from 'assets/thumbnail.png';
import moment from 'moment';

function EventListView(events) {
  events = [{id: 1, imageUrl: "", organizationName: "hello", title: "test", eventType: "Conference", startDate: "July 12, 2022", endDate: "July 14, 2022"}]
  
  const formatDate = (startDate, endDate) => {
    const start = moment(startDate)
    const end = moment(endDate)
    return `${start.date()} - ${end.date()}`
  }
  return (
    <div>
      {events.map(eventData => {
        return (
          <div key={eventData.id} className="flex items-center rounded border border-gray-300 mb-3 hover:shadow bg-white">
            <div className="w-1/5 ml-4">
              <img src={eventData.imageUrl || logo} className="w-full mx-auto" alt={eventData.id} />
            </div>
            <div className="w-3/4 lg:w-4/6 px-6 py-4">
              <div className="mb-2">
                <p className="text-xl lg:text-base text-black">
                  {eventData.organizationName}
                </p>
              </div>
              <div className="mb-2">
                <p className="font-bold text-black text-2xl lg:text-xl">
                  {eventData.title}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-xl lg:text-base">
                  {eventData.eventType}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl lg:text-base text-black">
                {formatDate(eventData.startDate, eventData.endDate)}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-xl lg:text-base text-black">
                {eventData.endDate}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventListView;
