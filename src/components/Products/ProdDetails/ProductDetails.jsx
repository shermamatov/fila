import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./style.css";
import { Button, CardContent, Grid } from "@mui/material";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCounter from "./ProductCounter";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { ADMIN } from "../../../helpers/consts";

const ProductDetails = () => {
    const navigate = useNavigate();
    const { getProductDetails, productDetails, deleteProduct } = useProducts();
    const { id } = useParams();
    useEffect(() => {
        getProductDetails(id);
    }, []);

    //!============
    const {
        user: { email },
    } = useAuth();
    //! =============

    let sizes = [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21,
    ];

    const [size, setSize] = useState();

    function sizesIndex(item) {
        setSize(item);
        changeColor(item);
    }

    const LiItems = [
        "leather / textile / synthetic",
        "embossed FILA logos on tongue, quarter, and instep",
        "embossed FILA basketball logo on adjustable heel strap",
        "perforated and reflective detailing on eyerow",
        "embossed detailing on sidewall",
        "cushioned heel collar and mesh tongue",
        "adjustable heel strap",
    ];

    const [color, setColor] = useState(false);
    function changeColor() {
        setColor((prev) => !prev);
    }

    return (
        <Grid sx={{ mb: "50px", mt: "50px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Button
                        onClick={() => navigate(`/products`)}
                        variant="contained"
                        sx={{
                            color: "white",
                            backgroundColor: "#0a203f",
                            width: "100px",
                            height: "50px",
                        }}
                    >
                        Disabled
                    </Button>

                    {email === ADMIN ? (
                        <>
                            <Button
                                onClick={() => navigate(`/edit/${id}`)}
                                variant="contained"
                                sx={{
                                    color: "black",
                                    backgroundColor: "whitesmoke",
                                    width: "100px",
                                    height: "50px",
                                }}
                            >
                                EDIT
                            </Button>

                            <Button
                                onClick={() => {
                                    deleteProduct(id);
                                    navigate(`/products`);
                                }}
                                variant="contained"
                                sx={{
                                    backgroundColor: "red",
                                    color: "white",
                                    width: "100px",
                                    height: "50px",
                                }}
                            >
                                DELETE
                            </Button>
                        </>
                    ) : (
                        <></>
                    )}
                </Grid>
                <Box
                    sx={{
                        width: "40%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography gutterBottom variant="h3" component="div">
                        <img src={productDetails.picture} alt="" />
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: "40%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <CardContent
                        sx={{
                            width: "100%",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        <Typography gutterBottom variant="h3" component="div">
                            {productDetails.name}
                        </Typography>

                        <Typography sx={{ fontSize: "25px", color: "green" }}>
                            ${productDetails.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {productDetails.description}
                        </Typography>
                    </CardContent>

                    <Box sx={{ width: "50%" }}>
                        <Box
                            sx={{ display: "flex", justifyContent: "start" }}
                            className="sizes__top"
                        >
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "rgb(46, 44, 44)",
                                }}
                            >
                                Size Guide {size}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgb(46, 44, 44)",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    borderBottom: "1px solid rgb(46, 44, 44)",
                                }}
                            ></Typography>
                        </Box>
                        <Box
                            className="sizes__block"
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                            }}
                        >
                            {sizes.map((item, index) => (
                                <Typography
                                    sx={{
                                        cursor: "pointer",
                                        width: "30px",
                                        height: "30px",
                                        border: color
                                            ? "1px solid red"
                                            : "1px solid gray",
                                        borderRadius: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "10px 15px",
                                        fontSize: "12px",
                                        color: "grey",
                                    }}
                                    key={index}
                                    onClick={() => {
                                        sizesIndex(item);
                                        // changeColor()
                                    }}
                                    // onMouseOver={(e) => changeColor(e)}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <ProductCounter />
                    <Box>
                        <Box sx={{ width: "100%" }}>
                            <Accordion sx={{ width: "100%" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontWeight: "700" }}>
                                        Features & Specs
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        {LiItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "20px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "gray",
                                    }}
                                >
                                    <AirportShuttleIcon />
                                    Free Shipping & Easy Returns
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "gray",
                                    }}
                                >
                                    <PaymentIcon />
                                    Multiple Payment Options <HelpOutlineIcon />
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                ></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default ProductDetails;
