import React, { useEffect, useState } from 'react';
import Product from './Product';
import NewProductForm from './NewProductForm';
const axios = require('axios');

const ProductsList = () => {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4040/api/products')
        .then((res) => setProducts(res.data))
        .catch((err)=> console.log(err))

    },[])

    return (
        <React.Fragment>
        <h2>Products</h2>
        <article>
        { products.map(product => 
        <Product 
            key={product._id} 
            name={product.name} 
            price={product.price}
        />)}
        </article>
        <NewProductForm 
            setProducts ={setProducts}
        />
        </React.Fragment>
    )
}

export default ProductsList;
