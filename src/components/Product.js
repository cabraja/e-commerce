import React from 'react'
import {Link} from 'react-router-dom'

function Product({name,url,price,id}) {
    return (
        <div className='product'>
            <div className="product-image-wrapper" style={{backgroundImage:`url(${url})`}}>
                <div className="product-image-content">
                    <Link to={`/shop/${id}`} className='glass-link'><i className="fas fa-search"></i></Link>
                </div>
            </div>
            <div className="product-short-info">
                <h2>{name}</h2>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Product
