import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDate = styled(Typography)({
  writingMode: "vertical-rl",
  textOrientation: "upright",
  fontWeight: 800,
});

export const StyledText = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 600,
});

export const StyledGreyDot = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(145deg, #cacaca, #f0f0f0)"
      : "#001E3C",
  width: 30,
  height: 30,
  position: "absolute",
  borderRadius: 50,
  left: "80%",
  top: 150,
  boxShadow:
    theme.palette.mode === "light"
      ? "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
      : "inset 8px 8px 18px #001122,inset -8px -8px 18px #002b56 ",
}));

export const StyledRedDot = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(145deg, #ff483a, #dc3c31)"
      : "linear-gradient(145deg, #c41e1e, #a51919)",
  width: 12,
  height: 12,
  borderRadius: 50,
  marginRight: 5,
  boxShadow:
    theme.palette.mode === "light"
      ? "19px 19px 38px #c696a6,-19px -19px 38px #ffe0fa"
      : "20px 20px 60px #961717,-20px -20px 60px #d82121",
}));

export const StyledYellowDot = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(145deg, #fffb3f, #e6d435)"
      : "linear-gradient(145deg, #ffe739, #e4c230)",
  width: 12,
  height: 12,
  borderRadius: 50,
  marginRight: 5,
  boxShadow:
    theme.palette.mode === "light"
      ? "20px 20px 60px #d1c130,-20px -20px 60px #ffff46"
      : "20px 20px 60px #cfb12b, -20px -20px 60px #ffff3f",
}));

export const StyledGreenDot = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(145deg, #00f67e, #00cf6a)"
      : "linear-gradient(145deg, #00d659, #00b44b)",
  width: 12,
  height: 12,
  borderRadius: 50,
  marginRight: 5,
  boxShadow:
    theme.palette.mode === "light"
      ? "20px 20px 60px #00bd61,-20px -20px 60px #00ff8b"
      : "20px 20px 60px #00a444, -20px -20px 60px #00ec62",
}));
