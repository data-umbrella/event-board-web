import React, { useState } from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import GoogleImg from 'assets/sponsors/Google_FullColor.png';
import CZLILight from 'assets/CZLILogoLight.svg';
import CZLIDark from 'assets/CZLILogoDark.svg';
import DigitalOceanLight from 'assets/digitaloceanlight.svg';
import DigitalOceanDark from 'assets/digitaloceandark.svg';


function Sponsors() {
  const [colorTheme, setTheme] = useState(localStorage.theme);
  window.addEventListener("themeChanged", () => setTheme(localStorage.theme))
  const sponsorsList = [
    {
      name: 'CZI',
      sponsorImg: colorTheme == 'light' ? CZLILight : CZLIDark,
      url: 'https://chanzuckerberg.com/science/programs-resources/open-science/communitiesofpractice/data-umbrella/'
    },
    {
      name: 'Google Open Source',
      sponsorImg: GoogleImg,
      url: 'https://opensource.google/'
    },
    {
      name: 'Digital Ocean',
      sponsorImg: colorTheme == 'light' ? DigitalOceanLight : DigitalOceanDark,
      url: 'https://www.digitalocean.com/'
    },
  ];

  return (
    <div className={sponsorsStyleClasses.sponsorsGrid}>
      {sponsorsList.map(sponsorInfo => {
        return (
          <a key={sponsorInfo.name} href={sponsorInfo.url} className="rounded flex flex-col justify-center items-center">
            <img src={sponsorInfo.sponsorImg} alt="logo" className={sponsorsStyleClasses.imageStyle} />
            {sponsorInfo.name}
          </a>
        )
      })}
    </div>
  )
}

export default Sponsors
