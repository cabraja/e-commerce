import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../assets/shop.css'
import '../assets/shop-mobile.css'

import ShopFilters from './ShopFilters'
import Product from './Product'
import ProductAlt from './ProductAlt'
import Cart from './Cart'

function Shop({allProducts,setAllProducts,cart,setCart,filteredProducts,setFilteredProducts,isCartOpen,setIsCartOpen}) {
    const [isGrid,setIsGrid] = useState(false)
    
    const handleSelectChange = (event) => {
        if(event.target.value === 'lowest'){
            const newFilteredProducts = filteredProducts.sort((a,b) => a.price - b.price)
            setFilteredProducts([...newFilteredProducts])
        }else{
            const newArr = filteredProducts.sort((a,b) => b.price - a.price)
            setFilteredProducts([...newArr])
        }
        
    }

    useEffect(() => {
        const newFilteredProducts = filteredProducts.sort((a,b) => a.price - b.price)
        setFilteredProducts(newFilteredProducts)
    },[])

    return (
        <>
            <header>
                <div id='logo'>
                    <h1>Moderna</h1>
                    <h3>State Of The Art Furniture</h3>
                </div>

                <nav>
                    <Link to='/' onClick={() => setFilteredProducts(allProducts)}><i class="fas fa-home"></i></Link>
                    <Link to='/shop' onClick={() => setFilteredProducts(allProducts)}><i class="fas fa-store"></i></Link>
                    <div id="cart"  onClick={() => setIsCartOpen(true)}>
                        <i class="fas fa-shopping-cart"></i>
                        <div id="cart-num">{cart.length}</div>
                    </div>
                    
                </nav>
            </header>

            <div id="shop-banner-wrapper">
                <div id="shop-banner">
                    <h2>Moderna Online Shop</h2>
                </div>
            </div>

            <div id="shop">

                <div id="shop-main">

                    <ShopFilters allProduct={allProducts} setAllProducts={setAllProducts} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />

                    <div id="shop-products">
                        <div id="shop-display">
                            <div id="display-type">
                                <button id='grid-button' className={isGrid ? 'display-active' : null} onClick={() => setIsGrid(true)}><i class="fas fa-th-large"></i></button>
                                <button className={isGrid === false ? 'display-active' : null} onClick={() => setIsGrid(false)}><i class="fas fa-bars"></i></button>
                            </div>

                            <h5 className='products-found'>{filteredProducts.length} Products Found</h5>

                            <div id="shop-display-line"></div>

                            <div id="sort">
                                <h5>Sort by:</h5>
                                <select onChange={handleSelectChange} name="sort-select" id="sort-select">
                                    <option value="any">Any</option>
                                    <option value="lowest">Price (Lowest)</option>
                                    <option value="highest">Price (Highest)</option>
                                </select>
                        </div>
                     </div>

                        <div id="shop-content">
                            {   
                                
                                isGrid ? 
                                filteredProducts.map(item => <Product key={item.id} {...item} />)
                                :
                                filteredProducts.map(item => <ProductAlt key={item.id} {...item} />)
                            
                            }   

                            {
                                filteredProducts.length === 0 ? <p id='nothing'>Nothing to show :(</p> : null
                            }
                        </div>
                    </div>

                </div>
            </div>

            {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} cart={cart} setCart={setCart} />}
        </>
    )
}

export default Shop
