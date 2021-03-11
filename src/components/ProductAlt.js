import React from 'react'
import {Link} from 'react-router-dom'

function ProductAlt({name,url,description,price,brand,id}) {
    return (
        <div className='product-alt'>
            <div className="product-alt-image-wrapper" style={{backgroundImage:`url(${url})`}}>
                <div className="product-alt-image-content">
                    <Link to={`/shop/${id}`} className='glass-link'><i className="fas fa-search"></i></Link>
                </div>
            </div>

            <div className="product-alt-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Manufacturer: {brand}</h5>
                <div className="product-alt-buttons">
                    <h5>${price}</h5>
                     <Link to={`/shop/${id}`}><button>View Item</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductAlt
