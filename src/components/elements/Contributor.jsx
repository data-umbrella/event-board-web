import React from 'react';
import aboutStyleClasses from 'styles/about';
import twitter from 'assets/twitter.svg';
import linkedin from 'assets/linkedin.svg';
import github from 'assets/github.svg';
import website from 'assets/website.svg';
import logo from 'assets/logo.svg';

const IMAGE_MAP = {
  twitter,
  linkedin,
  github,
  website,
}

// Move into constants
const contributorList = [
  {
    name: 'Joe Torreggiani',
    title: 'Project Executive',
    organization: 'SPEC',
    image: logo,
    socialMediaLinks: [
      { name: 'twitter', link: 'https://example.com' },
      { name: 'linkedin', link: 'https://example.com' },
    ]
  },
  { name: 'Victoria',
    title: 'Software Engineer',
    organization: 'SPEC',
    socialMediaLinks: [
      { name: 'twitter', link: 'https://example.com' },
      { name: 'linkedin', link: 'https://example.com' },
      { name: 'github', link: 'https://example.com' },
    ]
  },
  { name: 'Reshama',
    title: 'Event Board Project Manager',
    organization: 'Data Umbrella',
    socialMediaLinks: [
      { name: 'twitter', link: 'https://example.com' },
      { name: 'github', link: 'https://example.com' },
    ]
  },
  { name: 'Yoline',
    title: 'Software Engineer',
    organization: 'SPEC',
    socialMediaLinks: [
      { name: 'twitter', link: 'https://example.com' },
      { name: 'linkedin' },
      { name: 'github', link: 'https://example.com' },
    ]
  },
  { name: 'Crystal',
    title: 'Software Engineer',
    organization: 'SPEC',
    socialMediaLinks: [
      { name: 'twitter', link: 'https://example.com' },
      { name: 'linkedin', link: 'https://example.com' },
    ]
  },
  // {name:'CZI', sponsor_img:CZIImg, title:'', org:'', contact:{twitter:'', github:'', linkedin: '', website: ''}},
  // {name: 'Digital Ocean', sponsor_img: DigitalOceanImg},
];

// TODO: Move subcomponents in separate element files.
function ContributorSocialMediaLinks({ contributorInfo }) {
  return (
    <div className="mt-4">
      { contributorInfo.socialMediaLinks.map(mediaLink => {
        return (
          <div className="inline-block p-2" key={mediaLink.name}>
            <a href={mediaLink.link}>
              <img className="mx-auto" src={IMAGE_MAP[mediaLink.name]} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

// TODO: Move into separate component.
function ContributorPhoto({ imageSrc }) {
  const src = imageSrc ? imageSrc : logo;
  
  return <img src={src} alt="logo" />
}

function Contributor() {
  return (
    <div>
      <div className={aboutStyleClasses.contributorGrid}>
        {contributorList.map(contributorInfo => {
          return (
            <div key={contributorInfo.name}>
              {/* <div className="w-full bg-slate-300 h-40 mb-6"></div> */}
              <ContributorPhoto imageSrc={contributorInfo.image} />
              <h3>{ contributorInfo.name }</h3>
              <h4>{ contributorInfo.title }</h4>
              <small>{ contributorInfo.organization }</small>
              <ContributorSocialMediaLinks contributorInfo={contributorInfo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contributor
