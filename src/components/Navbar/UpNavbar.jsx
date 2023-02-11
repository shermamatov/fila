import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const navItems = ["USA", "Contact Us", "Corparate"];

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});

function UpNavbar(props) {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>{" "}
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ height: "35px" }}>
            <AppBar
                component="nav"
                sx={{
                    position: "relative",
                    backgroundColor: "#03234c",
                    height: "35px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("md")]: {
                        justifyContent: "center",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "20%",
                        [theme.breakpoints.down("md")]: {
                            display: "none",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            marginLeft: "20px",
                            alignItems: "center",
                        }}
                    >
                        <MailOutlineOutlinedIcon />
                        <Typography
                            sx={{
                                fontSize: "12px",
                                marginLeft: "5px",
                            }}
                        >
                            Sign Up to Join FILA
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        width: "30%",
                        fontSize: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.down("sm")]: {
                            width: "50%",
                        },
                    }}
                >
                    FREE STANDARD SHIPPING
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        width: "20%",
                        [theme.breakpoints.down("md")]: {
                            display: "none",
                        },
                        justifyContent: "flex-end",
                    }}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item}
                            sx={{
                                color: "white",
                                fontSize: "10px",
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
            </AppBar>
        </Box>
    );
}

export default UpNavbar;
