import React from 'react';

const styleClasses = {
  introSection: `
    container
    mx-auto
    mb-10
  `,
  eventBoardHeading: `
    text-4xl
    font-bold
    dark:text-slate-50
  `,
}

function IntroductionSection() {
  return (
    <div className={styleClasses.introSection}>
      <div className="mb-10 mt-10">
        <h1 className={styleClasses.eventBoardHeading}>
          Data Events Board
        </h1>
        <small className="md:pl-36 italic text-violet-400">
          A Data Umbrella Initiative
        </small>
      </div>
    </div>
  )
}

export default IntroductionSection;
