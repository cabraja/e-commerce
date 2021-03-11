import React,{useState} from 'react'
import '../assets/shop.css'

function ShopFilters({allProducts,setAllProducts,filteredProducts,setFilteredProducts}) {

    const filterObject = {
            id:false,
            name: false,
            url: false,
            price: false,
            description: false,
            inStock: false,
            type: false,
            sku: false,
            brand: false,
            freeShipping: true,
            colors: false,
        } 


    const [initialProducts,setInitialProducts] = useState(filteredProducts)
    const [filter,setFilter] = useState(filterObject)
    const [filterPrice,setFilterPrice] = useState(500)
    const [showFilters,setShowFilters] = useState(false)
    
    const setProp = (event) => {
        const {name,value} = event.target
        if(value === 'all'){
            setFilter({...filter,[name]:false})
            console.log(filter);
        }else{
            setFilter({...filter,[name]:value})
        }

        if(name === 'type'){
            const buttons = document.getElementsByClassName('category-button')

           for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('active')
           }
           event.target.classList.add('active')
        }
        if(name === 'brand'){
            const buttons = document.getElementsByClassName('company-button')

           for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('active')
           }
           event.target.classList.add('active')
        }
    }

    const handleSubmit = (event) => {
        if(event.target.name !== 'price'){
            event.preventDefault()
        }
        const newArr = initialProducts.filter(item => {
            
            for(const prop in item){
                if(item[prop] === filter[prop] || filter[prop] === false) {
                }else{
                    return false
                }
            }
            return true
        })

        const finalArr = newArr.filter(item => item.price < filterPrice)

        setFilteredProducts([...finalArr])   
        
    }

    
    return (
        <div id='shop-filters' style={{left:`${showFilters ? '-180px' :' 0px'}`}}>

            <form onSubmit={handleSubmit}>

                <div id="show-filter-button-wrapper">
                    <button  onClick={() => setShowFilters(!showFilters)} id='show-filter-button'>FILTERS</button>
                </div>
                <div id="category">
                            <h5>Category</h5>
                            <button onClick={setProp} name='type' value='all' className='category-button active'>All</button>
                            <button name='type' value='Living Room' className='category-button' onClick={setProp}>Living Room</button>
                            <button name='type' value='Office' className='category-button' onClick={setProp}>Office</button>
                            <button name='type' value='Bedroom' className='category-button' onClick={setProp}>Bedroom</button>
                            <button name='type' value='Kitchen' className='category-button' onClick={setProp}>Kitchen</button>
                            <button name='type' value='Dining' className='category-button' onClick={setProp}>Dining</button>
                        </div>

                        <div id="company-filter">
                            <h5>Company</h5>
                            <button onClick={setProp} name='brand' value='all' className='company-button active'>All</button>
                            <button name='brand' value='Amalia'  className='company-button' onClick={setProp}>Amalia</button>
                            <button name='brand' value='Ikea' className='company-button' onClick={setProp}>Ikea</button>
                            <button name='brand' value='Ferretti' className='company-button' onClick={setProp}>Ferretti</button>
                            <button name='brand' value='Royal Furniture' className='company-button' onClick={setProp}>Royal</button>
                        </div>


                        <div id="price-filter">
                            <h5>Price</h5>
                            <h6>${filterPrice}</h6>
                            <input name='price' min='80' max='500' value={filterPrice} onChange={e => {setFilterPrice(e.target.value);handleSubmit(e)}} type="range"/>
                        </div>

                        <div id="shipping-filter">
                            <h6>Free Shipping</h6>
                            <input type="checkbox"/>
                        </div>
                        
                        
            </form>
        </div>
    )
}

export default ShopFilters
