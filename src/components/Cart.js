import React from 'react'
import '../assets/cart.css'
import CartItem from './CartItem'

function Cart({cart,setCart,setIsCartOpen}) {
    return (
        <div id='cart-wrapper'>
            <div id="cart-content">
                <h2>My Cart</h2>
                <button id='close-cart' onClick={() =>setIsCartOpen(false)}><i class="fas fa-times"></i></button>

                <div id="cart-items">
                    {
                        cart.map(item => <CartItem cart={cart} {...item} setCart={setCart} />)
                    }

                    {cart.length === 0 ? <h4 id='cart-no-content'>So empty in here...</h4> : null }
                </div>

                <div id="cart-buttons">
                <button id='empty-cart' onClick={() => setCart([])}>Empty Cart</button>
                <div className="cart-buttons-total">
                    <h5>Total: ${Math.round(cart.reduce((total,b) => total + (b.price * b.amount),0) * 100) / 100 }</h5>
                    <button>Checkout</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cart
