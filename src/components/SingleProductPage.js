import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import '../assets/singleproduct.css'
import Cart from './Cart'
import Modal from './Modal'


function SingleProductPage({cart,setCart,allProducts,isCartOpen,setIsCartOpen,setFilteredProducts}) {

    const [item,setItem] = useState({colors:[]})
    const [count,setCount] = useState(1)
    const [selectedColor,setSelectedColor] = useState('none')
    const [showWarning,setShowWarning] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const newItem = allProducts.find(item => item.id === parseInt(id))
        setItem(newItem)
    }, [id])

    const addToCart = () => {
        if(selectedColor === 'none'){
            setShowWarning(true)
        }else{
            const cartID = new Date().getTime().toString()
            const newItem = {...item,amount:count,cartID, selectedColor}
            setCart([...cart,newItem])
            setShowWarning(false)
            setShowModal(true)
        }
    }

    const setColor = (event,color) => {
        const buttons = document.getElementsByClassName('color-button-content')
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('active-color')
        }
        setSelectedColor(color)
        
        const but = document.getElementById(`${color}`)
        but.childNodes[0].classList.add('active-color')
        
    }
    return (    
        <>
            
            {showModal && <Modal setShowModal={setShowModal} /> }


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

            <div className="single-product">

                <Link to='/shop' onClick={() => setFilteredProducts(allProducts)}><button className='back-to-products'>Back To Products</button></Link>

                <div className="single-product-left"  style={{backgroundImage:`url(${item.url})`}}></div>

                <div className="single-product-right">
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                    <p>{item.description}</p>
                    <h5><span>Avalaible:</span> {item.inStock ? 'In Stock': 'Unavailable'}</h5>
                    <h5><span>Code:</span> {item.sku}</h5>
                    <h5><span>Brand:</span> {item.brand}</h5>
                    <div className="line-alt"></div>

                    <form >
                        <div className="form-colors">
                            {showWarning ? <h6 className='color-warning'>Please select a color</h6> : null}
                            <h5>Select a color:</h5>
                            {
                                item.colors.map(color => {return <button onClick={(event) => setColor(event,color)} className='color-button' type='button' id={color}>
                                    <div className="color-button-content">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    </button>})
                            }
                        </div>

                        <div className="form-counter">
                            <button type='button' onClick={() => count > 1 ? setCount(count-1): null}><i class="fas fa-minus"></i></button>
                            <h6>{count}</h6>
                            <button  type='button' onClick={() => setCount(count + 1)}><i className="fas fa-plus"></i></button>
                        </div>

                        <button type='button' onClick={addToCart} className='add-to-cart'>Add To Cart</button>
                    </form>
                </div>
            </div>

            {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} cart={cart} setCart={setCart} />}
        </>
    )
}

export default SingleProductPage
