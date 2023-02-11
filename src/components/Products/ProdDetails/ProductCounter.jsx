import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import "../Products/counterButton.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";

const ProductCounter = () => {
    const { productDetails, getProductDetails } = useProducts();
    const { addProductToCart, checkProductInCart } = useCart();

    const [count, setCount] = useState(1);
    const increment = () => {
        setCount((prev) => (prev += 1));
    };

    const decrement = () => {
        count >= 1 ? setCount((prev) => (prev -= 1)) : setCount(0);
    };
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: "10px",
                    margin: "15px",
                    padding: "20px",
                }}
            >
                {/* {productDetails.name} {productDetails.price} */}
                <Box
                    className="counter_button"
                    component="div"
                    sx={{
                        border: "1px solid",
                        width: "70px",
                        height: "28px",
                        marginTop: "1px",
                        marginRight: "15px",
                    }}
                >
                    <div>
                        <RemoveIcon
                            className="remove_icon"
                            onClick={() => decrement()}
                            sx={{ marginRight: "6px" }}
                        />
                    </div>
                    <div>
                        <div>{count}</div>
                    </div>
                    <div>
                        <AddIcon
                            className="add_icon"
                            onClick={increment}
                            sx={{ marginLeft: "6px" }}
                        />
                    </div>
                </Box>

                {checkProductInCart(productDetails.id) ? (
                    <Button
                        variant="contained"
                        onClick={() => addProductToCart(productDetails)}
                        sx={{
                            backgroundColor: "#0a203f",
                            color: "white",
                            width: "300px",
                            height: "55px",
                            // mb: "50px",
                            borderRadius: "1px",
                            font: "16px",
                            fontWeight: "600",
                        }}
                    >
                        ALREADY IN BAG
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        onClick={() => addProductToCart(productDetails)}
                        sx={{
                            backgroundColor: "#0a203f",
                            color: "white",
                            width: "300px",
                            height: "55px",
                            // mb: "50px",
                            borderRadius: "1px",
                            font: "16px",
                            fontWeight: "600",
                        }}
                    >
                        {" "}
                        ADD TO BAG
                    </Button>
                )}
            </Box>
        </div>
    );
};

export default ProductCounter;
