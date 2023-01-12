//import { DONATE_URL } from 'constants/urls';
//import { DATA_UMBRELLA_URL } from 'constants/urls';
import { DONATE_URL, DATA_UMBRELLA_URL } from 'constants/urls';
import React from 'react';
import ExternalLinkIcon from 'assets/ui/externalLink.svg'

const styleClasses = {
  introSection: `
    container
    mx-auto
    mb-10
  `,
  eventBoardHeading: `
    text-[40px]
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
            A <a className="underline" href={DATA_UMBRELLA_URL} target="_blank" rel="noreferrer">Data Umbrella</a> Initiative
          </small>
        </div>
        <div>
          <a
            href={DONATE_URL}
            target="_blank" 
            rel="noreferrer"
            className="font-medium bg-du-deepPurple dark:bg-du-purple-500 text-white px-12 py-2 text-lg rounded-lg hidden lg:float-right lg:block"
          >
            Donate<img className="pl-1 inline" src={ExternalLinkIcon} alt="external-link"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IntroductionSection;
