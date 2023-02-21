/*eslint-disable */
import { faTableColumns, faMagnifyingGlass, faCube, faCubes, faUserTimes, faHandshake, faTrophy, faMessage, faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import order from '../../assets/images/order.svg'
import partners from '../../assets/images/partners.svg'
import products from '../../assets/images/products.svg'
import teammembers from '../../assets/images/teammembers.svg'
import dashboard from '../../assets/images/dashboard.svg'
import awards from '../../assets/images/awards.svg'
import payment from '../../assets/images/payment.svg'
import about from '../../assets/images/about.svg'




const menuItems = [
    {
        id: 1,
        icon: 'dashboard',
        title: "Dashboard",
        path: '/home/dashboard'
    },
    {
        id: 2,
        icon: 'order',
        title: "Orders",
        path: '/home/orders'
    },
    {
        id: 3,
        icon: 'teammembers',
        title: "Team Members",
        path:'/home/team-members'
    },
    {
        id: 4,
        icon: 'partners',
        title: "Partners",
        path: '/home/partners'
    },
    {
        id: 5,
        icon: 'products',
        title: "Product Listings",
        path:'/home/product-listings'
    },
    {
        id: 6,
        icon: 'awards',
        title: "Awards & Honours",
        path: '/home/awards-honours'
    },
    {
        id: 7,
        icon: 'about',
        title: "About Us",
        path: '#'
    },
    {
        id: 8,
        icon: 'payment',
        title: "Payment Info",
        path: '#'
    },
]

export default menuItems