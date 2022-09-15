import React from 'react';
import { formatEventTimeFrame } from 'utils/time';
import { formatEventDetail } from 'utils/dates';
import EventPlanningDetail from 'components/elements/EventPlanningDetail';
import EventTags from 'components/elements/EventTags';

function EventPlanningSection({ evt }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-20 mb-10">
      <div className="dark:text-slate-50">
        <EventPlanningDetail
          label="Start Date"
          value={formatEventDetail(evt.startDate)}
        />

        <EventPlanningDetail
          label="End Date"
          value={formatEventDetail(evt.endDate)}
        />

        <EventPlanningDetail
          label="Time"
          value={formatEventTimeFrame(evt)}
        />

        <EventPlanningDetail
          label="Call for Proposal Deadline"
          value={evt.cfpDeadline}
        />

        <EventPlanningDetail
          label="Call for Proposal Link"
          value={evt.cfpLink}
          type="link"
        />

        <EventPlanningDetail
          label="Code of Conduct URL"
          value={evt.codeOfConductUrl}
          type="link"
        />

        <EventPlanningDetail
          label="Location"
          value={evt.eventUrl}
          type="link"
        />
      </div>

      <div className="">
        <EventPlanningDetail
          label="Discount"
          value={evt.discount}
        />

        <EventPlanningDetail
          label="Language"
          value={evt.language || 'English'}
        />

        <EventPlanningDetail
          label="Organization URL"
          value={evt.organizationUrl}
          type="link"
        />

        <EventTags tags={evt.tags} />
      </div>
    </div>
  )
}

export default EventPlanningSection;
