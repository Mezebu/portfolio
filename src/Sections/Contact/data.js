import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

export const contactData = [
  {
    id: 2,
    title: "Location",
    icon: <LocationOnIcon />,
    detail: "Nigeria",
    link: "",
  },
  {
    id: 3,
    title: "Phone",
    icon: <LocalPhoneRoundedIcon />,
    detail: `+234 9038233089`,
    link: "tel:+234 9038233089",
  },
  {
    id: 1,
    title: "Email",
    icon: <EmailRoundedIcon />,
    detail: "mezebu07@gmail.com",
    link: "mailto:mezebu07@gmail.com?Subject=Hey Henry!✋",
  },
];
