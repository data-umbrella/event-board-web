import React from 'react';
import aboutStyleClasses from 'styles/about';
import DUlogo from 'assets/data-umbr-full-transp-logo.png';
import SPEC from 'assets/spec-logo.png';

const aboutUsList = [
  { name:'Data Umbrella', 
    about_img: DUlogo,
    style: 'border-t border-l border-b border-r border-black rounded-l',
    url: 'https://www.dataumbrella.org/',
    info: `Data Umbrella is a global non-profit community for underrepresented persons 
    in data science that organizes data science events. You can support Data Umbrella’s 
    work by making a donation to the Data Umbrella Open Collective.` },

  { name: 'Sustainable Progress and Equity Collective', 
    about_img: SPEC,
    style: 'border-t border-r border-b border-black rounded-r',
    url: 'https://www.specollective.org/',
    info: `Sustainable Progress & Equality Collective (SPEC) is an open learning organization that empowers individuals to be catalysts for positive change. You can support SPEC’s work by making a donation to the SPEC Open Collective.` }
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
                <img src={aboutUsInfo.about_img} alt="logo" className={`mx-auto`}/>
                <a href={aboutUsInfo.name}>{aboutUsInfo.url}</a>;
              </div>
              <div>
                {aboutUsInfo.info}
              </div> 
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutUs
