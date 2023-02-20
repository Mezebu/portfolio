import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Copyright from "../../components/Copyright/Copyright";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { FlexCenter } from "../../../styles/globalStyles";

export default function Footer() {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[800]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
          <FlexCenter sx={{ mt: 1 }}>
            <IconButton aria-label="github-icon">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="linkedin-icon">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="email-icon">
              <EmailRoundedIcon />
            </IconButton>
          </FlexCenter>
        </Container>
      </Box>
    </Box>
  );
}
