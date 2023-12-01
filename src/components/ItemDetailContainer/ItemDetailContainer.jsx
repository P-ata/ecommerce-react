import { useState, useEffect } from "react";
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const [loading, setLoading ] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [itemId])
        

    useEffect(() => {
        getProductById(itemId)
        .then(Response => {
            setProducts(Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    if(loading) {
        return <h1>Cargando Producto</h1>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return(
        <div className="ItemDetailContainer" >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer