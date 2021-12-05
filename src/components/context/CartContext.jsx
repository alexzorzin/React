import { useState, createContext, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1)

    const addItem = (item) => {
        let repeated = cartList.find(e => e.item === item.item)
        if (repeated) {
            cartList.map( (e) => {
                if (e.item === item.item) {
                    e.stock = e.stock + count
                }
                return e;
            });
            console.log("Estás repitiendo")
        } else {
            setCartList([...cartList, item])
        }
    }

    const clearCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, clearCart, count, setCount }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider