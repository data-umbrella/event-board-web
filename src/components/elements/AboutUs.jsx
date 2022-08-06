import aboutStyleClasses from 'styles/about';
// import DUlogo from 'assets/data-umbr-full-transp-logo.png';
// import SPEC from 'assets/spec-logo.png';

// const aboutUsList = [
//   { name:'Data Umbrella', about_img: DUlogo },
//   { name: 'Sustainabe Progress and Equity Collective', about_img: SPEC },
// ];

function AboutUs() {
  return (
    <div className={aboutStyleClasses.aboutUsGrid}>
      {/* {aboutUsList.map(aboutUsInfo => {
          return (
              <div key={aboutUsInfo.name}>
                  <img src={aboutUsInfo.about_img} alt="logo"/>
                  {aboutUsInfo.name}
              </div>
          )
      })}; */}
    </div>
  )
};

export default AboutUs
