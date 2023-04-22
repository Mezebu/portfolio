import React, { useContext } from "react";
import { Box, Divider, Grid, MenuItem } from "@mui/material";
import { Typography, useTheme } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { StyledMenu, StyledMenuContainer } from "./styles";
import { FlexAlignCenter, FlexCenter } from "../../../styles/globalStyles";
import ThemeContext from "../../ThemeContext";

const items = [
  { id: uuidv4(), name: "Default", mode: "default" },
  { id: uuidv4(), name: "Red", mode: "red" },
  { id: uuidv4(), name: "Blue", mode: "blue" },
  { id: uuidv4(), name: "Green", mode: "green" },
  { id: uuidv4(), name: "Orange", mode: "orange" },
  { id: uuidv4(), name: "Dark", mode: "dark" },
];

const ThemeSwitcher = ({ anchorEl, handleClose, open }) => {
  const { selectedTheme, handleThemeChange } = useContext(ThemeContext);
  const themePicked =
    selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

  return (
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <FlexCenter sx={{ p: 2 }}>
        <Typography variant="subtitle1"> Choose Theme</Typography>
      </FlexCenter>
      <Divider />

      <Grid container>
        {items.map(({ id, name, mode }) => (
          <Grid item key={id} lg={6} md={6} sm={6} xs={6}>
            <StyledMenuContainer>
              <MenuItem
                sx={{
                  py: 2,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: 90,
                }}
                onClick={() => handleThemeChange(mode)}
                disableRipple
              >
                {name}
              </MenuItem>
            </StyledMenuContainer>

            <Divider />
          </Grid>
        ))}
      </Grid>
      <FlexAlignCenter sx={{ p: 2 }}>
        <Typography sx={{ mr: 1 }}>{`Selected Theme:  `}</Typography>
        <Typography color="primary"> {themePicked}</Typography>
      </FlexAlignCenter>
    </StyledMenu>
  );
};

export default ThemeSwitcher;
