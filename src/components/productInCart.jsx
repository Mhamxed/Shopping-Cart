import '../index.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ProductInCart({ img, title, price, total, qnty, removeProductFromCart}) {
    const [quantity, setQuantity] = useState(qnty)

    function increment() {
        setQuantity(quantity + 1)
    }

    function decrement() {
        if (quantity > 0) setQuantity(quantity - 1)
    }
    return (
        <div className="product-in-cart">
            <img src={img} />
            <div className='title-quatity'>
                <p><strong>{ title }</strong></p>
                <p><strong>{price}</strong></p>
            </div>
            <div className="quantity">
                <button 
                className='decrement' 
                onClick={() => decrement()}>-</button>
                <div className='quatity-count'> { quantity } </div>
                <button 
                className='increment' 
                onClick={() => increment()}>+</button>
            </div>
            <button
            onClick={() => removeProductFromCart()}
            className='remove'>
                <FontAwesomeIcon 
                icon={faTrash} 
                />
                </button>
            <p>${ total }</p>
        </div>
    )
}

ProductInCart.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
    total: PropTypes.number,
    removeProductFromCart: PropTypes.func,
    qnty: PropTypes.number,
};


export default ProductInCart