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
      <div className="rounded bg-purple-500 p-2">
        <div className="col-span-2 inline-block text-left font-light text-white">
          {text}
        </div>
        <button
          className="col-span-1 float-right text-sm font-semibold text-white"
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
        <h2 className="inline pb-4 text-xl font-bold md:text-2xl">Speakers</h2>
        <button className="float-right dark:text-white" type="button" onClick={addSpeaker}>
          Add a Speaker
        </button>
      </div>

      <div className="mb-6 grid gap-2 rounded border border-slate-300 bg-white p-6 dark:border-teal-400 dark:bg-transparent md:grid-cols-3">
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
