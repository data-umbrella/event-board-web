import aboutStyleClasses from 'styles/about';
import twitter from 'assets/twitter.png';
import linkedin from 'assets/linkedin.png';
import github from 'assets/github.png';
import website from 'assets/website.png';
import confetti from 'assets/confetti.png'

const contributorList = [
    {name:'CZI', contributor_img:confetti, title:'hi', org_name:'hello', contact:{twitter:'', github:'www.google.com', linkedin: '', website: ''}}, 
];

function Contributor() {
    return (
        <div>Right here!
            <div className={aboutStyleClasses.contributorGrid}>
                {contributorList.map(contributorInfo => {
                    return (
                        <div key={contributorInfo.name}>

                            <img src={contributorInfo.contributor_img} alt="logo"/>
                            
                            <div>
                                {contributorInfo.name} <br/>
                                {contributorInfo.title}<br/>
                                {contributorInfo.org_name}<br/>
                            </div>
                            <div>
                                {contributorInfo.contact.twitter}
                                {contributorInfo.contact.github}
                                {contributorInfo.contact.linkedin}
                                {contributorInfo.contact.website}
                            </div>
                        </div>
                    )
                })};
            </div>
        </div>
    )
};

export default Contributor
