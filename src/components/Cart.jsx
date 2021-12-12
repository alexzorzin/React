import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './context/CartContext';
import { TotalPrice } from './Price';

const Cart = () => {
    const { cartList, clearCart, removeProd } = useCartContext()
    console.log(cartList)
    return (
        <>
            {cartList.length > 0 ?
                <div className="mt-5">
                    <p className="pt-5 text-uppercase fs-3 fw-bold">Carrito de compras</p>
                    {cartList.map(prod =>
                    <div className='d-flex justify-content-center'>
                        <div key={prod.item} className="card w-50 my-5 mx-3">
                            <div className="card-header text-uppercase">
                                {prod.item}
                            </div>
                            <div className="row">
                                <img src={prod.img} className="w-25 col-5 ms-5" alt={prod.item} />
                                <div className="col-3 mt-5">{prod.Stock}  x  {prod.item}</div>
                                <div className="col-3 mt-5">AR$ {prod.price * prod.Stock}</div>
                                <div className="col-1 mt-5">
                        <button className="btn btn-danger btn-sm" onClick={() => removeProd(prod.id)} >
                            <i className="fa fa-trash"></i>  Eliminar
                        </button>
                    </div>
                            </div>
                        </div>
                        </div>
                    )}
                    <TotalPrice />
                    <button className="btn btn-primary mb-5 mx-2" onClick={clearCart}>Vaciar carrito</button>
                    <button className="btn btn-primary mb-5 mx-2" >Comprar</button>
                </div>
                :
                <div className="mt-5">
                    <p className='fs-3 fw-bold'>Tu carrito se encuentra vacío</p>
                    <p className='fw-normal fs-5'>Agregue sus productos clickeando <Link to='/React' className='fw-bold'>AQUÍ</Link></p>
                </div>
            }
        </>
    )
}
export default Cart