import React, { useState } from 'react'
const axios = require('axios');

const NewProduct = (props) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4040/api/products',{name,price})
        .then(()=>axios.get('http://localhost:4040/api/products'))
        .then((res) => props.setProducts(res.data))
        .cath(err => console.log(err));
    }

    return (
        <React.Fragment>
            <article>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div style={{
                            backgroundColor: "#5672f0",
                            padding: "1em",
                            width: "300px",
                        }}>
                            <div className="card mt-4 text-center">
                                <div className="card">
                                    <div className="card-header">
                                        Create Document
                                    </div>
                                    <div className="card-body">
                                        <form 
                                            onSubmit={handleSubmit}
                                            style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}>
                                            <div className="form-group">
                                                <input onChange={(e)=> setName(e.target.value)}  style={{ marginBottom: "1em"}} placeholder="Name" type="text" value={name} />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={(e)=> setPrice(e.target.value)} style={{ marginBottom: "1em"}} placeholder="Price" type="number" value={price} />
                                            </div>
                                            <button  type="submit" class="btn btn-primary btn-block" >
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
