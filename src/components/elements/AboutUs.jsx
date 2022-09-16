import React, { useState } from 'react';
import aboutStyleClasses from 'styles/about';
import DULogo from 'assets/data-umbr-full-transp-logo.png';
import SPECLogo from 'assets/speclogoname.png';
import twitter from 'assets/twitter.svg';
import linkedin from 'assets/linkedin.svg';
import github from 'assets/github.svg';
import website from 'assets/website.svg';
import websiteWhite from 'assets/websiteWhite.svg';
import twitterWhite from 'assets/twitterWhite.svg';
import linkedInWhite from 'assets/linkedInWhite.svg';
import githubWhite from 'assets/githubWhite.svg';

const IMAGE_MAP = {
  twitter,
  linkedin,
  github,
  website,
  twitterWhite,
  linkedInWhite,
  githubWhite,
  websiteWhite
}

const DATA_UMBRELLA_SOCIAL_MEDIA_LINKS = [
  { name: 'website', darkName: 'websiteWhite', link: 'https://www.dataumbrella.org/' },
  { name: 'twitter', darkName: 'twitterWhite', link: 'https://twitter.com/DataUmbrella?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' },
  { name: 'linkedin', darkName: 'linkedInWhite', link: 'https://www.linkedin.com/company/dataumbrella/' },
]

const SPEC_SOCIAL_MEDIA_LINKS = [
  { name: 'website',  darkName: 'websiteWhite', link: 'https://www.specollective.org/' },
  { name: 'twitter', darkName: 'twitterWhite', link: 'https://mobile.twitter.com/specollective' },
  { name: 'linkedin', darkName: 'linkedInWhite', link: 'https://www.linkedin.com/company/specollective/' },
]

function ContributorSocialMediaLinks({ socialMediaLinks }) {
  const [colorTheme, setTheme] = useState(localStorage.theme);
  window.addEventListener("themeChanged", () => setTheme(localStorage.theme))

  return (
    <div className="mt-4">
      { socialMediaLinks.map(mediaLink => {
        return (
          <div className="inline-block p-2" key={mediaLink.name}>
            <a href={mediaLink.link}>
              <img className="mx-auto h-10 w-10" src={colorTheme === 'light' ? IMAGE_MAP[mediaLink.name] : IMAGE_MAP[mediaLink.darkName]} />
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
      <div className="m-6 grid grid-rows-1 rounded border-2 border-black bg-white p-2 dark:border-du-lightAqua dark:bg-slate-700 dark:text-white md:m-0">
        <div className="py-4">
          <img src={DULogo} alt="logo" className={`mx-auto`}/>
        </div>
        <div className="row-span-2 m-1 object-contain px-4 text-left">
          <a
            href="https://www.dataumbrella.org/"
            target="_blank"
            rel="noreferrer"
            className="text-teal-500 underline dark:text-blue-700"
          >
            Data Umbrella
          </a>
          &nbsp;is a global non-profit community for underrepresented persons in data science
          that organizes data science events. You can support Data Umbrella&apos;s work by
          making a donation to the&nbsp;
          <a
            href="https://opencollective.com/data-umbrella"
            target="_blank"
            rel="noreferrer"
            className="text-teal-500 underline dark:text-blue-700"
          >
            Data Umbrella Open Collective
          </a>.
        </div>
        <ContributorSocialMediaLinks socialMediaLinks={DATA_UMBRELLA_SOCIAL_MEDIA_LINKS} />
      </div>

      <div className="m-6 grid grid-rows-1 rounded border-2 border-black bg-white p-2 dark:border-du-lightAqua dark:bg-slate-700 dark:text-white md:m-0">
        <div className="py-4">
          <img src={SPECLogo} alt="logo" className={`mx-auto`}/>
        </div>
        <div className="row-span-2 m-1 object-contain px-4 text-left">
          <a
            href="https://www.dataumbrella.org/"
            target="_blank"
            rel="noreferrer"
            className="text-teal-500 underline dark:text-blue-700"
          >
            Sustainable Progress and Equality Collective (SPEC)
          </a>
          &nbsp;is an open learning organization that empowers individuals to be catalysts for positive change.
          You can support SPEC&apos;s work making a donation to&nbsp;
          <a
            href="https://opencollective.com/spec"
            target="_blank"
            rel="noreferrer"
            className="text-teal-500 underline dark:text-blue-700"
          >
            SPEC&apos;s Open Collective
          </a>.
        </div>
        <ContributorSocialMediaLinks socialMediaLinks={SPEC_SOCIAL_MEDIA_LINKS} />
      </div>
    </div>
  )
}

export default AboutUs
