import '../index.css'
import ProductInCart from './productInCart'
import PropTypes from 'prop-types';
import cartContext from './cartContext'
import { useContext } from 'react';

function Cart() {
    const { cart, setCart, total, sum} = useContext(cartContext)

    function getPriceNumber(price) {
        return price.slice(1, price.length) * 1 
    }

    function RemoveProductFromCart(id) {
        const elemetToBeRemoved = cart.find(element => element.id === id)
        const index = cart.indexOf(elemetToBeRemoved)
        cart.splice(index, 1)
        setCart([...cart])
      }

    return (
        <div className="cart">
            <div className="incart-products">
                {cart.map((product) => {
                    return <ProductInCart 
                    img={product.image} 
                    title={product.title} 
                    price={product.price} 
                    key={product.id} 
                    qnty={product.quantity} 
                    removeProductFromCart={() => RemoveProductFromCart(product.id)}
                    total={getPriceNumber(product.price) * product.quantity}
                    />
                })}
            </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="subtotal">
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>({total} items)</p>
                    <p>${sum}</p>
                </div>
                <button 
                onClick={ () => alert("Your order is on it's way if this was a real ecom store")}
                >Checkout</button>
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    removeProductFromCart: PropTypes.func,
};

export default Cart 