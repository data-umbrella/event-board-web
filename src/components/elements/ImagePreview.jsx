import React from 'react';

function ImagePreview({ url }) {
  if (!url) return (
    <div className="text-center mt-12">Add Image</div>
  )

  return <img src={url} alt="preview" />
}

export default ImagePreview;
