import propertyIcon from "../../assets/icons/1.svg";
import transportIcon from "../../assets/icons/2.svg";
import personalItemsIcon from "../../assets/icons/3.svg";
import servicesIcon from "../../assets/icons/4.svg";
import electronicsIcon from "../../assets/icons/5.svg";
import sportsIcon from "../../assets/icons/6.svg";

const data = [
  {
    iconSrc: propertyIcon,
    title: "Недвижимость",
    colorClass: "purple",
    link: "/property",
  },
  {
    iconSrc: transportIcon,
    title: "Транспорт",
    colorClass: "burgundy",
    link: "/transport",
  },
  {
    iconSrc: personalItemsIcon,
    title: "Личные вещи",
    colorClass: "green",
    link: "/personal-items",
  },
  {
    iconSrc: servicesIcon,
    title: "Резюме",
    colorClass: "yellow",
    link: "/resume",
  },
  {
    iconSrc: electronicsIcon,
    title: "Электроника",
    colorClass: "burgundy2",
    link: "/electronics",
  },
  {
    iconSrc: sportsIcon,
    title: "Спорт и хобби",
    colorClass: "persianGreen",
    link: "/sports-and-hobbies",
  },

  // {
  //   image: "https.qwerty.com/sadasd/asdasd.png",
  //   title: "недвижимость",
  //   slug: 'sports-and-hobbies'
  // }
];
export default data;
