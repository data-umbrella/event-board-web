import React from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import CZIImg from 'assets/CZIlogo.png';
import DigitalOceanImg from 'assets/Digitaloceanlogo.png';

const sponsorsList = [
  { name:'CZI', sponsor_img:CZIImg },
  { name: 'Digital Ocean', sponsor_img:DigitalOceanImg },
];

function Sponsors() {
  return (
    <div className={sponsorsStyleClasses.sponsorsGrid}>
      {sponsorsList.map(sponsorInfo => {
        return (
          <div key={sponsorInfo.name}>
            <img src={sponsorInfo.sponsor_img} alt="logo"/>
            {sponsorInfo.name}
          </div>
        )
      })}
    </div>
  )
}

export default Sponsors
