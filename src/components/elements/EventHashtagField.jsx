import React, { useState } from 'react';
import formStyleClasses from 'styles/forms';

function HashtagPillbox ({ hashtag, onChange, onRemove }) {
  const [text, setText] = useState(hashtag);
  const [editing, setEditing] = useState(hashtag === '');

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
        id="hashtag"
        name="hashtag"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`${formStyleClasses.input} h-10`}
      />
    )
  } else {
    return (
      <div className="bg-purple-500 rounded p-2">
        <div className="inline-block col-span-2 text-left text-white font-light gap-2">
          {text}
        </div>
        <button
          className="col-span-1 float-right text-white text-sm font-semibold"
          type="button"
          onClick={removeItem}
        >
          &#10006;
        </button>
      </div>
    )
  }
}

function EventHashtagField ({ value, onChange }) {
  const [hashtags, setHashtags] = useState(value);

  function addHashtag() {
    if (hashtags.includes('')) return;
    setHashtags([...hashtags, '']);
  }

  function updateHashtag(newHashtag) {
    const newHashtags = hashtags.filter(hashtag => hashtag !== '');
    setHashtags([...newHashtags, newHashtag]);
    onChange('hashtags', newHashtags);
  }

  function removeHashtag(HashtagToRemove) {
    const newHashtags = hashtags.filter(hashtag => HashtagToRemove !== hashtag);
    setHashtags([...newHashtags]);
    onChange('hashtags', newHashtags);
  }

  return (
    <div>
      <div className="mb-2">
        <label className="pb-4 inline">Event Hashtag(s)</label>
        <button
          className="float-right font-bold dark:text-du-lightPurple"
          type="button"
          onClick={addHashtag}
        >
          Add
        </button>
      </div>

      <div className="grid md:grid-cols-3 bg-white dark:bg-transparent rounded border border-black dark:border-teal-400 p-6 gap-2 mb-6">
        {Array.from(hashtags).map((hashtag) => {
          const key = hashtag === "" ? "editing" : hashtag;
          return (
            <HashtagPillbox
              key={key}
              hashtag={hashtag}
              hashtags={hashtags}
              onChange={updateHashtag}
              onRemove={removeHashtag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EventHashtagField;
