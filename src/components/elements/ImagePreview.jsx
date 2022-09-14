import React from 'react';

function ImagePreview({ url }) {
  if (!url) return (
    <p>Add Image</p>
  )

  return <img src={url} alt="preview" />
}

export default ImagePreview;
