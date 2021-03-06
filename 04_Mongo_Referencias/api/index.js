const express = require('express');
const server = express();
const PORT = 4040;
const cors = require('cors')


server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));
server.use(cors());

server.get('/', (req,res)=> {
    res.json({message: 'Hello World'});
});

const ProductRoutes = require('../routes/ProductRoutes');
server.use(ProductRoutes);

const TicketRoutes = require('../routes/TicketRoutes');
server.use(TicketRoutes);



server.listen(PORT, () => console.log(`Listening on ${PORT}`))


/*
//Product
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
const Product = require('../models/Product');

//CREATE
server.post('/api/products',(req,res)=>{
    const { body } = req;
    const newProduct = new Product(body);
    
    newProduct.save()
        .then(dbRes => res.status(201).json(dbRes))
        .catch(err => res.status(404).json(err))
})

//READ (ALL)
server.get('/api/products',(req,res)=>{
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(404).json(err));
    
})
//READ (ONE)
server.get('/api/products/:id',(req,res)=>{
    Product.findById(req.params.id)
        .then(products => {
            if(!products) res.status(404).json({message: 'product not found'})
            res.status(200).json(products)
        })
        .catch(err => res.status(404).json(err));
})

//UPDATE
server.patch('/api/products/:id',(req,res)=>{
    Product.findById(req.params.id,req.body, {new : true})
        .then(updateProduct => res.status(200).json(updateProduct))
        .catch(err => res.status(404).json(err));
})

//DELETE
server.delete('/api/products/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id)
        .then(updateProduct => res.status(200).json(updateProduct))
        .catch(err => res.status(404).json(err));
})
*/
/*
//Ticket
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

const Ticket = require('../models/Ticket');

//CREATE
server.post('/api/tickets',(req,res)=>{
    const { body } = req;
    const newTicket = new Ticket(body);
    
    newTicket.save()
        .then(dbRes => res.status(201).json(dbRes))
        .catch(err => res.status(404).json(err))
})

//    Ticket.find().populate('products')
//READ (ALL)
server.get('/api/tickets',(req,res)=>{
    Ticket.find().populate('products')
        .then(tickets => res.status(200).json(tickets))
        .catch(err => res.status(404).json(err));
    
})
//READ (ONE)
server.get('/api/tickets/:id',(req,res)=>{
    Ticket.findById(req.params.id)
        .populate('products')
        .then(tickets => {
            if(!tickets) res.status(404).json({message: 'product not found'})
            res.status(200).json(tickets)
        })
        .catch(err => res.status(404).json(err));
})

//UPDATE
server.patch('/api/tickets/:id',(req,res)=>{
    Ticket.findById(req.params.id,req.body, {new : true})
        .then(updateTicket => res.status(200).json(updateTicket))
        .catch(err => res.status(404).json(err));
})

//DELETE
server.delete('/api/tickets/:id',(req,res)=>{
    Ticket.findByIdAndDelete(req.params.id)
        .then(updateTicket => res.status(200).json(updateTicket))
        .catch(err => res.status(404).json(err));
})
*/

