import React, { useState } from 'react'
const axios = require('axios');

const NewProduct = () => {

    const [newName, setName] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const handName = (e) => {
        setName(e.target.value)
        console.log(e.target.value);
    }

    const handPrice = (e) => {
        setNewPrice(e.target.value)
        console.log(e.target.value);
    }

    const createProduct = () => {
        const body = {
            name: newName,
            price: newPrice
        }

        axios.post('http://localhost:4040/api/products', body)
            .then(() => console.log("Listo"))
            .cath(err => console.log(err))

    }

    return (
        <React.Fragment>
            <article>
            <div className="row">
            <div class="col-md-4 mx-auto">
                <div style={{
                    backgroundColor: "#5672f0",
                    padding: "1em",
                    width: "300px",
                }}>
                    <div class="card mt-4 text-center">
                    <div class="card">
                        <div class="card-header">
                            Create Document
                        </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input onChange={handName} placeholder="Name" type="text" name="name" />
                            </div>
                            <div class="form-group">
                                <input onChange={handPrice} placeholder="Price" type="number" name="name" />
                            </div>
                            <button onClick={() => createProduct()} value="Submit" type="submit" class="btn btn-primary btn-block" >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </article>
        </React.Fragment>
    )
}

export default NewProduct
