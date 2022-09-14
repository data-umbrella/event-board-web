import React from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import CZIImg from 'assets/CZIlogo.png';
import DigitalOceanImg from 'assets/Digitaloceanlogo.png';

const sponsorsList = [
  {
    name:'CZI',
    sponsorImg: CZIImg,
    url: 'https://chanzuckerberg.com/science/programs-resources/open-science/communitiesofpractice/data-umbrella/' },
  {
    name: 'Digital Ocean',
    sponsorImg: DigitalOceanImg,
    url: 'https://www.digitalocean.com/'
  },
];

function Sponsors() {
  return (
    <div className={sponsorsStyleClasses.sponsorsGrid}>
      {sponsorsList.map(sponsorInfo => {
        return (
          <a key={sponsorInfo.name} href={sponsorInfo.url}>
            <img src={sponsorInfo.sponsorImg} alt="logo" className={sponsorsStyleClasses.imageStyle}/>
            {sponsorInfo.name}
          </a>
        )
      })}
    </div>
  )
}

export default Sponsors
