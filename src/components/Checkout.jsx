import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react'
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Payment from './Payment';
import { useCartContext } from './context/CartContext';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from '../firebase/firebase';
import './Checkout.css'

function Checkout() {

    const { cartList, totalPrice } = useCartContext();
    const [buyerName, setBuyerName] = useState('')
    const [buyerSurname, setBuyerSurname] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const [buyerCity, setBuyerCity] = useState('')
    const [showPaymentOp, setShowPaymentOp] = useState(false)
    const [style, setStyle] = useState('checkout-container');
    const [email, setEmail] = useState('')
    const [orderID, setOrderID] = useState('')

    const buttonPayment = (e) => {
        e.preventDefault()
        setShowPaymentOp(!showPaymentOp)
    }

    const createOrder = async () => {

        const order = {}
        order.date = Timestamp.fromDate(new Date());

        order.buyer =
        {
            name: buyerName,
            surname: buyerSurname,
            email: buyerEmail,
            city: buyerCity,
        }

        order.total = totalPrice;

        order.shoes = cartList.map(e => {
            const id = e.id;
            const name = e.name;            
            const size = e.size;
            const stock = e.stock;

            return { id, name, size, stock }
        })

        const addOrder = await addDoc(collection(db, "orders"), order)
        setOrderID(addOrder.id)     
    }


    return (
        <>
            <div className={style}>
                <Link to="/React/cart" className="back-cart btn-dark">Volver a carrito</Link>
                <div className="checkout-details-container">
                    {cartList.map(e =>
                        <div key={e.id} className="checkout-cart">
                            <Image src={e.img} />
                            <div className="checkout-detail">
                                <h3>{e.name} Talle {e.size}</h3>
                                <p> {e.price} x {e.Stock}</p>
                            </div>
                        </div>

                    )}
                </div>

                <form className="buyer-form" onSubmit={buttonPayment}>
                    <div className="col-1" id="buyer-name">
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" onChange={event => setBuyerName(event.target.value)} placeholder="Nombre" required />
                    </div>

                    <div className="col-2" id="buyer-surname">
                        <label htmlFor="apellido">Apellido: </label>
                        <input type="text" name="apellido" onChange={event => setBuyerSurname(event.target.value)} placeholder="Apellido" required />
                    </div>

                    <div className="col-1" id="buyer-email">
                        <label htmlFor="email">Ingrese su mail: </label>
                        <input type="email" name="email" onChange={event => setBuyerEmail(event.target.value)} placeholder="tumail@servicio.com" required />
                    </div>

                    <div className="col-2" id="buyer-re-email">
                        <label htmlFor="email">Repite tu mail: </label>
                        <input type="email" name="email" placeholder="tumail@servicio.com" onChange={event => setEmail(event.target.value)} required />
                    </div>

                    <div className="col-1" id="buyer-city">
                        <label htmlFor="city">Provincia: </label>
                        <select name="city" onChange={event => setBuyerCity(event.target.value)} required>
                        <option value="BSAS">Buenos Aires</option>
                        <option value="interior">Interior</option>
                        </select>
                    </div>


                    <div className="col-2" id="buyer-source">
                        <label htmlFor="source" >Codigo Postal </label>
                        <textarea placeholder='Escribe tu codigo postal aquí'>

                        </textarea>
                    </div>


                    <div className="select-payment">
                        {(email.length > 1 && buyerEmail === email) ?
                            <input type="submit" className="btn btn-primary rounded-pill" value="Elegir método de pago" /> :
                            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Completa todos los campos</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button className="btn btn-primary rounded-pill" disabled style={{ pointerEvents: 'none' }}>
                                        Elegir método de pago
                                    </Button>
                                </span>
                            </OverlayTrigger>
                        }
                    </div>
                </form>
                {(showPaymentOp) &&
                    <section className="payment-options">
                        <Payment totalPrice={totalPrice} createOrder={createOrder} />
                    </section>
                }
            </div>
            {(style === 'none') &&
                <div className="order-confirm">
                    <h3>Muchas gracias por tu compra, {buyerName}!</h3>
                    <p>Copie su numero de orden por si tiene inconvenientes con su pedido: {orderID}</p>
                </div>

            }
        </>
    )


}

export default Checkout