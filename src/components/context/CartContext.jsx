import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (item) => {
        let repeated = cartList.find(e => e.item === item.item)
        if (repeated) {
            cartList.map( (e) => {
                if ((e.item === item.item) && (e.stock < item.stock)) {
                    e.stock = e.stock + count
                
            }
            
            return e;
            });
            console.log("Estás repitiendo")
        } else {
            setCartList([...cartList, item])
        }
    }

    const removeProd = (item) => {
        let updatedCartList = cartList.filter(prod => prod.item !== item)
        setCartList([...updatedCartList])
        
    }

    useEffect (() => {
        const totalPrice = cartList.map(prod => (prod.stock * prod.price)).reduce((acc, el) => acc + el, 0);
        setTotalPrice(totalPrice)
    }, [cartList])

    const clearCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, clearCart, removeProd, count, setCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider