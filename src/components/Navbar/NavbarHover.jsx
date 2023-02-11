import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { List, ListItem, Typography } from "@mui/material";
import { navbarContext } from "../../contexts/NavabarContexts";
const NavbarHover = () => {
    const { setHover } = useContext(navbarContext);
    const contact = [
        "FILA USA Careers",
        "FILA USA Careers",
        "FILA Online Careers",
        "Idea Submission",
        "Preferred Player",
        "Wholesaler Inquiries",
    ];
    const corporate = ["FILA Holdings", "ESG", "FILA News"];
    const policies = ["Terms of Use", "Privacy Policy", "Accessibility"];
    const resources = [
        "Account",
        "Sitemap",
        "Customer Service",
        "Check Order Status",
        "The Archives",
        "eGift Card",
    ];
    return (
        <Box
            sx={{
                backgroundColor: "white",
                color: "#000",
                boxShadow: "0px 8px 8px -5px rgba(34, 60, 80, 0.6)",
                borderTop: "2px solid #A1A1A1",
                position: "absolute",
                width: "100%",
                zIndex: 99,
                top: "63px",
            }}
        >
            <footer>
                <Box
                    onMouseLeave={() => setHover(false)}
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "60px",
                        fontSize: "13px",
                    }}
                >
                    <Box>
                        <Typography sx={{ padding: "10px", margin: 0 }}>
                            Collaborations
                        </Typography>
                        <List>
                            {contact.map((i, index) => (
                                <ListItem
                                    key={`${index}`}
                                    sx={{ padding: "10px", margin: 0 }}
                                >
                                    {i}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography sx={{ padding: "10px", margin: 0 }}>
                            Must-Haves
                        </Typography>
                        <List>
                            {corporate.map((i, index) => (
                                <ListItem
                                    key={`${index}`}
                                    sx={{ padding: "10px", margin: 0 }}
                                >
                                    {i}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography sx={{ padding: "10px", margin: 0 }}>
                            Shops
                        </Typography>
                        <List>
                            {policies.map((i, index) => (
                                <ListItem
                                    key={`${index}`}
                                    sx={{ padding: "10px", margin: 0 }}
                                >
                                    {i}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography sx={{ padding: "10px", margin: 0 }}>
                            Athletes
                        </Typography>
                        <List>
                            {resources.map((i, index) => (
                                <ListItem
                                    key={`${index}`}
                                    sx={{ padding: "10px", margin: 0 }}
                                >
                                    {i}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </footer>
        </Box>
    );
};

export default NavbarHover;
