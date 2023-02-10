import React, { useState } from 'react';
import aboutStyleClasses from 'styles/about';
import DULogo from 'assets/du_sc_logos/logo_data_umbrella_full.png';
import DUDarkLogo from 'assets/du_sc_logos/logo_dark_data_umbrella_full.png';
import SPECLogo from 'assets/du_sc_logos/logo_spec_with_name.png';
import twitter from 'assets/social_media/twitter.svg';
import linkedin from 'assets/social_media/linkedin.svg';
import github from 'assets/social_media/github.svg';
import website from 'assets/social_media/website.svg';
import websiteWhite from 'assets/social_media/websiteWhite.svg';
import twitterWhite from 'assets/social_media/twitterWhite.svg';
import linkedInWhite from 'assets/social_media/linkedInWhite.svg';
import githubWhite from 'assets/social_media/githubWhite.svg';
import { DATA_UMBRELLA_URL, SPEC_URL } from 'constants/urls';

const IMAGE_MAP = {
  twitter,
  linkedin,
  github,
  website,
  twitterWhite,
  linkedInWhite,
  githubWhite,
  websiteWhite,
};

const DATA_UMBRELLA_SOCIAL_MEDIA_LINKS = [
  {
    name: "website",
    darkName: "websiteWhite",
    link: { DATA_UMBRELLA_URL },
  },
  {
    name: "twitter",
    darkName: "twitterWhite",
    link: "https://twitter.com/DataUmbrella?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {
    name: "linkedin",
    darkName: "linkedInWhite",
    link: "https://www.linkedin.com/company/dataumbrella/",
  },
];

const SPEC_SOCIAL_MEDIA_LINKS = [
  {
    name: "website",
    darkName: "websiteWhite",
    link: { SPEC_URL },
  },
  {
    name: "twitter",
    darkName: "twitterWhite",
    link: "https://mobile.twitter.com/specollective",
  },
  {
    name: "linkedin",
    darkName: "linkedInWhite",
    link: "https://www.linkedin.com/company/specollective/",
  },
];

function ContributorSocialMediaLinks({ socialMediaLinks, colorTheme }) {
  // const [colorTheme, setTheme] = useState(localStorage.theme);
  // window.addEventListener("themeChanged", () => setTheme(localStorage.theme));

  return (
    <div className="mt-4">
      {socialMediaLinks.map((mediaLink) => {
        return (
          <div className="inline-block p-2" key={mediaLink.name}>
            <a href={mediaLink.link} target="_blank" rel="noreferrer">
              <img
                className="mx-auto h-10 w-10"
                src={
                  colorTheme === "light"
                    ? IMAGE_MAP[mediaLink.name]
                    : IMAGE_MAP[mediaLink.darkName]
                }
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

function AboutUs() {
  const [colorTheme, setTheme] = useState(localStorage.theme);
  window.addEventListener("themeChanged", () => setTheme(localStorage.theme));

  return (
    <div key="aboutUsgrid" className={aboutStyleClasses.aboutUsCards}>
      <div className="grid grid-rows-1 md:m-0 p-2 m-6 border-2 border-black dark:border-du-lightAqua dark:text-white dark:bg-du-indigo-900 rounded bg-white">
        <div className="py-4">
          <img src={DULogo} alt="logo" className={`mx-auto`} />
        </div>
        <div className="row-span-2 px-4 m-1 object-contain text-left">
          <a
            href={DATA_UMBRELLA_URL}
            target="_blank"
            rel="noreferrer"
            className="text-du-darkBlue underline dark:text-blue-700"
          >
            Data Umbrella
          </a>
          &nbsp;is a global non-profit community for underrepresented persons in
          data science that organizes data science events. You can support Data
          Umbrella&apos;s work by making a donation to the&nbsp;
          <a
            href="https://opencollective.com/data-umbrella"
            target="_blank"
            rel="noreferrer"
            className="text-du-darkBlue underline dark:text-blue-700"
          >
            Data Umbrella Open Collective
          </a>
          .
        </div>
        <ContributorSocialMediaLinks
          socialMediaLinks={DATA_UMBRELLA_SOCIAL_MEDIA_LINKS}
          colorTheme={colorTheme}
        />
      </div>

      <div className="grid grid-rows-1 md:m-0 p-2 m-6 border-2 border-black dark:border-du-lightAqua dark:text-white dark:bg-du-indigo-900 rounded bg-white">
        <div className="py-4">
          <img src={SPECLogo} alt="logo" className={`mx-auto`} />
        </div>
        <div className="row-span-2 px-4 m-1 object-contain text-left">
          <a
            href={SPEC_URL}
            target="_blank"
            rel="noreferrer"
            className="text-du-darkBlue underline dark:text-blue-700"
          >
            Sustainable Progress and Equality Collective (SPEC)
          </a>
          &nbsp;is an open learning organization that empowers individuals to be
          catalysts for positive change. You can support SPEC&apos;s work making
          a donation to&nbsp;
          <a
            href="https://opencollective.com/spec"
            target="_blank"
            rel="noreferrer"
            className="text-du-darkBlue underline dark:text-blue-700"
          >
            SPEC&apos;s Open Collective
          </a>
          .
        </div>
        <ContributorSocialMediaLinks
          socialMediaLinks={SPEC_SOCIAL_MEDIA_LINKS}
        />
      </div>
    </div>
  );
}

export default AboutUs;
