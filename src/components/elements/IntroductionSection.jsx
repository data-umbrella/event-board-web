import { DONATE_URL } from 'constants/urls';
import React from 'react';

const styleClasses = {
  introSection: `
    container
    mx-auto
    mb-10
  `,
  eventBoardHeading: `
    text-4xl
    font-extrabold
    dark:text-slate-50
  `,
}

function IntroductionSection() {
  return (
    <div className={styleClasses.introSection}>
      <div className="mb-10 mt-10 grid lg:grid-cols-2">
        <div>
          <h1 className={styleClasses.eventBoardHeading}>
            Data Events Board
          </h1>
          <small className="italic text-du-purple-600 text-base font-medium  md:pl-36">
            A <span className="underline">Data Umbrella</span> Initiative
          </small>
        </div>
        <div>
          <a
            href={DONATE_URL}
            target="_blank" 
            rel="noreferrer"
            className="font-medium bg-du-deepPurple dark:bg-du-purple-500 text-white px-12 py-2 text-lg rounded-lg hidden lg:float-right lg:block"
          >
              Donate
          </a>
        </div>
      </div>
    </div>
  )
}

export default IntroductionSection;
