import React from 'react'

function CartItem({cartID,cart,setCart,name,price,selectedColor,url,brand,amount,freeShipping}) {

    const removeItem = () => {
        const newCart = cart.filter(item => item.cartID !== cartID)
        setCart([...newCart])
    }

    return (
        <div className='cart-item'>
            <div className="cart-item-content">
                <div className="cart-item-photo" style={{backgroundImage:`url(${url})`}}>
                    <div className={`cart-color cart-color-${selectedColor}`}></div>
                </div>
                <div className="cart-item-info">
                    <h5>{name}</h5>
                    <h6>Brand: {brand}</h6>
                    <h6>Amount: {amount}</h6>
                    <h6>Free Shipping: {freeShipping ? 'Yes' : 'No'}</h6>
                </div>
            </div>

            <div className="cart-item-right">
                <h4>${Math.round( price * amount *100) / 100}</h4>
                <button onClick={removeItem}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartItem
