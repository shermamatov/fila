import React from "react";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { createTheme, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";

const Connect = () => {
  const theme = createTheme();

  return (
    <>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "26px",
          mt: {
            xs: "8px",
            md: "0px",
          },
        }}
        component="h1"
        variant="h5"
      >
        Connect
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "20%",
          justifyContent: "space-between",
          m: 2,
          ml: 0,
        }}
      >
        <Link
          sx={{}}
          className="icon-twitter"
          href="https://twitter.com/FILAUSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        >
          <TwitterIcon sx={{ fill: "#0b1f3f", fontSize: "2rem" }} />
        </Link>

        <Link
          className="icon-instagram"
          href="https://www.instagram.com/filausa/"
        >
          <InstagramIcon sx={{ fill: "#0b1f3f", fontSize: "2rem" }} />
        </Link>

        <Link
          className="icon-facebook"
          href="https://www.facebook.com/filausa/"
        >
          <FacebookIcon sx={{ fill: "#0b1f3f", fontSize: "2rem" }} />
        </Link>
      </Box>
      <Typography sx={{fontWeight:600, fontSize:20}}>Head Office</Typography>
      <Typography sx={{m:1, width:{xs:'60%', sm:'40%'},  textAlign:{xs:'center', md:'left'},}}>
        1077 Cheonho-daero, Gangdong-gu, Seoul, Korea (EAST CENTRAL TOWER 18F)
        ir@fila.com
      </Typography>
    </>
  );
};

export default Connect;
