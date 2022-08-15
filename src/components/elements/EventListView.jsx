import React from 'react';
import logo from 'assets/thumbnail.png';

function EventListView({ events }) {
  return (
    <div>
      {events.map(eventData => {
        return (
          <div
            key={eventData.id}
            className="flex items-center rounded border border-gray-300 mb-3 hover:shadow bg-white"
          >
            <div className="w-1/5 ml-4">
              <img
                src={eventData.imageUrl || logo}
                className="w-full mx-auto"
                alt={eventData.id}
              />
            </div>
            <div className="w-3/4 lg:w-4/6 px-6 py-4">
              <div className="mb-2">
                <p className="text-xl lg:text-base text-black">
                  {eventData.organizationName}
                </p>
              </div>
              <div className="mb-2">
                <p className="font-bold text-black text-2xl lg:text-xl">
                  {eventData.eventName}
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
                July 12, 2022
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventListView;
