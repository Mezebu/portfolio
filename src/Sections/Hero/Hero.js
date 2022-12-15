import { Box, Grid, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { mockup } from "../../assets";
import BannerText from "../../components/BannerText/BannerText";

const Hero = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <BannerText />
        </Grid>
        <Grid item lg={4}>
          <Image src={mockup} alt="mockup" layout="responsive" />
        </Grid>
      </Grid>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero hic
        eveniet accusantium similique numquam distinctio voluptatem repudiandae
        cumque, tempora eum velit quas iste maiores commodi assumenda quae
        recusandae dicta id?
      </div>
      <br />
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero hic
        eveniet accusantium similique numquam distinctio voluptatem repudiandae
        cumque, tempora eum velit quas iste maiores commodi assumenda quae
        recusandae dicta id?
      </div>
    </Box>
  );
};

export default Hero;
