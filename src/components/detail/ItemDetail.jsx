import React from 'react';
import ItemCount from '../ItemCount';
import './DetailStyle.css';

export const ItemDetail = ({ item }) => {
    return (
        <div className="row mt-5 mx-5 center">
            <div className="col-12 col-lg-6">
                <img className="w-25 img-fluid product-img" src={item.img} alt={item.name} />
            </div>
            <div className="col-12 product-detail col-lg-6">
                <h3 className="text-uppercase fw-bold">{item.name}</h3>
                <p className="text-uppercase">{'Talle: ' + item.size}</p>
                <p className="fw-bold">{'$' + item.price}</p>
                <div  style={{ display: 'flex', justifyContent: 'center' }}><ItemCount stock={item.stock} id={item.id} /></div>
            </div>
        </div>
    )
}