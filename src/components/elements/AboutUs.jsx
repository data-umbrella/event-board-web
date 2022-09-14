import React from 'react';
import aboutStyleClasses from 'styles/about';
import DUlogo from 'assets/data-umbr-full-transp-logo.png';
import SPEC from 'assets/speclogoname.png';
import twitter from 'assets/twitter.svg';
import linkedin from 'assets/linkedin.svg';
import github from 'assets/github.svg';
import website from 'assets/website.svg';

const IMAGE_MAP = {
  twitter,
  linkedin,
  github,
  website,
}

const aboutUsList = [
  { 
    name:'Data Umbrella', 
    about_img: DUlogo,
    url: 'https://www.specollective.org/',
    style: 'border-t border-l border-b border-r border-black rounded-l',
    link: 'https://www.dataumbrella.org/',
    info: ` is a global non-profit community for underrepresented persons 
    in data science that organizes data science events. You can support Data Umbrella’s 
    work by making a donation to the Data Umbrella Open Collective.` ,
    socialMediaLinks: [
      { name: 'website', link: 'https://www.dataumbrella.org/' },
      { name: 'twitter', link: 'https://twitter.com/DataUmbrella?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' },
      { name: 'linkedin', link: 'https://www.linkedin.com/company/dataumbrella/' },
    ]
  },
  { 
    name: 'Sustainable Progress and Equity Collective', 
    about_img: SPEC,
    style: 'border-t border-r border-b border-black rounded-r',
    link: 'https://www.specollective.org/',
    info: ` is an open learning organization 
    that empowers individuals to be catalysts for positive change. You can support SPEC’s work 
    by making a donation to the SPEC Open Collective.`,
    socialMediaLinks: [
      { name: 'website', link: 'https://www.specollective.org/' },
      { name: 'twitter', link: 'https://mobile.twitter.com/specollective' },
      { name: 'linkedin', link: 'https://www.linkedin.com/company/specollective/' },
    ]
  }

];


function ContributorSocialMediaLinks({ aboutUsInfo }) {
  return (
    <div className="mt-4">
      { aboutUsInfo.socialMediaLinks.map(mediaLink => {
        return (
          <div className="inline-block p-2" key={mediaLink.name}>
            <a href={mediaLink.link}>
              <img className="mx-auto h-10 w-10" src={IMAGE_MAP[mediaLink.name]} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

function AboutUs() {
  return (
    <div key="aboutUsgrid" className={aboutStyleClasses.aboutUsCards}>
      {aboutUsList.map(aboutUsInfo => {
        return (
          <div
            key={aboutUsInfo.name}
            className='grid grid-rows-3 border-2 border-black dark:border-du-lightAqua dark:text-white dark:bg-slate-700 md:m-0 p-2 m-6 rounded bg-white'
          >
            <div className='pt-2'>
              <img src={aboutUsInfo.about_img} alt="logo" className={`mx-auto`}/>
            </div>
            <div className='px-4 m-1 object-contain text-left'>
              <a
                href={aboutUsInfo.link}
                target="_blank"
                rel="noreferrer"
                className="text-teal-500 underline dark:text-blue-700"
              >
                {aboutUsInfo.name}
              </a>
              {aboutUsInfo.info}
            </div>
            <ContributorSocialMediaLinks aboutUsInfo={aboutUsInfo} />
          </div>
        )
      })}
    </div>
    // </div>
  )
}

export default AboutUs
