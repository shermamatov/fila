import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductSort from "./ProductSort";
import { JSON_API_PRODUCTS } from "../../helpers/consts";
import axios from "axios";

const ProductSortPagination = ({ page, setPage, count }) => {
    const [sort, setSort] = React.useState("");

    const [productCount, setProductCount] = useState([]);

    async function productQuantity() {
        const { data } = await axios.get(JSON_API_PRODUCTS);
        setProductCount(data);
    }

    useEffect(() => {
        productQuantity();
    }, []);

    const handleSort = (event) => {
        setSort(event.target.value);
    };

    const handleChange = (e, p) => {
        setPage(p);
    };
    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                        xl: "flex",
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "3%",
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "10%",
                            sm: "10%",
                            md: "30%",
                            lg: "30%",
                            xl: "30%",
                        },
                        height: "30px",
                        margin: {
                            xs: "0%",
                            sm: "3%",
                            md: "0",
                            lg: "0",
                            xl: "0",
                        },
                    }}
                >
                    <ProductSort />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: {
                            xs: "9%",
                            sm: "10%",
                            md: "0",
                            lg: "0%",
                            xl: "0",
                        },
                    }}
                >
                    <Typography sx={{ fontWeight: "800" }}>
                        {productCount.length} items
                    </Typography>
                    <Divider
                        sx={{ marginLeft: "12px" }}
                        orientation="vertical"
                        flexItem
                    ></Divider>
                    <Stack spacing={2} sx={{ marginRight: 5 }}>
                        <Pagination
                            page={page}
                            onChange={handleChange}
                            count={count}
                            color="warning"
                            size="small"
                        />
                    </Stack>
                </Box>
            </Box>
        </div>
    );
};

export default ProductSortPagination;
