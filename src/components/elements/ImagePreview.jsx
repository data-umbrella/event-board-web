import React from 'react';

function ImagePreview({ url }) {
  if (!url) return (
    <p className="text-black dark:text-white">Add Image</p>
  )

  return <img src={url} alt="preview" />
}

export default ImagePreview;
