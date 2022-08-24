import { React } from 'react';

function FeaturedEventField({ value, onChange }) {

  const handleChange = () => {
    onChange('featured', !value);
  };

  return (
    <>
      <label className="block font-bold mb-2">Featured Event</label>

      <div className=" bg-white rounded p-6">
        <p>
          If you would like this event to be featured,
          check the box below and follow the link to make
          a donation to this Event Board on Open Collective.
        </p>
        <br></br>
        <div>
          <input 
            id="featured-event"
            name="feature-event"
            type="checkbox"
            className="mr-2"
            value={value}
            onChange={handleChange}
          />
          <span className="font-medium">
            I would like my event to be featured
          </span>
        </div>
        <br></br>
        <div>
          <a 
            target="_blank"
            rel="noreferrer"
            className="font-medium underline"
            href="https://opencollective.com/data-umbrella"
          >
            Donate to Event Board &gt;&gt;
          </a>
        </div>
      </div>
    </>
  )
}

export default FeaturedEventField;
