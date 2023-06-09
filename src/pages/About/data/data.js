import facebook from "../../../assets/images/facebook.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/twitter.png";
import website from "../../../assets/images/website.png";
import jobsLogo from "../../../assets/images/ux.png";

export const jobsData = [
  {
    logo: jobsLogo,
    title: "Marketing Lead",
    totle: "4 Applications",
  },
  {
    logo: jobsLogo,
    title: "Frontend Developer",
    totle: "4 Applications",
  },
  {
    logo: jobsLogo,
    title: "Backend Lead",
    totle: "4 Applications",
  },
  {
    logo: jobsLogo,
    title: "Graphic Designer",
    totle: "4 Applications",
  },
  {
    logo: jobsLogo,
    title: "UX Designer",
    totle: "4 Applications",
  },
  {
    logo: jobsLogo,
    title: "Backend Lead",
    totle: "4 Applications",
  },
];

export const AboutTabs = [
  {
    id: 1,
    title: "Info",
    index: 1,
    link: "/home/about",
  },
  {
    id: 2,
    title: "FAQ",
    index: 2,
    link: "/home/about/FAQ",
  },
  // {
  //   id: 3,
  //   title: "Complaints and feedback",
  //   index: 3,
  //   link: "/home/about/complaints-and-feedback",
  // },
  {
    id: 4,
    title: "Privacy Policy",
    index: 4,
    link: "/home/about/privacy-policy",
  },
  {
    id: 5,
    title: "Terms & Conditions",
    index: 5,
    link: "/home/about/terms-conditions",
  },
  {
    id: 6,
    title: "Our Brands",
    index: 6,
    link: "/home/about/our-brands",
  },
  // {
  //   id: 7,
  //   title: "Job Openings",
  //   index: 7,
  //   link: "/home/about/job-openings",
  // },
];

export const delalersCurrentOrderColumn = [
  { value: "#", title: "#" },
  { value: "Order No.", title: "orderNumber" },
  { value: "PO number", title: "purchaseOrderNumber" },
  { value: "Partner", title: "companyName" },
  { value: "Place of Delivery", title: "shippingAddress,city" },
  { value: "Order Date", title: "orderDate" },
  { value: "No. of Item", title: "numberOfItems" },
  { value: "Price", title: "totalAmount" },
  { value: "Status", title: "orderStatus" },
  { value: "", title: "" },
];

export const orderDetailColumn = [
  { value: "SI No", title: "SI No" },
  { value: "BP Catalog Code", title: "bpCatalogNumber" },
  { value: "Item Description", title: "itemDescription" },
  { value: "Qty", title: "quantity" },
  { value: "Price per unit", title: "grossPrice" },
  { value: "Amount", title: "totalPrice" },
  { value: "Rate (CGST)", title: "cgstPercentage" },
  { value: "Amount (CGST)", title: "cgstAmount" },
  { value: "Rate (SGST)", title: "sgstPercentage" },
  { value: "Amount (SGST)", title: "sgstAmount" },
  { value: "Rate (IGST)", title: "igstPercentage" },
  { value: "Amount (IGST)", title: "igstAmount" },
  { value: "Taxable Amount", title: "taxableAmount" },
  { value: "Total Amount", title: "totalAmount" },
];

export const CreateJobsTabs = [
  {
    id: 1,
    title: "Applications",
    index: 1,
    link: "/home/about/create-jobs",
  },
  {
    id: 2,
    title: "Job Description",
    index: 2,
    link: "/home/about/create-jobs/descriptions",
  },
];

export const timeSlotData = [
  {
    day: "monday",
    startTime: "09:00 am",
    endTime: "05:00 pm",
    active: true,
  },
  {
    day: "tuesday",
    startTime: "09:00 am",
    endTime: "05:00 pm",
    active: false,
  },
  {
    day: "wednesday",
    startTime: "09:00 am",
    endTime: "05:00 pm",
    active: true,
  },
  {
    day: "thursday",
    startTime: "09:00 am",
    endTime: "05:00 pm",
    active: true,
  },
  {
    day: "friday",
    startTime: "09:00 am",
    endTime: "05:00 pm",
    active: true,
  },
  {
    day: "saturday",
    startTime: "09:00 am",
    endTime: "07:00 pm",
    active: false,
  },
  {
    day: "sunday",
    startTime: "09:00 am",
    endTime: "07:00 pm",
    active: false,
  },
];

export const socialMedia = {
  instagram: instagram,
  twitter: twitter,
  website: website,
  facebook: facebook,
};

export const PartnerTabs = [
  {
    id: 1,
    title: "About",
    index: 1,
    link: "#",
  },
  {
    id: 2,
    title: "Address Details",
    index: 2,
    link: "#",
  },
  {
    id: 3,
    title: "Payment Details",
    index: 3,
    link: "#",
  },
  {
    id: 4,
    title: "Catalog",
    index: 4,
    link: "#",
  },
  {
    id: 5,
    title: "Past Orders",
    index: 5,
    link: "#",
  },
];
