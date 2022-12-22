import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Image from "next/legacy/image";
import { ecommerce, iphone } from "../../assets";

const HeroAccordion = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 500, py: 5 }}>
      <Divider
        component="li"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "black" : "white",
        }}
      />
      <ListItem sx={{ py: 3 }}>
        <ListItemAvatar>
          <Image
            src={ecommerce}
            alt="ecommerce-illustration"
            layout="responsive"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="subtitle2" sx={{ px: 2, fontWeight: 600 }}>
              I build clean and simple websites with unique designs.
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography variant="h5" fontWeight={700}>
              01
            </Typography>
          }
        />
      </ListItem>
      <Divider
        component="li"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "black" : "white",
        }}
      />
      <ListItem sx={{ py: 3 }}>
        <ListItemAvatar>
          <Image
            src={iphone}
            alt="ecommerce-illustration"
            layout="responsive"
          />
        </ListItemAvatar>

        <ListItemText
          primary={
            <Typography variant="subtitle2" sx={{ px: 2, fontWeight: 600 }}>
              Responsive and mobile-first approach.
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography variant="h5" fontWeight={700}>
              02
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
};

export default HeroAccordion;
