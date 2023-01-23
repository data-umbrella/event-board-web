import { React } from 'react';
import { eventStyleClasses } from 'styles/events';

function FeaturedEventField({ value, onChange }) {
  const handleChange = () => {
    onChange('featured', !value);
  };

  return (
    <div className="rounded">
      <p>
        If you would like this event to be featured, check the box below and
        follow the link to make a donation to this Event Board on Open
        Collective.
      </p>

      <div 
        id="featured-event-donation-info"
        className={eventStyleClasses.donationPillBox}
      >
        <p>
          $1-99: General Donation
          <span className="pl-6">$100+: Featured Event</span>
        </p>
      </div>
      <div>
        <input
          checked={value ? 'checked' : ''}
          className="mr-2"
          id="featured-event"
          name="feature-event"
          onChange={handleChange}
          type="checkbox"
          value={value}
        />
        <span className="text-black dark:text-white font-medium">
          I would like my event to be featured
        </span>
      </div>
      <br></br>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          className="font-medium underline"
          href="https://opencollective.com/data-umbrella/contribute/data-science-event-board-37473/checkout"
        >
          Donate to Event Board &gt;&gt;
        </a>
      </div>
    </div>
  );
}

export default FeaturedEventField;
