import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import Copyright from "../../components/Copyright/Copyright";

import { FlexCenter } from "../../../styles/globalStyles";
import { data } from "./data";
import { cyan } from "@mui/material/colors";

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
              ? cyan[900]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
          <FlexCenter>
            {data.map(({ id, label, icon, link }) => (
              <Link
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton aria-label={label}>{icon}</IconButton>
              </Link>
            ))}
          </FlexCenter>
        </Container>
      </Box>
    </Box>
  );
}
