import React from 'react';

const styleClasses = {
  introSection: `
    container
    mx-auto
    mb-10
    dark:bg-slate-800
  `,
  eventBoardHeading: `
    text-4xl
    font-bold
  `,
}

function IntroductionSection() {
  return (
    <div className={styleClasses.introSection}>
      <div className="mb-10 mt-10">
        <h1 className={styleClasses.eventBoardHeading}>
          Data Events Board
        </h1>
        <small className="pl-36 italic text-du-purple-600">
          A Data Umbrella Initiative
        </small>
      </div>
    </div>
  )
}

export default IntroductionSection;
