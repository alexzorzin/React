import { useCartContext } from "./CartContext";
import swal from '@sweetalert/with-react';

const ItemCount = ({ stock, onAdd }) => {

    const {count, setCount} = useCartContext()

    const addCounter = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            swal("ERROR", "No hay mas stock de este producto", "error");
        }
    }

    const substractCounter = () => {
        if (count <= stock && count > 1) {
            setCount(count - 1)
        }
        else {
            setCount(0);
        }
    }

    return (
        <>
            <button className='btn btn-primary mx-2' onClick={addCounter}>+</button>
            <p>{count}</p>
            <button className='btn btn-primary mx-2' onClick={substractCounter}>-</button>
            <button className='btn btn-primary mx-3' onClick={onAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount 