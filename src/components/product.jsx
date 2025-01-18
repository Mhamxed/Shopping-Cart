import '../index.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import cartContext from './cartContext'
import { useContext } from 'react';

function Product({id, img, title, price}) {
    const [quantity, setQuantity] = useState(1)

    const { cart, setCart} = useContext(cartContext)
    const product = {
        id: id, 
        image: img, 
        title: title, 
        price: price, 
        quantity: quantity
    }

    function increment() {
        setQuantity(quantity + 1)
    }

    function decrement() {
        if (quantity > 0) setQuantity(quantity - 1)
    }

    function AddToCart(product) {
        setCart([...cart, product])
    }
    return (
        <div className="product">
            <img src={img} />
            <h4>{ title }</h4>
            <h3> { price } </h3>
            <div className="quantity">
                <button 
                className='decrement' 
                onClick={ () => decrement()}>-</button>
                <div className='quatity-count'>{ quantity }</div>
                <button 
                className='increment' 
                onClick={ () => increment()}>+</button>
            </div>
            <button 
            onClick={() => AddToCart(product)} 
            className='add-to-cart'>Add To Cart</button>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
};

export default Product