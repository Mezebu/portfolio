import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: 11, letterSpacing: 3 }}
        color="text.primary"
        variant="button"
      >
        {subTitle}
      </Typography>
      <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
