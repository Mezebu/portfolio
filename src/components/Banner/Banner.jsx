import Image from "next/legacy/image";
import { Box } from "@mui/material";

import { henry } from "../../assets";

const Banner = () => {
  return (
    <Box>
      <Box sx={{ maxWidth: { xs: 450, sm: 600 }, margin: "auto" }}>
        <Image
          src={henry}
          alt="my name illustration"
          layout="responsive"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Banner;
