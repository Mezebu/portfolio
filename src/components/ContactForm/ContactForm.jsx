import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Box, Button, Container, InputAdornment } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import { FlexJustifyCenter } from "../../../styles/globalStyles";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLETE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "There was an error sending your message, please try again later",
            { position: toast.POSITION.BOTTOM_RIGHT }
          );
        }
      );
    e.target.reset();
  };

  return (
    <Container maxWidth="md">
      <FlexJustifyCenter>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 600, maxWidth: 300, mb: 2 }}
        >
          Got ideas? Send me an email, {"I'd"} love to collaborate.
        </Typography>
      </FlexJustifyCenter>

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{ px: { sm: 7 } }}
      >
        <TextField
          id="input-with-icon-textfield"
          label="Enter your name"
          type="text"
          name="user_name"
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
          name="user_email"
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
          label="Message"
          type="text"
          name="message"
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
    </Container>
  );
};

export default ContactForm;
