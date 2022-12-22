import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import { StyledLink } from "./style";

export default function BasicSpeedDial({ code, link }) {
  const actions = [
    {
      icon: (
        <StyledLink
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          color="inherit"
        >
          <PublicIcon />
        </StyledLink>
      ),
      name: "Live",
    },
    {
      icon: (
        <StyledLink
          href={code}
          rel="noopener noreferrer"
          target="_blank"
          color="inherit"
        >
          <GitHubIcon />
        </StyledLink>
      ),
      name: "Code",
    },
  ];

  return (
    <Box sx={{ height: 60, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map(({ name, icon }) => (
          <SpeedDialAction key={name} icon={icon} tooltipTitle={name} />
        ))}
      </SpeedDial>
    </Box>
  );
}
