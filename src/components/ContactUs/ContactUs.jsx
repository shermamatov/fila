import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "80%", md: "60%" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 26,
            }}
            component="h1"
            variant="h5"
          >
            Contact Customer Support
          </Typography>

          <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
            Tell us how we can help.
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Box sx={{ mt: 0 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Subject
              </Typography>
              <TextField
                sx={{ "&": { borderRadius: 0 } }}
                required
                fullWidth
                id="subject"
                name="subject"

                // ===========
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Name
              </Typography>
              <TextField
                required
                fullWidth
                id="name"
                name="name"

                // ===========
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Email
              </Typography>
              <TextField
                required
                id="emaili"
                fullWidth
                name="email"

                // ===========
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Phone
              </Typography>
              <TextField
                required
                fullWidth
                id="phone"
                name="phone"

                // ===========
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Description
              </Typography>
              <TextField
                className="input-password"
                required
                fullWidth
                id="password"
                name="password"

                // ===============
              />
            </Box>

            <Button
              className="button_create"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5, fontWeight: 600, borderRadius: 0 }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
