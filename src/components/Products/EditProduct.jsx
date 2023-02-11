import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
const EditProduct = () => {
    const { productDetails, getProductDetails, saveEditedProduct } =
        useProducts();

    const [product, setProduct] = useState(productDetails);
    const { id } = useParams();
    useEffect(() => {
        getProductDetails(id);
    }, []);

    useEffect(() => {
        setProduct(productDetails);
    }, [productDetails]);

    const navigate = useNavigate();

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 425,
                sm: 750,
                md: 960,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    const handleInp = (e) => {
        let obj = { ...product, [e.target.name]: e.target.value };
        setProduct(obj);
    };

    return (
        <Box
            align="center"
            sx={{
                backgroundImage:
                    "url(https://www.fila.de/out/fila/img/footer-mobile.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "70vh",
                display: "flex",
                marginBottom: "0px",
                flexDirection: "column",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                    width: "100%",
                    backgroundImage: "none",
                },
                [theme.breakpoints.down("md")]: {
                    height: "54vh",
                },
            }}
        >
            <Typography
                sx={{
                    color: "white",
                    fontSize: "30px",
                    [theme.breakpoints.down("sm")]: {
                        color: "black",
                        fontSize: "24px",
                    },
                }}
            >
                EDIT PRODUCT PANEL
            </Typography>
            <Box
                sx={{
                    width: "60vw",
                    margin: "3vh auto 10vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr ",
                    gridGap: "10px",
                    [theme.breakpoints.down("sm")]: {
                        width: "80%",
                    },
                }}
            >
                <TextField
                    sx={{
                        borderColor: "white",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    onChange={handleInp}
                    fullWidth
                    // label="Name"
                    placeholder="Name"
                    variant="outlined"
                    name="name"
                    value={product.name || ""}
                    size="small"
                />

                <FormControl
                    fullWidth
                    sx={{ backgroundColor: "white", borderRadius: "4px" }}
                >
                    <InputLabel
                        sx={{
                            fontSize: "18px",
                            color: "black",
                        }}
                        htmlFor="outlined-adornment-amount"
                    ></InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onChange={handleInp}
                        placeholder="Price"
                        variant="outlined"
                        name="price"
                        size="small"
                        type="number"
                        value={product.price || ""}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        gridColumn: "1/3",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    placeholder="Description"
                    variant="outlined"
                    name="description"
                    size="small"
                    value={product.description || ""}
                />

                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    placeholder="Picture"
                    variant="outlined"
                    name="picture"
                    size="small"
                    value={product.picture || ""}
                />

                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    placeholder="Type"
                    variant="outlined"
                    name="type"
                    size="small"
                    value={product.type || ""}
                />

                <Button
                    sx={{
                        borderColor: "black",
                        backgroundColor: "#0B1F4F",
                        color: "white",
                        transition: "1000s",
                        gridColumn: "1/3",
                    }}
                    variant="outlined"
                    fullWidth
                    size="large"
                    onClick={() => {
                        saveEditedProduct(product, id);
                        navigate("/products");
                    }}
                >
                    SAVE EDIT
                </Button>
            </Box>
        </Box>
    );
};

export default EditProduct;
