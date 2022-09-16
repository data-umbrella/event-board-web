import React from 'react';

function EventTags({ tags }) {
  if (!tags || tags.length === 0) return

  return (
    <div>
      <b className="mr-2 dark:text-slate-50">Tags:</b>

      { tags.map(tag => {
        return (
          <div
            key={tag}
            className="
              mb-2
              mr-1
              inline-block
              rounded
              bg-purple-500
              px-2
              text-white
            "
          >
            {tag}
          </div>
        )
      })}
    </div>
  )
}

export default EventTags;
