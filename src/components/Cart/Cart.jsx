import * as React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import { Button, Typography, useMediaQuery } from "@mui/material";

import "./Cart.css";

export default function Cart() {
    const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

    React.useEffect(() => {
        getCart();
    }, []);

    const cartCleaner = () => {
        localStorage.removeItem("cart");
        getCart();
    };

    return (
        <table>
            <tbody>
                <tr className=" cart-desktop tr-head">
                    <th className=" item" align="left">
                        ITEM
                    </th>
                    <th className=" headqty">QTY</th>
                    <th align=" center">ITEM PRICE</th>
                    <th align=" right">SUBTOTAL</th>
                </tr>

                {cart.products.map((row, i) => (
                    <tr className="row" key={i}>
                        <td
                            valign="top"
                            align="left"
                            className="cart-desktop img-descr"
                        >
                            <img
                                className="cartimg"
                                src={row.item.picture}
                                alt="noe"
                            />
                            <div className="name-qty">
                                <p className="name">{row.item.name}</p>
                                <p className="qty">Qty: {row.count}</p>
                            </div>
                        </td>
                        <td className="cart-desktop" valign="top">
                            <input
                                className="counter"
                                min={1}
                                max={100}
                                type="number"
                                value={row.count}
                                onChange={(e) =>
                                    changeProductCount(
                                        e.target.value,
                                        row.item.id
                                    )
                                }
                            />
                            <p
                                className="remove"
                                align="left"
                                sx={{ display: "block" }}
                                onClick={() => deleteCartProduct(row.item.id)}
                            >
                                Remove
                            </p>
                        </td>
                        <td
                            valign="top"
                            className="prices cart-desktop"
                            align="center"
                        >
                            <p className="cart-price">${row.item.price}</p>
                        </td>
                        <td className="cart-desktop" valign="top" align="right">
                            <p className="subprice">${row.subPrice}</p>
                        </td>

                        <td className="cart-phone">
                            <img
                                className="cartimg"
                                src={row.item.picture}
                                alt="noe"
                            />
                            <div className="name-qty">
                                <p className="name">{row.item.name}</p>
                                <p className="qty">Qty: {row.count}</p>

                                <p className="cart-price">${row.item.price}</p>

                                <input
                                    className="counter"
                                    min={1}
                                    max={100}
                                    type="number"
                                    value={row.count}
                                    onChange={(e) =>
                                        changeProductCount(
                                            e.target.value,
                                            row.item.id
                                        )
                                    }
                                />
                                <p
                                    className="remove"
                                    align="left"
                                    sx={{ display: "block" }}
                                    onClick={() =>
                                        deleteCartProduct(row.item.id)
                                    }
                                >
                                    Remove
                                </p>
                                <p className="subprice">
                                    Subtotal: ${row.subPrice}
                                </p>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
