import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WifiIcon from '@material-ui/icons/Wifi';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import hotelImg1 from '../assets/images/hotel1.png';
import hotelImg2 from '../assets/images/marriott.jpg';
import hotelImg3 from '../assets/images/hotel3.png';
import hotelImg4 from '../assets/images/hotel4.png';
import PoolIcon from '@material-ui/icons/Pool';

const starStyles = {
    empty: {
        height: 12,
        width: 12,
        color: '#333',
    },
    filled: {
        height: 12,
        width: 12,
    },
}
export const hotelInfo =[
    // {
    //     name: 'Radisson Blue Hotel',
    //     coordinates: [-1.9532808219743445, 30.08943387208533],
    //     rating:[
    //             <StarIcon style={starStyles.filled}/>,
    //             <StarIcon style={starStyles.filled}/>,
    //             <StarIcon style={starStyles.filled}/>,
    //             <StarIcon style={starStyles.filled}/>,
    //             <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.6,
    //     stars: '5-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$270.00',
    //     imag: hotelImg1
    // },
    {
        name: 'Marriot hotel Kigali',
        // coordinates:[-1.9528090274253058, 30.06179639261444],
        rating:[
            <StarIcon style={starStyles.filled}/>,
            <StarIcon style={starStyles.filled}/>,
            <StarIcon style={starStyles.filled}/>,
            <StarBorderIcon style={starStyles.empty}/>,
            <StarBorderIcon style={starStyles.empty}/>
        ],
        starNmbr: 4.2,
        stars: '4-star hotel',
        pool:{ 
            icon:<PoolIcon style={{width:20,height: 13,}}/>,
            label:'Pool',
        },
        wifi:{ 
            icon:<WifiIcon style={{width:20,height: 13,}}/>,
            label:'Free Wi-Fi',
        },
        parking:{
            icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
            label: 'Free Parking' 
        },
        breakFast: {
            icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
            label: 'Free breakfast'
        },
        price: '$240.00',
        imag: hotelImg2
    },

]

export const concatHotelInfo = [
    {
        name: 'Hotel de milles collines',
        // coordinates: [-1.9456892027118082, 30.06179639261444],
        rating:[
            <StarIcon style={starStyles.filled}/>,
            <StarIcon style={starStyles.filled}/>,
            <StarIcon style={starStyles.filled}/>,
            <StarIcon style={starStyles.filled}/>,
            <StarIcon style={starStyles.filled}/>,
        ],
        starNmbr: 4.9,
        stars: '5-star hotel',
        pool:{ 
            icon:<PoolIcon style={{width:20,height: 13,}}/>,
            label:'Pool',
        },
        wifi:{ 
            icon:<WifiIcon style={{width:20,height: 13,}}/>,
            label:'Free Wi-Fi',
        },
        parking:{
            icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
            label: 'Free Parking' 
        },
        breakFast: {
            icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
            label: 'Free breakfast'
        },
        price: '$200.00',
        imag: hotelImg3
    },
    // {
    //     name: 'Hakuna Matata',
    //     coordinates: [-1.73093720873648, 29.26201176465838],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$80.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'Kigali Serena Hotel',
    //     coordinates: [-1.9553824506281774, 30.0646717204476],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.filled}/>
    //     ],
    //     starNmbr: 4.9,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$210.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'Onomo Hotel',
    //     coordinates: [-1.947706324841646, 30.071241061225912],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$120.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'DV Appart Hotel',
    //     coordinates: [-1.9213661654664638, 30.107693913293],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$100.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'The Crib',
    //     coordinates: [-1.984467983784692, 30.10750349768105],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$140.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'The Palm Beach Resort Lake Kivu',
    //     coordinates: [-1.7307656256848782, 29.266968486520003],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$115.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'Palm Garden Resort',
    //     coordinates: [-1.7303688398185926, 29.26487636365633],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$90.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'Best View Hotel',
    //     coordinates: [-1.5002375177702232, 29.62974474491673],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$150.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'Fatuma Hotel',
    //     coordinates: [-1.5004412957662139, 29.633081412663408],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$190.00',
    //     imag: hotelImg4
    // },
    // {
    //     name: 'Volcano view',
    //     coordinates: [-1.5009220436535484, 29.623294114677766],
    //     rating:[
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarIcon style={starStyles.filled}/>,
    //         <StarBorderIcon style={starStyles.empty}/>
    //     ],
    //     starNmbr: 4.1,
    //     stars: '3-star hotel',
    //     pool:{ 
    //         icon:<PoolIcon style={{width:20,height: 13,}}/>,
    //         label:'Pool',
    //     },
    //     wifi:{ 
    //         icon:<WifiIcon style={{width:20,height: 13,}}/>,
    //         label:'Free Wi-Fi',
    //     },
    //     parking:{
    //         icon:<LocalParkingIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free Parking' 
    //     },
    //     breakFast: {
    //         icon: <FreeBreakfastIcon style={{width:20,height: 13,}}/>,
    //         label: 'Free breakfast'
    //     },
    //     price: '$160.00',
    //     imag: hotelImg4
    // },
]
