import React, { useState } from 'react';
import formStyleClasses from 'styles/forms';

function TagPillbox({ tag, onChange, onRemove }) {
  const [text, setText] = useState(tag);
  const [editing, setEditing] = useState(tag === "");

  function handleKeyPress(e) {
    if (e.key === "Enter") {
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
        id="tag"
        name="tag"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`${formStyleClasses.input} h-10`}
      />
    );
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
    );
  }
}

// assume value is a csv string
// value = "tag1,tag2,tag3"
function EventTagsField({ value, onChange }) {
  const [tags, setTags] = useState(value ? value.split(",") : []);

  function addTag() {
    if (tags.includes("")) return;
    setTags([...tags, ""]);
    onChange('tags', [...tags, ""].join(','))
  }

  function updateTag(newTag) {
    const newTags = tags.filter((tag) => tag !== "");
    setTags([...newTags, newTag]);
    onChange("tags", [...newTags, newTag].join(","));
  }

  function removeTag(tagToRemove) {
    const newTags = tags.filter(
      (tag) => tagToRemove !== tag
    );
    setTags([...newTags]);
    onChange("tags", [...newTags].join(","));
  }

  return (
    <div>
      <div className="mb-2">
        <label className="pb-4 inline">Event Tag(s)</label>
        <button
          className="float-right font-bold dark:text-du-lightPurple"
          type="button"
          onClick={addTag}
        >
          Add
        </button>
      </div>

      <div className="grid md:grid-cols-3 bg-white dark:bg-transparent rounded border border-black dark:border-teal-400 p-6 gap-2 mb-6">
        {Array.from(tags).map((tag) => {
          const key = tag === "" ? "editing" : tag;
          return (
            <TagPillbox
              key={key}
              tag={tag}
              tags={tags}
              onChange={updateTag}
              onRemove={removeTag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EventTagsField;
