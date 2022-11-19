import cardimg1 from "../assets/img/values-1.png";
import cardimg2 from "../assets/img/values-2.png";
import cardimg3 from "../assets/img/values-3.png";

import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaDeezer, FaGlasses } from "react-icons/fa";
import { BsFillEmojiSmileFill, BsFillFileTextFill } from "react-icons/bs";

export const navUls = ["Home", "Team", , "About", "Contact"];

export const heroH1 = "We offer modern solutions for growing your business";
export const herop =
  "We are team of talented designers making websites with Bootstrap";

export const aboutP1 = "WHO WE ARE";
export const aboutH3 =
  "Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.";
export const aboutP2 =
  " Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.";

export const service = "OUR VALUE";
export const serviceH1 = "Odit est perspiciatis laborum et dicta";

export const serviceCard = [
  {
    img: cardimg1,
    title: "Ad cupiditate sed est odio",
    desc: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.",
  },
  {
    img: cardimg2,
    title: "Voluptatem voluptatum alias",
    desc: "Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.",
  },
  {
    img: cardimg3,
    title: "Fugit cupiditate alias nobis.",
    desc: "Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.",
  },
];

export const serciveBox = [
  {
    icon: <FaDeezer />,
    color: "#0b198f",
    num: 132,
    title: "Happy Clients",
  },
  {
    icon: <FaGlasses />,
    color: "orange",
    num: 532,
    title: "Project",
  },
  {
    icon: <BsFillEmojiSmileFill />,
    color: "green",
    num: 2332,
    title: "Hours Of Support",
  },
  {
    icon: <BsFillFileTextFill />,
    color: "pink",
    num: 24,
    title: "Hard Workers",
  },
];

export const detailsH1 =
  "Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero";
export const detailsP =
  "Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta . Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis. Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.";

export const newsletterH1 = "Our Newsletter";
export const newsletterP1 =
  "Tamen quem nulla quae legam multos aute sint culpa legam noster magna";

export const contactCards = [
  {
    icon: <CiLocationOn />,
    title: "Address",
    desc1: "A108 Adam Street,",
    desc2: "New York, NY 535022",
  },
  {
    icon: <BsTelephone /> ,
    title: "Call Us",
    desc1: "+1 5589 55488 55,",
    desc2: "+1 6678 254445 41",
  },
  {
    icon: <FiMail />,
    title: "Email Us",
    desc1: "info@example.com",
    desc2: "contact@example.com",
  },
  {
    icon:  <AiOutlineClockCircle />,
    title: "Open Hours",
    desc1: "Monday - Friday,",
    desc2: "9:00AM - 05:00PM",
  },
];



export const cardCards = [
    {
      styel: 'w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300',
      img: "https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/single.png?raw=true",
      type: "Single User",
      price: "$149",
      det: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      styel: 'w-full md:translate-y-[-50px] shadow-xl bg-[rgba(1,1,1,.9)] text-white  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300',
      img: "https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/double.png?raw=true",
      type: "Double User",
      price: "$349",
      det: ["1000 GB Storage", "5 Granted User", "Send up to 5 GB"],
    },
    {
      styel: 'w-full md:translate-y-[-90px] shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300',
      img: "https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/triple.png?raw=true",
      type: "Triple User",
      price: "$749",
      det: ["3000 GB Storage", "15 Granted User", "Send up to 10 GB"],
    },
  ];
  
  
  export const footerUl1 = ["About", "Blog", "Jobs", "Press", "Careers"]
  export const footerUl2 = ['Web Desing', "Web Development", "Marketing", "Graphic Design"]
  export const footerUl3 = ['Analytics', "Marketing", "Commerce", "Insighta"]
