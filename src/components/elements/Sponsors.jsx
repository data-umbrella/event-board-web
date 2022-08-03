import sponsorsStyleClasses from 'styles/sponsors';

const sponsorsList = [
            {name:"CZI", sponsor_img:""}, 
            {name: 'Digital Ocean', sponsor_img:''}, 
        ]

function Sponsors() {
    return (
        <div className={sponsorsStyleClasses.sponsorsGrid}>
            {sponsorsList.map(sponsorInfo => {
                return (
                    <div key={sponsorInfo.name}> {sponsorInfo.name}</div>
                )
            })}
        </div>
    )
}

export default Sponsors