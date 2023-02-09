/*eslint-disable */
import { faTableColumns, faMagnifyingGlass, faCube, faCubes, faUserTimes, faHandshake, faTrophy, faMessage, faMoneyBills } from '@fortawesome/free-solid-svg-icons'


const menuItems = [
    {
        id: 1,
        icon: faTableColumns,
        title: "Dashboard",
        path: '/home/dashboard'
    },
    {
        id: 2,
        icon: faCube,
        title: "Orders",
        path: '/home/orders'
    },
    {
        id: 3,
        icon: faUserTimes,
        title: "Team Members",
        path:'/home/team-members'
    },
    {
        id: 4,
        icon: faHandshake,
        title: "Partners",
        path: '/home/partners'
    },
    {
        id: 5,
        icon: faCubes,
        title: "Product Listings",
        path:'/home/product-listings'
    },
    {
        id: 6,
        icon: faTrophy,
        title: "Awards & Honours",
        path: '/home/awards-honours'
    },
    {
        id: 7,
        icon: faMessage,
        title: "About Us",
        path: '#'
    },
    {
        id: 8,
        icon: faMoneyBills,
        title: "Payment Info",
        path: '#'
    },
]

export default menuItems