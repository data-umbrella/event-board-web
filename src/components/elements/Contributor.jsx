import aboutStyleClasses from 'styles/about';
import twitter from 'assets/twitter.png';
import linkedin from 'assets/linkedin.png';
import github from 'assets/github.png';
import website from 'assets/website.png';

// const contributorList = [
//     {name:'CZI', sponsor_img:CZIImg, title:'', org:'', contact:{twitter:'', github:'', linkedin: '', website: ''}}, 
//     {name: 'Digital Ocean', sponsor_img:DigitalOceanImg}, 
// ];

function Contributor() {
    return (
        <div>Right here!
            <div className={aboutStyleClasses.aboutGrid}>
                {contributorList.map(contributorInfo => {
                    return (
                        <div key={contributorInfo.name}>
                            <img src={contributorInfo.sponsor_img} alt="logo"/>
                            {contributorInfo.name}
                        </div>
                    )
                })};
            </div>
        </div>
    )
};

export default Contributor
