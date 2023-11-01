import { useState } from 'react'

const ItemCount =({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='itemcount-div'>
            <div className='itemcount-controls'>
                <button className='itemcount-button' onClick={decrement}>-</button>
                <h4 className='itemcount-number'>{quantity}</h4>
                <button className='itemcount-button' onClick={increment}>+</button>
            </div>
            <div className='itemcount-cart'>
                <button className='itemcount-button' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount