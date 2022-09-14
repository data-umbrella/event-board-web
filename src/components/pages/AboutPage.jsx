import React from 'react';
import AboutUs from 'components/elements/AboutUs';
import Contributor from 'components/elements/Contributor';
import aboutStyleClasses from 'styles/about';

function AboutPage() {
  return (
    <div className={aboutStyleClasses.aboutUsContainer}>
      <div className="hidden md:block">
        <h1 className="pt-12 text-2xl font-bold">About the Event Board</h1>
        <p className="text-lg pl-0.5 pt-2 pb-2">
          This Data Events Board is a Data Umbrella initiative.
          This platform is for the community to share their events.
          In the spirit of open source, this event board has been built using
          open source software (Python, Django, React) and the application code
          is publicly available.
        </p>
      </div>

      <div className={aboutStyleClasses.aboutUsContainer}>
        <h1 className="text-2xl font-bold pb-3 pt-8">
          About Us
        </h1>
        <AboutUs />
      </div>

      <div className='pt-10'>
        <strong><h1>We Built this board</h1></strong>
        <Contributor />
      </div>
    </div>
  )
}

export default AboutPage;
