import React, { useState } from 'react';
import formStyleClasses from 'styles/forms';

function SpeakerPillbox ({ speaker, onChange, onRemove }) {
  const [text, setText] = useState(speaker);
  const [editing, setEditing] = useState(speaker === '');

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEditing(false);
      onChange(text);
    }
  }

  function removeItem() {
    onRemove(text);
  }

  if (editing) {
    return (
      <input
        type="text"
        id="speakerName"
        name="speakerName"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`${formStyleClasses.input} h-10`}
      />
    )
  } else {
    return (
      <div className="bg-purple-500 rounded p-2">
        <div className="inline-block col-span-2 text-left text-white font-light">
          {text}
        </div>
        <button
          className="col-span-1 float-right text-white text-sm font-semibold"
          type="button"
          onClick={removeItem}
        >
          Remove
        </button>
      </div>
    )
  }
}

function SpeakersField ({ value, onChange }) {
  const [speakers, setSpeakers] = useState(value);

  function addSpeaker() {
    if (speakers.includes('')) return;
    setSpeakers([...speakers, '']);
  }

  function updateSpeaker(newSpeaker) {
    const newSpeakers = speakers.filter(speaker => speaker !== '');
    setSpeakers([...newSpeakers, newSpeaker]);
    onChange('speakers', newSpeakers);
  }

  function removeSpeaker(speakerToRemove) {
    const newSpeakers = speakers.filter(speaker => speakerToRemove !== speaker);
    setSpeakers([...newSpeakers]);
    onChange('speakers', newSpeakers);
  }

  return (
    <div>
      <div className="mb-2">
        <h2 className="text-xl md:text-2xl pb-4 inline font-bold">Speakers</h2>
        <button className="float-right font-bold dark:text-du-lightPurple" type="button" onClick={addSpeaker}>
          Add a Speaker
        </button>
      </div>

      <div className="grid md:grid-cols-3 bg-white dark:bg-transparent rounded border border-slate-300 dark:border-teal-400 p-6 gap-2 mb-6">
        {Array.from(speakers).map(speaker => {
          const key = speaker === '' ? 'editing' : speaker
          return (
            <SpeakerPillbox
              key={key}
              speaker={speaker}
              speakers={speakers}
              onChange={updateSpeaker}
              onRemove={removeSpeaker}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SpeakersField;
