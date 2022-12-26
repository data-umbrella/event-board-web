import React, { useState } from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import GoogleImg from 'assets/sponsors/Google_FullColor.png';
import CZLILight from 'assets/sponsors/CZLILogoLight.svg';
import CZLIDark from 'assets/sponsors/CZLILogoDark.svg';
import DigitalOceanLight from 'assets/sponsors/digitaloceanlight.svg';
import DigitalOceanDark from 'assets/sponsors/digitaloceandark.svg';


function Sponsors() {
  const [colorTheme, setTheme] = useState(localStorage.theme);
  window.addEventListener("themeChanged", () => setTheme(localStorage.theme))
  const sponsorsList = [
    {
      name: 'CZI',
      sponsorImg: colorTheme == 'light' ? CZLILight : CZLIDark,
      url: 'https://chanzuckerberg.com/science/programs-resources/open-science/communitiesofpractice/data-umbrella/',
      css: sponsorsStyleClasses.cziLogoCSS
    },
    /*{
      name: 'Google Open Source',
      sponsorImg: GoogleImg,
      url: 'https://opensource.google/',
      css: sponsorsStyleClasses.googleLogoCSS
    },*/
    {
      name: 'Digital Ocean',
      sponsorImg: colorTheme == 'light' ? DigitalOceanLight : DigitalOceanDark,
      url: 'https://www.digitalocean.com/',
      css: sponsorsStyleClasses.digitalOceanLogoCSS
    },
  ];

  return (
    <div className={sponsorsStyleClasses.sponsorsGrid}>
      {sponsorsList.map(sponsorInfo => {
        return (
          <div key={sponsorInfo.name} className={sponsorsStyleClasses.logoContainer}>
            <a key={sponsorInfo.name} href={sponsorInfo.url} className="rounded flex flex-col justify-center items-center h-64">
              <img src={sponsorInfo.sponsorImg} alt="logo" className={sponsorInfo.css} />
            </a>
            {sponsorInfo.name}
          </div>
        )
      })}
    </div>
  )
}

export default Sponsors
