import { v4 as uuid } from "uuid";
import grocery from '../../assets/grocery.jpg'
import mobile from '../../assets/mobile.png'
import black from '../../assets/black.jpeg'
import electronic from '../../assets/headphone-1.jpeg'
import home from '../../assets/home.png'
import appliances from '../../assets/appliances_1.jpg'


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Grocery",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
      image:grocery
  },
  {
    _id: uuid(),
    categoryName: "Mobile",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      image:mobile
  },
  {
    _id: uuid(),
    categoryName: "Fashion",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image:black
  },
  {
    _id: uuid(),
    categoryName: "Electronics",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image:electronic
  },
  {
    _id: uuid(),
    categoryName: "Home",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image:home
  },
  {
    _id: uuid(),
    categoryName: "Appliances",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image:appliances
  },
];
