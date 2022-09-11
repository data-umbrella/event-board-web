import React from 'react';
import aboutStyleClasses from 'styles/about';
import formStyleClasses from "styles/forms";
import DUlogo from 'assets/data-umbr-full-transp-logo.png';
import SPEC from 'assets/spec-logo.png';

const aboutUsList = [
  { name:'Data Umbrella', 
    about_img: DUlogo,
    style: 'border-t border-l border-b border-r border-black rounded-l',
    url: 'https://www.dataumbrella.org/',
    name_collective: 'Data Umbrella Open Collective',
    url_collective: 'https://opencollective.com/data-umbrella',
    info: ` is a global non-profit community for underrepresented persons 
    in data science that organizes data science events. You can support Data Umbrella’s 
    work by making a donation to the ` },

  { name: 'Sustainable Progress and Equity Collective (SPEC)', 
    about_img: SPEC,
    style: 'border-t border-r border-b border-black rounded-r',
    url: 'https://www.specollective.org/',
    name_collective: 'SPEC Open Collective',
    url_collective: 'https://opencollective.com/spec',
    info: ` is an open learning organization that empowers individuals to be catalysts for positive change. You can support SPEC’s work by making a donation to the ` }
];

function AboutUs() {
  return (
    <div className="content-center border-solid bg-white">
      <div key="aboutUsgrid" className={aboutStyleClasses.aboutUsGrid}>
        {aboutUsList.map(aboutUsInfo => {
          return (
            <div
              key={aboutUsInfo.name}
              className={`${aboutStyleClasses.aboutUsOrg} ${aboutUsInfo.style}`}
            >
              <div>
                <a href={aboutUsInfo.url}>
                  <img src={aboutUsInfo.about_img} alt="logo" className={`mx-auto`}/>
                </a>
              </div>
              <div>
                <a className={formStyleClasses.hyperlinks} href={aboutUsInfo.url}>{aboutUsInfo.name}</a>
                {aboutUsInfo.info}                 
                <a className={formStyleClasses.hyperlinks} 
                  href={aboutUsInfo.url_collective}>{aboutUsInfo.name_collective}
                </a>.
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutUs
