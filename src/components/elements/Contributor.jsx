import React from 'react';
import aboutStyleClasses from 'styles/about';
import twitter from 'assets/twitter.svg';
import linkedin from 'assets/linkedin.svg';
import github from 'assets/github.svg';
import website from 'assets/website.svg';
import logo from 'assets/logo.svg';
import Reshama from 'assets/reshama.png'
import Joe from 'assets/joe.png'
import Ilia from 'assets/ilia.png'
import Yoline from 'assets/yoline.png'
import Victoria from 'assets/victoria.png'
import Crystal from 'assets/crystal.png'

const IMAGE_MAP = {
  twitter,
  linkedin,
  github,
  website,
}

// Move into constants
const contributorList = [
  { name: 'Reshama Shaikh',
    title: 'Event Board Project Manager',
    organization: 'Data Umbrella',
    image: Reshama,
    socialMediaLinks: [
      { name: 'twitter', link: 'https://twitter.com/reshamas?lang=en' },
      { name: 'github', link: 'https://github.com/reshamas' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/reshamas/' },
    ]
  },
  {
    name: 'Joe Torreggiani',
    title: 'Project Executive',
    organization: 'SPEC',
    image: Joe,
    socialMediaLinks: [
      { name: 'twitter', link: 'https://twitter.com/joetorreggiani?lang=en' },
      { name: 'github', link: 'https://github.com/jtorreggiani' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/joetorreggiani/' },

    ]
  },
  { name: 'Ilia de Leon',
    title: 'Design Lead',
    organization: 'SPEC',
    image: Ilia,
    socialMediaLinks: [
      { name: 'github', link: 'https://example.com' },
      { name: 'linkedin', link:'https://www.linkedin.com/in/iliadeleon/'},
    ]
  },
  { name: 'Yoline Banerjee',
    title: 'Software Engineer',
    organization: 'SPEC',
    image: Yoline,
    socialMediaLinks: [
      { name: 'github', link: 'https://example.com' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/yolineb/' },
    ]
  },
  { name: 'Victoria Lo',
    title: 'Software Engineer',
    organization: 'SPEC',
    image: Victoria,
    socialMediaLinks: [
      { name: 'github', link: 'https://github.com/victoriaklo' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/victoria-lo/' },
    ]
  },
  { name: 'Crystal Shamsi',
    title: 'Software Engineer',
    organization: 'SPEC',
    image: Crystal,
    socialMediaLinks: [
      { name: 'github', link: 'https://github.com/crystallynnvoss' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/crystalshamsi/' },
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
          <div className="inline-block p-1" key={mediaLink.name}>
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
  
  return <img className="pt-4 pb-3" src={src} alt="logo" />
}

function Contributor() {
  return (
    <div>
      <div className={aboutStyleClasses.contributorGrid}>
        {contributorList.map(contributorInfo => {
          return (
            <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1' key={contributorInfo.name}>
              <div>
                <ContributorPhoto imageSrc={contributorInfo.image} />
              </div>
              <div className='place-self-center m-2 text-left md:text-center dark:text-white'>
                <h3>{ contributorInfo.name }</h3>
                <small>{ contributorInfo.title }</small><br />
                <small>{ contributorInfo.organization }</small>
                <ContributorSocialMediaLinks contributorInfo={contributorInfo} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contributor
