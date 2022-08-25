import React from 'react';

function EventTags({ tags }) {
  if (!tags || tags.length === 0) return

  return (
    <div>
      <b className="mr-2">Tags:</b>

      { tags.map(tag => {
        return (
          <div
            key={tag}
            className="
              bg-purple-500
              inline-block
              mb-2
              mr-1
              pl-2
              pr-2
              rounded
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
