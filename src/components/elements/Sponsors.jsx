import sponsorsStyleClasses from 'styles/sponsors';

const sponsorsList = ['sponsors1', 'sponsors2']

function Sponsors() {
    return (
        <div className={sponsorsStyleClasses.sponsorsGrid}>
            {sponsorsList.map(sponsorInfo => {
                return (
                    <div key={sponsorInfo}> {sponsorInfo}</div>
                )
            })}
        </div>
    )
}

export default Sponsors