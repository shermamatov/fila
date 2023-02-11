import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import React from "react";
import Connect from "../components/ContactUs/Connect";
import ContactUs from "../components/ContactUs/ContactUs";
import GoogleMap from "../components/ContactUs/GoogleMap";
import GoogleMap2 from "../components/ContactUs/GoogleMap2";

const theme = createTheme();
const ContactUsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: 4,
          color: "#0b1f3f",
        }}
      >
        <ContactUs />
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            marginLeft: { xs: "0%", md: "5%" },
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              md: "flex-start",
            },
          }}
        >
          <Connect />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {" "}
            <GoogleMap />
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            {" "}
            <GoogleMap2 />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContactUsPage;
