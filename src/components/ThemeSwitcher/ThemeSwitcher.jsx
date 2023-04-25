import React, { useContext } from "react";
import { Typography, Divider, Grid, MenuItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import { StyledMenu, StyledMenuContainer } from "./styles";
import { FlexAlignCenter, FlexCenter } from "../../../styles/globalStyles";
import ThemeContext from "../../ThemeContext";

const items = [
  { id: uuidv4(), name: "Default", mode: "default", color: "teal" },
  { id: uuidv4(), name: "Red", mode: "red", color: "red" },
  { id: uuidv4(), name: "Blue", mode: "blue", color: "blue" },
  { id: uuidv4(), name: "Green", mode: "green", color: "green" },
  { id: uuidv4(), name: "Orange", mode: "orange", color: "orange" },
  { id: uuidv4(), name: "Dark", mode: "dark", color: "blue" },
];

const ThemeSwitcher = ({ openThemeMenu, handleClose, open }) => {
  const { selectedTheme, handleThemeChange } = useContext(ThemeContext);
  const themePicked =
    selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

  return (
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={openThemeMenu}
      open={open}
      onClose={handleClose}
    >
      <FlexCenter sx={{ p: 2 }}>
        <Typography variant="subtitle1"> Choose Theme</Typography>
      </FlexCenter>
      <Divider />

      <Grid container>
        {items.map(({ id, name, mode, color }) => (
          <Grid item key={id} lg={6} md={6} sm={6} xs={6}>
            <StyledMenuContainer>
              <MenuItem
                sx={{
                  py: 2,
                  display: "flex",
                  justifyContent: "center",
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

ThemeSwitcher.propTypes = {
  openThemeMenu: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};
