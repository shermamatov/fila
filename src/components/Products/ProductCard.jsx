import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: {
                    xs: "45%",
                    sm: "45%",
                    md: "31%",
                    lg: "31%",
                    xl: "31%",
                },
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${item.picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "end",
                }}
            >
                <Button
                    sx={{
                        backgroundColor: "white",
                        width: "80%",
                        color: "black",
                        marginTop: "130%",
                        marginBottom: "5%",
                        fontWeight: "800",
                        fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                            xl: "20px",
                        },
                    }}
                    onClick={() => navigate(`/products/${item.id}`)}
                >
                    QUICK VIEW
                </Button>
            </Box>
            <Typography
                sx={{
                    fontWeight: "600",
                    marginTop: "13px",
                    width: "90%",
                    textAlign: "left",
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px",
                        xl: "20px",
                    },
                }}
            >
                {item.name}
            </Typography>
            <Typography
                sx={{
                    fontWeight: "600",
                    marginBottom: "10%",
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px",
                        xl: "20px",
                    },
                }}
            >
                ${item.price}
            </Typography>
        </Box>
    );
};

export default ProductCard;
