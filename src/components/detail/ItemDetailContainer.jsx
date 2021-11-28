import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stock } from '../Stock';
import { ItemDetail } from './ItemDetail.jsx';

const ItemDetailContainer = () => {

    const [individualProduct, setIndividualProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {
        const getProduct = new Promise((res, rej) => {
            setTimeout(() => {
                res(Stock.find(prod => prod.id == prodId))
            }, 2000)
        })
        getProduct.then((productFound) => {
            setIndividualProduct(productFound)
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [prodId])

    return (
        <>
            {loading ? <h1>Espere por favor...</h1> : <ItemDetail item={individualProduct} />}
        </>
    )
}

export default ItemDetailContainer