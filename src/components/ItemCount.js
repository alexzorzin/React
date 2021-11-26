import { useState } from "react";

export default function ItemCount(props) {

    const [Count, setCount] = useState(0);

    const counterAdd = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            alert('No hay suficiente stock.');
        }
    }

    const counterSubstract = () => {
        if (Count > 1) {
            setCount(Count - 1)
        }
        else {
            setCount(0);
        }
    }

    const addToCart = () => {
        alert('Has añadido el producto correctamente');
    }
    return (
        <>
            <button className='btn btn-primary mx-2' onClick={counterAdd}>+</button>
            <p>{Count}</p>
            <button className='btn btn-primary mx-2' onClick={counterSubstract}>-</button>

            {/* <div className='mt-2'> */}
                <button className='btn btn-primary mx-3' onClick={addToCart}>Agregar al carrito</button>
            {/* </div> */}
        </>
    )
}