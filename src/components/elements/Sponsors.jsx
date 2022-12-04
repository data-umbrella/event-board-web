import React from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import CZIImg from 'assets/CZIlogo.png';
import DigitalOceanImg from 'assets/Digitaloceanlogo.png';
import GoogleImg from 'assets/sponsors/Google_FullColor.png';
import GoogleBlackImg from 'assets/sponsors/Google_OneColor.png';
import GoogleWhiteImg from 'assets/sponsors/Google_Reverse.png';


const sponsorsList = [
  {
    name:'CZI',
    sponsorImg: CZIImg,
    url: 'https://chanzuckerberg.com/science/programs-resources/open-science/communitiesofpractice/data-umbrella/' },
  
  {
    name:'Google Open Source',
    sponsorImg: GoogleImg,
    url: 'https://opensource.google/'
  },
  
  {
    name:'Google Open Source',
    sponsorImg: GoogleBlackImg,
    url: 'https://opensource.google/'
  },
  
  {
    name:'Google Open Source',
    sponsorImg: GoogleWhiteImg,
    url: 'https://opensource.google/'
  },
  
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
