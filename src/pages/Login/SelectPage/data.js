import kart from '../../../assets/images/kart.svg';
import user07 from '../../../assets/images/user07.svg';
import sales from '../../../assets/images/sales.svg';

export const pages = [
  {
    id: 1,
    title:
      "Admin management (manage your team/employees, channel partners distributers and products)",
    icon: user07,
    path:'/home/dashboard'
  },
  {
    id: 2,
    title: "Manage sales orders",
    icon: sales,
    path:'#'
  },
  {
    id: 3,
    title: "Manage purchase orders",
    icon: kart,
    path:'/dealers'
  },
];
