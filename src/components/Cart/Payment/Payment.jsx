import { useState } from "react"
import { Accordion, Form, Button } from "react-bootstrap"
import { useCartContext } from "../../context/CartContext";

const Payment = ({ createOrder, hideContainer }) => {

    const {clearCart, cartList } = useCartContext();

    const totalPrice = cartList.map(prod => (prod.stock * prod.price)).reduce((acc, el) => acc + el, 0);

    const [checked, setChecked] = useState(false)

    const checkout = () => {
        createOrder()
        clearCart()
        hideContainer()
    }

    return (
        <Form className="form-payment" onChange={() => setChecked(true)}>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header >
                        <label htmlFor="CreditCard" className="label-card">Tarjeta de crédito <i className="fas fa-credit-card" /></label>
                        <input type="radio" name="payment" value="CreditCard" />
                    </Accordion.Header>
                    <Accordion.Body>

                        <div className="card-details">
                            <div className="card-name">
                                <label htmlFor="name">Nombre del titular</label>
                                <input className="text-center" type="text" name="name" id="name" />
                            </div>
                            <div className="card-number">
                                <label htmlFor="number">Número de la tarjeta</label>
                                <input className="text-center" type="number" name="number" id="number" maxLength="16" />
                            </div>
                            <div className="expiration">
                                <label htmlFor="expiration">Mes y año de expiración</label>
                                <input className="text-center" type="text" name="expiration" id="expiration" />
                            </div>
                            <div className="CVV">
                                <label htmlFor="cvv">CVV</label>
                                <input className="text-center" type="text" name="cvv" id="cvv" maxLength="3" />
                            </div>
                            AR$ {totalPrice * 1.22} será el precio con cargos incluidos + envío

                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <label htmlFor="cash" className="label-icon">Efectivo (10% de descuento) <i className="fas fa-money-bill" /></label>
                        <input type="radio" name="payment" value="cash" />
                    </Accordion.Header>
                    <Accordion.Body>
                     AR$ {totalPrice * 0.90} será el precio si lo pagas en efectivo en nuestro local
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {checked ? <Button size="sm" variant="primary" className="btn-finish" onClick={checkout}>Finalizar compra</Button> :
                <Button size="sm" variant="primary" className="btn-finish" disabled>Finalizar compra</Button>
            }
        </Form>
    )
}

export default Payment