import logo from 'assets/thumbnail.png';
import moment from 'moment';

function GenerateMonthMap(startDate, endDate) {
  const dateMap = {};
  const start = moment(startDate)
  const end = moment(endDate)
  
  while (start <= end) {
    dateMap[start.format('YYYY-MM')] = []
    start.add(1,'month')
  }
  return dateMap;

}

function processEventsList(eventsList, dateMap) {
  if (!Array.isArray(eventsList)) {
    return []
  };

  for (let event of eventsList) {
    const startDate = moment(event.startDate).format('YYYY-MM');
    if (dateMap[startDate]) {
      dateMap[startDate].push(event)
    };

  }

  return dateMap;
}

function EventListView(events) {
  events = [{id: 1, imageUrl: "", organizationName: "hello", title: "test", eventType: "Conference", startDate: "July 12, 2022", endDate: "July 14, 2022"},
  {id: 2, imageUrl: "", organizationName: "hello", title: "test", eventType: "Conference", startDate: "July 12, 2022", endDate: "November 14, 2022"},
  {id: 3, imageUrl: "", organizationName: "hello", title: "test", eventType: "Conference", startDate: "July 12, 2022", endDate: "July 14, 2023"},
  {id: 4, imageUrl: "", organizationName: "hello", title: "test", eventType: "Conference", startDate: "August 21, 2022", endDate: "December 14, 2022"},
  {id: 5, imageUrl: "", organizationName: "hello", title: "test", eventType: "Conference", startDate: "January 12, 2023", endDate: "July 14, 2023"},
]
  
  const formatDate = (startDate, endDate) => {
    const start = moment(startDate)
    const end = moment(endDate)
    return `${start.date()} - ${end.date()}`
  }
  const eventsList = processEventsList(events, GenerateMonthMap("July 12, 2022", "July 14, 2023"))


  console.log(processEventsList(events, GenerateMonthMap("July 12, 2022", "July 14, 2023")))

  return (
    <div>
      {Object.keys(eventsList).map(key => {
        return eventsList[key].length === 0 ? null : <div>{moment(key).format('MMMM YYYY')} {eventsList[key].map(event => {
          return (
            <div key={event.id} className="flex items-center rounded border border-gray-300 mb-3 hover:shadow bg-white">
            <div className="w-1/5 ml-4">
              <img src={event.imageUrl || logo} className="w-full mx-auto" alt={event.id} />
            </div>
            <div className="w-3/4 lg:w-4/6 px-6 py-4">
              <div className="mb-2">
                <p className="text-xl lg:text-base text-black">
                  {event.organizationName}
                </p>
              </div>
              <div className="mb-2">
                <p className="font-bold text-black text-2xl lg:text-xl">
                  {event.title}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-xl lg:text-base">
                  {event.eventType}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl lg:text-base text-black">
                {formatDate(event.startDate, event.endDate)}
              </p>
            </div>
          </div>
          )
        })}
        </div>
      })}
    </div>
  )
}

export default EventListView;
