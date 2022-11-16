import React from 'react';


function EventHashTags({ hashTags }) {
  if (!hashTags || hashTags.length === 0) return

  return (
    <div>
      <b className="mr-2 dark:text-slate-50">Event Hashtag(s):</b>

      { hashTags.map(hashTag => {
        return (
          <div
            key={hashTag}
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
            {hashTag}
          </div>
        )
      })}
    </div>
  )
}

export default EventHashTags;
