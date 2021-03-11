import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {data} from './data'

// Components

import Home from './components/Home'
import Shop from './components/Shop'
import SingleProductPage from './components/SingleProductPage'

function App() {

    const [allProducts,setAllProducts] = useState(data)
    const [filteredProducts,setFilteredProducts] = useState(data)
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cart,setCart] = useState([])

    return (
        <Router>
           <Switch>

                <Route path='/shop/:id' children={<SingleProductPage 
                    cart={cart} 
                    allProducts={allProducts}
                    setCart={setCart}
                    isCartOpen={isCartOpen}
                    setIsCartOpen={setIsCartOpen}
                    setFilteredProducts={setFilteredProducts}/>}>
                </Route>

                <Route path='/shop'>
                    <Shop 
                        filteredProducts={filteredProducts}
                        setFilteredProducts={setFilteredProducts}
                        cart={cart} setCart={setCart}
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}/>
                </Route>

               <Route path='/'>
                    <Home 
                        cart={cart}
                        setCart={setCart}
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}/>
               </Route>
           </Switch>
        </Router>
    )
}

export default App
