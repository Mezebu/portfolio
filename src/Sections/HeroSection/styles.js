import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const StyledDate = styled(Typography)({
  writingMode: "vertical-rl",
  textOrientation: "upright",
  fontWeight: 800,
});

export const StyledText = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 400,
});

export const StyledGreyDot = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(145deg, #cacaca, #f0f0f0)"
      : "linear-gradient(145deg, #24335e, #1f2b4f)",
  width: 30,
  height: 30,
  position: "absolute",
  borderRadius: 50,
  left: "80%",
  top: 150,
  boxShadow:
    theme.palette.mode === "light"
      ? "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
      : "21px 21px 43px #001428,-21px -21px 43px #002850",
}));

export const StyledPinkDot = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(145deg, #ffc8df, #dfa8bb)"
      : "linear-gradient(315deg, #920f55, #7a0d47)",
  width: 30,
  height: 30,
  position: "absolute",
  borderRadius: 50,
  left: "90%",
  top: 350,
  boxShadow:
    theme.palette.mode === "light"
      ? "19px 19px 38px #c696a6,-19px -19px 38px #ffe0fa"
      : "8px 8px 16px #740c43,-8px -8px 16px #9c105b",
}));
