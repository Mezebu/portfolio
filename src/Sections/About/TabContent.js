import { Box, Typography, Link } from "@mui/material";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { StyledIcon } from "./styles";

const TabContent = ({ title, link, date, items }) => (
  <Box>
    <Typography variant="body1" fontWeight={600}>
      {title} <Link underline="hover">{link}</Link>
    </Typography>
    <Typography
      sx={{ fontSize: 10, letterSpacing: 2 }}
      color="text.secondary"
      gutterBottom
    >
      {date}
    </Typography>
    <Box sx={{ mt: 2 }}>
      {items.map(({ id, content }) => (
        <StyledIcon key={id}>
          <ArrowRightRoundedIcon color="primary" />
          <Typography>{content}</Typography>
        </StyledIcon>
      ))}
    </Box>
  </Box>
);

export default TabContent;
