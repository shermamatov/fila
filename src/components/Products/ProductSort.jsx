import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useProducts } from "../../contexts/ProductContextProvider";

export default function NativeSelectDemo() {
    const { fetchByParams } = useProducts();
    return (
        <Box
            sx={{
                display: "flex",
                minWidth: 120,
                marginLeft: {
                    xs: "30px",
                    sm: "30px",
                    md: "0",
                    lg: "15px",
                    xl: "0",
                },
            }}
        >
            <FormControl fullWidth>
                <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                    sx={{ color: "black" }}
                >
                    Sort By Price
                </InputLabel>
                <NativeSelect
                    onChange={(e) => fetchByParams("_sort", e.target.value)}
                    defaultValue={"All"}
                    inputProps={{
                        name: "sort",
                    }}
                >
                    <option value={"All"}>All</option>
                    <option value={"asc"}>Low to High</option>
                    <option value={"desc"}>High to Low</option>
                </NativeSelect>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                    sx={{ color: "black" }}
                >
                    Sort By Type
                </InputLabel>
                <NativeSelect
                    onChange={(e) => fetchByParams("type", e.target.value)}
                    defaultValue={"All"}
                    inputProps={{
                        name: "sort",
                    }}
                >
                    <option value={"All"}>All</option>
                    <option value={"Shoes"}>Shoes</option>
                    <option value={"Bandana"}>Bandana</option>
                    <option value={"Hoodie"}>Hoodie</option>
                    <option value={"Sweatshirt"}>Sweatshirt</option>
                    <option value={"Short"}>Short</option>
                    <option value={"Jogger"}>Jogger</option>
                    <option value={"Bomber"}>Bomber</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
