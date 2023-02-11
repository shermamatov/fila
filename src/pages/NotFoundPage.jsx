import {
  Button,
  createTheme,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { border, Box, ThemeProvider, width } from "@mui/system";
import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import AddIcon from "@mui/icons-material/Add";

import { NoEncryption } from "@mui/icons-material";
import Error404 from "../components/NotFound/Error404";

const theme = createTheme();

const NotFoundPage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ m: 10, ml: 0, mr: 0 }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            fontSize: 14,
            ml: {
              xs: "5%",
              md: "20%",
            },
            mb: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              textDecoration: "none",
              color: "#0b1f3f",
            }}
            component="a"
            href="/"
          >
            Home
          </Typography>
          <Typography sx={{ fontSize: 14, mr: { xs: "20%", md: "80%" } }}>
            /An Error Occured
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            align="center"
            sx={{
              width: "40%",
              mt: 10,
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Box
              align="left"
              sx={{
                width: {
                  xs: "50%",
                  lg: "40%",
                },
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
                Customer
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 22,
                  pb: 1,
                  borderBottom: "1px solid rgb(192, 192, 192)",
                }}
              >
                Service
              </Typography>

              <Accordion
                sx={{
                  "&": {
                    py: "5px",
                    boxShadow: "none",

                    border: "none",
                    m: 0,
                  },
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  sx={{
                    "&": {
                      padding: 0,
                    },
                  }}
                  expandIcon={<AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ flexShrink: 0, fontWeight: 600 }}>
                    About Fila
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0, m: 0 }}>
                  <List sx={{ p: 0, m: 0 }} className="about">
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Blog
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      FILA Holdings
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      FILA ESG
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      FILA News
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Careers
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  "&": {
                    m: 0,
                    py: "5px",
                    boxShadow: "none",
                    borderTop: "1px solid rgb(192, 192, 192)",
                    borderRadius: "0px",
                  },
                }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                  }}
                  expandIcon={<AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ flexShrink: 0, fontWeight: 600 }}>
                    Get Help
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0, m: 0 }}>
                  <List sx={{ p: 0, m: 0 }} className="help">
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Check Order Status
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Size Guide
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      My Account
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Accessibility
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Gift Card Balance
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Returns Exchanges
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Contact Us
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      FAQs
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  "&": {
                    py: "5px",
                    boxShadow: "none",
                    borderTop: "1px solid rgb(192, 192, 192)",
                    borderRadius: "0px",
                  },
                }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                  }}
                  expandIcon={<AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ flexShrink: 0, fontWeight: 600 }}>
                    Policies and Supply <br /> Chain
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0, m: 0 }}>
                  <List sx={{ p: 0, m: 0 }} className="help">
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Check Order Status
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Terms of Use
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Privacy Policy (UPDATED 8/12/2021)
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      California Transparency in Supply Chain Act
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Corporate Statement on Forced Labor
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Business Partner Code of Conduct
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Idea Submissions
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  "&": {
                    py: "5px",
                    boxShadow: "none",
                    borderTop: "1px solid rgb(192, 192, 192)",
                    borderRadius: "0px",
                    m: 0,
                  },
                }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                  }}
                  expandIcon={<AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ flexShrink: 0, fontWeight: 600 }}>
                    Customer Programs
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0, m: 0 }}>
                  <List sx={{ p: 0, m: 0 }} className="help">
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Check Order Status
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Preferred Player
                    </ListItem>
                    <ListItem sx={{ p: 0 }} className="list-item">
                      Wholesaler Inquiries
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "90%", md: "60%" } }}>
            <Box>
              <Error404 />
            </Box>

            <Box sx={{ mt: 7 }}>
              <Box
                sx={{
                  width: "95%",
                  height: "1px",
                  backgroundColor: "rgb(216, 216, 216)",
                }}
              ></Box>
              <Typography sx={{ mt: 2, mb: 1, fontSize: 14 }}>
                TRY A NEW SEARCH
              </Typography>
              <Box
                sx={{
                  mb: 1,
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                  },
                }}
              >
                <TextField
                  sx={{
                    "&": {
                      width: "50%",
                      mt: 1,
                    },
                    "&.MuiTextfield-root": {
                      padding: 0,
                    },
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "#0b1f3f ",
                    color: "white",
                    borderRadius: 0,
                    fontWeight: 600,
                    m: 2,
                    mt: 1,
                    px: 4,
                    py: 2,
                  }}
                >
                  Go
                </Button>
              </Box>

              <Box
                sx={{
                  width: "95%",
                  height: "1px",
                  backgroundColor: "rgb(216, 216, 216)",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default NotFoundPage;
