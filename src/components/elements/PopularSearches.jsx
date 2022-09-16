import React from 'react';
import { formStyleClasses } from 'styles/forms';

function PopularSearches() {
  return (
    <div className="container mx-auto mb-4 hidden md:block">
      <p>Popular searches: 
        <a className={formStyleClasses.popularSearch}>
          Python
        </a> 
        <a className={formStyleClasses.popularSearch}>
          Online
        </a> 
        <a className={formStyleClasses.popularSearch}>
          Rstats
        </a> 
        <a className={formStyleClasses.popularSearch}>
          Django
        </a> 
      </p>
    </div>
  )
}

export default PopularSearches;
