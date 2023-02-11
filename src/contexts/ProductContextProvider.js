import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

// const location = useLocation();
export const useProducts = () => {
    return useContext(productContext);
};

const INIT_STATE = {
    products: [],
    productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return { ...state, products: action.payload };

        case ACTIONS.GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload };

        default:
            return state;
    }
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function addProduct(newProduct) {
        await axios.post(JSON_API_PRODUCTS, newProduct);
        getProducts();
    }

    async function getProducts() {
        const { data } = await axios(
            `${JSON_API_PRODUCTS}${window.location.search}`
        );
        dispatch({
            type: ACTIONS.GET_PRODUCTS,
            payload: data,
        });
    }

    async function getProductDetails(id) {
        const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
        dispatch({
            type: ACTIONS.GET_PRODUCT_DETAILS,
            payload: data,
        });
    }

    async function saveEditedProduct(newProduct, id) {
        await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
        getProducts();
    }

    async function deleteProduct(id) {
        await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
        getProducts();
    }

    //! ===============FILTER
    const navigate = useNavigate();
    const location = useLocation();

    const fetchByParams = async (query, value) => {
        const search = new URLSearchParams(location.search);
        if (value === "All") {
            search.delete(query);
        } else if (query == "_sort") {
            search.set(query, "price");
            search.set("_order", value);
        } else {
            search.set(query, value);
        }
        const url = `${location.pathname}?${search.toString()}`;
        navigate(url);
    };

    const values = {
        fetchByParams,
        addProduct,
        products: state.products,
        getProducts,
        getProductDetails,
        productDetails: state.productDetails,
        saveEditedProduct,
        deleteProduct,
    };
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;
