import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react'
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from '../../../firebase/firebase';
import './Checkout.css'
import check from '../../../check-green.gif'

const URL = "https://restcountries.com/v2/all?fields=name";

const Checkout = () => {

    const { cartList, totalPrice } = useCartContext();
    const [buyerName, setBuyerName] = useState('')
    const [buyerSurname, setBuyerSurname] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const [buyerCountry, setBuyerCountry] = useState('')
    const [buyerCity, setBuyerCity] = useState('')
    const [country, setCountry] = useState([])
    const [showPaymentOp, setShowPaymentOp] = useState(false)
    const [style, setStyle] = useState('checkout-container');
    const [email, setEmail] = useState('')
    const [orderID, setOrderID] = useState('')

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setCountry(result)
                }
            )
        return () => setCountry([])
    }, [])

    const buttonPayment = (e) => {
        e.preventDefault()
        setShowPaymentOp(!showPaymentOp)
    }

    const hideContainer = () => {
        setStyle('hide');
    }

    const createOrder = async () => {

        const order = {}
        order.date = Timestamp.fromDate(new Date());

        order.buyer =
        {
            name: buyerName,
            surname: buyerSurname,
            email: buyerEmail,
            country: buyerCountry,
            city: buyerCity,
        }

        order.total = totalPrice;

        order.shoes = cartList.map(e => {
            const name = e.item;
            const price = e.price;
            const size = e.size;

            return { name, price, size }
        })

        const addOrder = await addDoc(collection(db, "orders"), order)
        setOrderID(addOrder.id)
        // console.log(addOrder.id)
    }


    return (
        <>
            <div className={style}>
                <Link to="/React/cart" className="back-cart btn-dark">Volver al carrito</Link>
                <div className="checkout-details-container border border-dark">
                    <h5 className="d-flex justify-content-left">Mi pedido</h5>
                    {cartList.map(e =>
                        <div key={e.id} className="checkout-cart">
                            <Image src={e.img} />
                            <div className="checkout-detail">
                                <h3>{e.item}</h3>
                                <p>Talle: {e.size}</p>
                                <p> {e.price} x {e.stock}</p>
                            </div>
                        </div>

                    )}
                </div>

                <form className="buyer-form" onSubmit={buttonPayment}>
                    <div className="col-1" id="buyer-name">
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="name" onChange={event => setBuyerName(event.target.value)} placeholder="Nombre" required />
                    </div>

                    <div className="col-2" id="buyer-surname">
                        <label htmlFor="surname">Apellido: </label>
                        <input type="text" name="surname" onChange={event => setBuyerSurname(event.target.value)} placeholder="Apellido" required />
                    </div>

                    <div className="col-1" id="buyer-email">
                        <label htmlFor="email">Ingrese su mail: </label>
                        <input type="email" name="email" onChange={event => setBuyerEmail(event.target.value)} placeholder="tumail@servicio.com" required />
                    </div>

                    <div className="col-2" id="buyer-re-email">
                        <label htmlFor="email">Repite tu mail: </label>
                        <input type="email" name="email" placeholder="tumail@servicio.com" onChange={event => setEmail(event.target.value)} required />
                    </div>

                    <div className="col-1" id="buyer-country">
                        <label htmlFor="country">País </label>
                        <select name="country" onChange={event => setBuyerCountry(event.target.value)} required>
                        {country.map(e =>
                                            <option key={e.nombre} value={e.name}>{e.name}</option>
                                        )}
                        </select>
                    </div>


                    <div className="col-2" id="buyer-city">
                        <label htmlFor="city"> Provincia </label>
                        <input type="text" onChange={event => setBuyerCity(event.target.value)} required placeholder='Escribe tu provincia aquí'>
                        </input>
                    </div>


                    <div className="select-payment">
                        {(email.length > 1 && buyerEmail === email) ?
                            <input type="submit" className="btn btn-primary rounded-pill" value="Elegir método de pago" /> :
                            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Completa los campos requeridos</Tooltip>}>
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
                        <Payment totalPrice={totalPrice} createOrder={createOrder} hideContainer={hideContainer} />
                    </section>
                }
            </div>

            {(style === 'hide') &&
            <>
               <div className='order-confirm'>
                   <img className='checkout-img' src={check} alt="checked" />
                    <h3>¡Muchas gracias por tu compra, {buyerName}!</h3>
                    <p>Copie su numero de orden por si tiene inconvenientes con su pedido: {orderID}</p>
                    </div>
                    <div>
                    <Link to='/React/' className='btn rounded-pill btn-primary text-light'>Seguir comprando</Link>
                    </div>
                    </>
            }
        </>
    )

}

export default Checkout