import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { Stock } from '../../Stock'
const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const promise = new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(Stock)
            }, 2000);
        })
        promise.then((Stock) => {
            setProducts(Stock);
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        return () => {
            console.log('clean')
        }
    }, [])


    return (
        <>
            {loading ? <h1>Espere por favor...</h1> : <ItemList list={products} />}
        </>
    )
};
export default ItemListContainer
