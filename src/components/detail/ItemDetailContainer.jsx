import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail.jsx';
import db from "../../firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";

const ItemDetailContainer = () => {

    const [individualProduct, setIndividualProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { prodId } = useParams();

    useEffect(() => {

        const getProduct = async () => {

            if (prodId) {
                const docRef = doc(db, "stock", prodId);
                const docSnap = await getDoc(docRef);
                setIndividualProduct({id: docSnap.id, ...docSnap.data()})
                setLoading(false)
            }

        }

        getProduct()


    }, [prodId])

    return (
        <ItemDetail loading={loading} item={individualProduct} />
    )
}

export default ItemDetailContainer