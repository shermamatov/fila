import React from "react";
import Cart from "../components/Cart/Cart";
import Order from "../components/Cart/Order";
import { useCart } from "../contexts/CartContextProvider";
import { getCountProductsInCart } from "../helpers/functions";

const CartPage = () => {
    const { cart, addProductToCart } = useCart();

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setCount(getCountProductsInCart);
    }, [addProductToCart]);
    return (
        <div className="cartPage">
            <div className="headerBox">
                <h1 className="headerCart">Your Bag ({count})</h1>
            </div>
            <div className="cartBody">
                <div className="cart-left">
                    {" "}
                    <Cart />
                </div>
                <div className="cart-right">
                    {" "}
                    <Order />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
