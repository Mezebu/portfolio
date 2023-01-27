import { v4 as uuidv4 } from "uuid";

import { github, google, linkedin } from "../../assets";
import { telegram, twitter, whatsapp } from "../../assets";

export const data = [
  {
    id: uuidv4(),
    title: "Email",
    icon: google,
    link: "mailto:mezebu07@gmail.com?Subject=Hey Henry!✋",
  },
  {
    id: uuidv4(),
    title: "Github",
    icon: github,
    link: "https://github.com/mezebu",
  },
  {
    id: uuidv4(),
    title: "LinkedIn",
    icon: linkedin,
    link: "https://linkedin.com/in/henry-ezeigwe-604892211",
  },
  {
    id: uuidv4(),
    title: "WhatsApp",
    icon: whatsapp,
    link: "https://wa.me/2349038233089",
  },
  {
    id: uuidv4(),
    title: "Telegram",
    icon: telegram,
    link: "https://telegram.me/Mezebu",
  },
  {
    id: uuidv4(),
    title: "Twitter",
    icon: twitter,
    link: "https://twitter.com/Mezebu",
  },
];
