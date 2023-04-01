import application from '../../assets/images/application.png'
import inktype from '../../assets/images/inktype.png'
import printhead from '../../assets/images/printhead.png'
import ph1 from '../../assets/images/ph1.png'
import ph2 from '../../assets/images/ph2.png'
import ph3 from '../../assets/images/ph3.png'
import ph4 from '../../assets/images/ph4.png'
import ph5 from '../../assets/images/ph5.png'
import ph6 from '../../assets/images/ph6.png'


export const dealerMenu = [
    {
        id: 1,
        icon: 'dashboard',
        title: 'Dashboard',
        path: '/dealers/dashboard',
    },
    {
        id: 2,
        icon: 'products',
        title: 'All Products',
        path: '/dealers/all-products',
    },
    {
        id: 3,
        icon: 'order',
        title: 'Orders',
        path: '/dealers/orders',
    },
    {
        id: 4,
        icon: 'partners',
        title: 'Favorites',
        path: '/dealers/favorites',
    },
    {
        id: 5,
        icon: 'products',
        title: 'New Arrival',
        path: '/dealers/new-arrival',
    }
]



export const superItems = [
    {
        itemName: 'Applications',
        logo: application,
        index: 1,
        subItems : [
            {
                id: 1,
                imgPath: ph1,
                name: 'Konica Minolta'
            },
            {
                id: 2,
                imgPath: ph2,
                name: 'Epson' 
            },
            {
                id: 3,
                imgPath: ph3,
                name: 'Hitachi' 
            },
            {
                id: 4,
                imgPath: ph4,
                name: 'Seiko' 
            },
            {
                id: 5,
                imgPath: ph5,
                name: 'Xaar' 
            },
            {
                id: 6,
                imgPath: ph6,
                name: 'Toshiba'
            }
        ]
    },
    {
        itemName: 'Ink Type',
        logo: inktype,
        index: 2,
        subItems : [
            {
                imgPath: '#',
                name: 'Konica Minolta'
            }
        ]
    },
    {
        itemName: 'Print Heads',
        logo: printhead,
        index: 3,
        subItems : [
            {
                imgPath: '#',
                name: 'New Ink'
            }
        ]
    },
]