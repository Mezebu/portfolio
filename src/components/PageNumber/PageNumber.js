import Typography from "@mui/material/Typography";

const PageNumber = ({ page }) => {
  return (
    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
      {page}/
    </Typography>
  );
};

export default PageNumber;
