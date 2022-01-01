import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from "../../../firebase/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { sizeId } = useParams();

    useEffect(() => {

        const itemsCollection = collection(db, "stock")
        const getProducts = async () => {


            if (sizeId) {

                const q = query((itemsCollection), where("size", "==", sizeId));
                const querySnapshot = await getDocs(query(q))
                setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)

            } else {

                const querySnapshot = await getDocs(itemsCollection)
                setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            }

        }

        getProducts()
    
    }, [sizeId]);

    return (
        <>
            <ItemList loading={loading} products={products} />
        </>
    )

}

export default ItemListContainer
