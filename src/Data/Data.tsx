// Sidebar imports

import { BiHomeAlt, BiMoneyWithdraw } from 'react-icons/bi'
import {HiOutlineClipboardList} from 'react-icons/hi'
import { FiUsers, FiPackage } from 'react-icons/fi'
import {MdOutlineAnalytics} from 'react-icons/md'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'

// Analytics Cards imports

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import { IconType } from 'react-icons'

// Sidebar Data

interface SiderbarData {
  icon: IconType; 
  heading: string; 
}

export const SidebarData: SiderbarData[]  = [
  {
    icon: BiHomeAlt,
    heading: "Dashboard",
  },
  {
    icon: HiOutlineClipboardList,
    heading: "Orders",
  },
  {
    icon: FiUsers,
    heading: "Customers",
  },
  {
    icon: FiPackage,
    heading: 'Products'
  },
  {
    icon: MdOutlineAnalytics,
    heading: 'Analytics'
  },
];

// Analytics Cards Data

export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: RiMoneyDollarBoxLine,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: BiMoneyWithdraw,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: HiOutlineClipboardList,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
export type cardsDataType = typeof cardsData[0];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

export interface ITableData {
  product: string; 
  trackingId: number;
  date: string;
  status: string;
}

export const TableData: ITableData[] = [
  { 
    product: "Big Baza Bang", 
    trackingId: 18908424, 
    date: "2 March 2022", 
    status: "Approved" 
  },
  {
    product: "Lasania Chiken Fri",
    trackingId: 18908424,
    date: "2 March 2022",
    status: "Pending"
  },
  {
    product: "Mouth Freshner",
    trackingId: 18908424,
    date: "2 March 2022",
    status: "Approved"
  },
  {
    product: "Cupcake",
    trackingId: 18908424,
    date: "2 March 2022",
    status: "Delivered"
  },
];

export const customerReviewData = {
  series: [
    {
      name: "Review",
      data: [10, 50, 30, 90, 40, 120, 100],
    },
  ],
}
