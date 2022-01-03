import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import './DetailStyle.css';
import ItemCount from '../context/ItemCount';
import { useCartContext } from '../context/CartContext';
import swal from '@sweetalert/with-react';

const CartButton = () => {
    return (
        <Link to="/React/cart">
            <button className='btn btn-primary'>Carrito</button>
        </Link>
    )
}

export const ItemDetail = ({ item }) => {
    const { cartList, setCount, count, addItem } = useCartContext()
    const [button, setButton] = useState('countButton')

    const onAdd = (() => {
        addItem({ item: item.name, stock: count, img: item.img, price: item.price, size: item.size })
        setButton('CartButton')
        setCount(1)
        swal(" ",`¡Agregaste unas ${item.name} al carrito!`, "success");
    })
    
    console.log(cartList)

        return (
            <div className="row mt-5 mx-5 center">
                <div className="col-12 col-lg-6">
                    <img className="w-25 img-fluid product-img" src={item.img} alt={item.name} />
                </div>
                <div className="col-12 product-detail col-lg-6">
                    <h3 className="text-uppercase fw-bold">{item.name}</h3>
                    <p className="text-uppercase">{'Talle: ' + item.size}</p>
                    <p className="fw-bold">{'$' + item.price}</p>
                    {   button === 'countButton' ?
                    <div className="center d-flex"><ItemCount onAdd={onAdd} stock={item.stock} id={item.id} /></div>
                    :
                    <CartButton />
                }
                </div>
            </div>
        )
    }