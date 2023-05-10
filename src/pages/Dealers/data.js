import application from "../../assets/images/application.png";
import inktype from "../../assets/images/inktype.png";
import printhead from "../../assets/images/printhead.png";
import ph1 from "../../assets/images/ph1.png";
import ph2 from "../../assets/images/ph2.png";
import ph3 from "../../assets/images/ph3.png";
import ph4 from "../../assets/images/ph4.png";
import ph5 from "../../assets/images/ph5.png";
import ph6 from "../../assets/images/ph6.png";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import brand6 from "../../assets/images/brand6.png";


export const productVariant = {
  "cyan": {
    "rnb1ltr": 300,
    "akrct5ltr": 500,
    "nm1ltr": 250,
    "roundxt1ltr": 150,
    "ribcan5ltr": 600,
  },
  "bluish_magenta": {
    "rnb1ltr": 370,
    "akrct5ltr": 650,
    "nm1ltr": 290,
    "roundxt1ltr": 200,
    "ribcan5ltr": 800,
  },
  "lemon_yellow": {
    "rnb1ltr": 350,
    "akrct5ltr": 450,
    "nm1ltr": 260,
    "roundxt1ltr": 220,
    "ribcan5ltr": 550,
  },
  "black": {
    "rnb1ltr": 275,
    "akrct5ltr": 650,
    "nm1ltr": 190,
    "roundxt1ltr": 200,
    "ribcan5ltr": 430,
  }
};

export const dealerMenu = [
  {
    id: 1,
    icon: "dashboard",
    title: "Dashboard",
    path: "/dealers/dashboard",
  },
  {
    id: 2,
    icon: "products",
    title: "All Products",
    path: "/dealers/all-products",
  },
  {
    id: 3,
    icon: "order",
    title: "Orders",
    path: "/dealers/orders",
  },
  {
    id: 4,
    icon: "favorites",
    title: "Favorites",
    path: "/dealers/favorites",
  },
  {
    id: 5,
    icon: "stars",
    title: "New Arrival",
    path: "/dealers/new-arrival",
  },
];

export const superItems = [
  {
    itemName: "Applications",
    logo: application,
    index: 1,
    subItems: [
      {
        id: 1,
        imgPath: ph1,
        subImg: brand1,
        name: "Konica Minolta",
        products: [
          {
            idx: 1,
            image: product1,
            pname: "Konica Minolta Konica Chrome Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product2,
            pname: "Konica Cobalt",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product3,
            pname: "Konica Standard",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product4,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 5,
            image: product5,
            pname: "Pocolor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 6,
            image: product6,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 7,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 8,
            image: product2,
            pname: "Konica Cobalt",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 9,
            image: product3,
            pname: "Konica Standard",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 10,
            image: product4,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 11,
            image: product5,
            pname: "Pocolor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 12,
            image: product6,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
      {
        id: 2,
        imgPath: ph2,
        subImg: brand2,
        name: "Epson",
        products: [
          {
            idx: 1,
            image: product2,
            pname: "Epson Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product2,
            pname: "Epson Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product2,
            pname: "Epson Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product2,
            pname: "Epson Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
      {
        id: 3,
        imgPath: ph3,
        subImg: brand3,
        name: "Hitachi",
        products: [
          {
            idx: 1,
            image: product3,
            pname: "Hitachi Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product3,
            pname: "Hitachi Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product3,
            pname: "Hitachi Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product3,
            pname: "Hitachi Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
      {
        id: 4,
        imgPath: ph4,
        subImg: brand4,
        name: "Seiko",
        products: [
          {
            idx: 1,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product4,
            pname: "Seiko Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
      {
        id: 5,
        imgPath: ph5,
        subImg: brand5,
        name: "Xaar",
        products: [
          {
            idx: 1,
            image: product1,
            pname: "Xaar Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product1,
            pname: "Xaar Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product1,
            pname: "Xaar Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product1,
            pname: "Xaar Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
      {
        id: 6,
        imgPath: ph6,
        subImg: brand6,
        name: "Toshiba",
        products: [
          {
            idx: 1,
            image: product1,
            pname: "Toshiba Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product1,
            pname: "Toshiba Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product1,
            pname: "Toshiba Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product1,
            pname: "Toshiba Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
    ],
  },
  {
    itemName: "Ink Type",
    logo: inktype,
    index: 2,
    subItems: [
      {
        imgPath: ph1,
        // subImg: brand3,
        name: "Konica Minolta",
        products: [
          {
            idx: 1,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
    ],
  },
  {
    itemName: "Print Heads",
    logo: printhead,
    index: 3,
    subItems: [
      {
        imgPath: ph2,
        name: "New Ink",
        // subImg: brand1,
        products: [
          {
            idx: 1,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 2,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 3,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
          {
            idx: 4,
            image: product1,
            pname: "Konica Chrome",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
          },
        ],
      },
    ],
  },
];







export const tabletMenuDealers = [
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