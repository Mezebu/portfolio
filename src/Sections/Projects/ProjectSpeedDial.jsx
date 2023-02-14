import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import { StyledLink } from "./styles";

export default function ProjectSpeedDial({ web, code }) {
  const actions = [
    {
      icon: (
        <StyledLink
          href={web}
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
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
