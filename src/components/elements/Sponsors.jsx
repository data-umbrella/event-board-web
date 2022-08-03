import sponsorsStyleClasses from 'styles/sponsors';
import CZIImg from 'assets/CZIlogo.png';
import DigitalOceanImg from 'assets/Digitaloceanlogo.png';


function Sponsors() {
    return (
        <div className={sponsorsStyleClasses.sponsorsGrid}>
            <div>
            <img src={CZIImg} alt="logo"/>    
            CZI
            </div>
            <div>
            <img src={DigitalOceanImg} alt="logo"/>    
            Digital Ocean
            </div>
        </div>
    )
}

export default Sponsors

// // const sponsorsList = [
// //             {name:'CZI', sponsor_img:''}, 
// //             {name: 'Digital Ocean', sponsor_img: { logoImg }}, 
//         ]


// {sponsorsList.map(sponsorInfo => {
//     return (
//         <div key={sponsorInfo.name}>

//             <img src={sponsorInfo.sponsor_img} alt="logo"/>
//             {sponsorInfo.name}
//         </div>
//     )
// })}
