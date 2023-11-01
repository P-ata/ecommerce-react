import { useState, useEffect } from "react";
import { GetProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)

    useEffect(() => {
        GetProductById('1')
        .then(Response => {
            setProducts(Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className="ItemDetailContainer" >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer