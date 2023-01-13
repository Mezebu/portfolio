import { Box, Container, CssBaseline } from "@mui/material";
import Copyright from "../../components/Copyright/Copyright";

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
        </Container>
      </Box>
    </Box>
  );
}
