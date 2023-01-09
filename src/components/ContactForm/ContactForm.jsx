import { Box, Button, InputAdornment } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { FlexJustifyCenter } from "../../../styles/globalStyles";

const ContactForm = () => {
  return (
    <Box>
      <FlexJustifyCenter>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 600, maxWidth: 300, mb: 2 }}
        >
          Got ideas? Send me an email, {"I'd"} love to collaborate.
        </Typography>
      </FlexJustifyCenter>

      <Box component="form" sx={{ px: { sm: 7 } }}>
        <TextField
          id="input-with-icon-textfield"
          label="Enter your name"
          type="text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          variant="filled"
          fullWidth
          margin="dense"
          required
        />
        <TextField
          id="input-with-icon-textfield"
          label="Enter your email address"
          type="email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <EmailRoundedIcon />
              </InputAdornment>
            ),
          }}
          variant="filled"
          fullWidth
          margin="dense"
          required
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          type="text"
          multiline
          rows={5}
          variant="filled"
          fullWidth
          margin="dense"
          required
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ width: "100%", p: 2 }}
          disableElevation
          endIcon={<SendRoundedIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
