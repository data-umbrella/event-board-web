import React from 'react';
import { formatEventTimeFrame } from 'utils/time';
import { formatEventDetail } from 'utils/dates';
import { LANGUAGE_OPTIONS } from 'constants/languages';
import EventPlanningDetail from 'components/elements/EventPlanningDetail';
import EventTags from 'components/elements/EventTags';
import EventHashTags from 'components/elements/EventHashTags';

function languageOptionForEvent(languageAbbreviation) {
  return LANGUAGE_OPTIONS.find(option => {
    return option.value === languageAbbreviation;
  });
}

function EventPlanningSection({ evt }) {
  const languageOption = languageOptionForEvent(evt.language);

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
          label="Code of Conduct"
          name="Link"
          value={evt.codeOfConductUrl}
          type="link"
        />

        <EventPlanningDetail
          label="Location"
          value={evt.eventUrl}
          type="link"
        />

        <EventPlanningDetail
          label="Country"
          value={evt.country}
        />

        <EventPlanningDetail
          label="Region"
          value={evt.region}
        />
      </div>

      <div className="">
        <EventPlanningDetail
          label="Discount"
          value={evt.discount}
        />

        <EventPlanningDetail
          label="Language"
          value={languageOption && languageOption.label}
        />

        <EventHashTags hashTags={evt.hashTag} />

        <EventPlanningDetail
          label="Organization"
          name={evt.organizationName}
          value={evt.organizationUrl}
          type="link"
        />

        <EventPlanningDetail
          label="In Person"
          value={evt.inPerson ? 'Yes' : 'No'}
        />

        <EventPlanningDetail
          label="Virtual"
          value={evt.virtual ? 'Yes' : 'No'}
        />

        <EventTags tags={evt.tags} />
      </div>
    </div>
  )
}

export default EventPlanningSection;
