import { useEffect, useState } from "react";
import { useCartContext } from "./context/CartContext";

export const TotalPrice = (() => {

    const [totalPrice, setTotalPrice] = useState(0)
    const { cartList } = useCartContext();

    useEffect (() => {
        let price = 0;

        cartList.forEach(e => {
            price += e.totalPrice
        });
        setTotalPrice(price)
    }, [cartList])
    

    return (

        <p className="">Precio: AR$ {totalPrice}</p>
    )



})