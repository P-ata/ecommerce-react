import { CartContext } from '../../Context/CartContext'
import cart from './assets/cart.png'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link className='i' to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='i' src={cart} alt='cart-widget'/>
        </Link>
        
    )
}

export default CartWidget