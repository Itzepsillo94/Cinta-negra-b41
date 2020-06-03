import React, { useState } from 'react'
const axios = require('axios');

const NewProduct = () => {

    const [newName, setName] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const handName = (e) =>{
        setName(e.target.value)
        console.log(e.target.value);
    }

    const handPrice = (e) =>{
        setNewPrice(e.target.value)
        console.log(e.target.value);
    }

    const createProduct = () => {
        const body ={
            name: newName,
            price: newPrice
        }
        
        axios.post('http://localhost:4040/api/products',body)
        .then(()=>console.log("Listo"))
        .cath(err => console.log(err))
        
    }

    return (
        <div>
            <form>
                <label>
                    Name:
                <input onChange={handName} type="text" name="name" />
                </label>
                <label>
                    Price:
                <input onChange={handPrice} type="number" name="name" />
                </label>
                <input onClick={()=> createProduct()} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewProduct
