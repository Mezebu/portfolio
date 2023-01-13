import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { List, Typography } from "@mui/material";
import Image from "next/legacy/image";

import { computer, iphone } from "../../assets";
import { StyledDivider } from "./styles";

const HeroAccordion = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 500, py: 5 }}>
      <StyledDivider />
      <ListItem sx={{ py: 3 }}>
        <ListItemAvatar>
          <Image
            src={computer}
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
      <StyledDivider />
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
