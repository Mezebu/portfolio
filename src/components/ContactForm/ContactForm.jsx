import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Box, Button, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
    <>
      <Box component="form" ref={form} onSubmit={sendEmail}>
        <TextField
          id="input-with-icon-textfield"
          label="Name"
          type="text"
          name="user_name"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          fullWidth
          margin="dense"
          required
        />
        <TextField
          id="input-with-icon-textfield"
          label="Email"
          type="email"
          name="user_email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <EmailRoundedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
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
          variant="standard"
          fullWidth
          margin="dense"
          required
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ width: "100%", p: 2, fontSize: 15 }}
          disableElevation
          endIcon={<ArrowOutwardIcon />}
        >
          Send
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
