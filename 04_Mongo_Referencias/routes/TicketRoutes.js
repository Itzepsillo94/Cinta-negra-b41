const express = require('express');
const router = express.Router();

//Ticket
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

const Ticket = require('../models/Ticket');

//CREATE
router.post('/api/tickets',(req,res)=>{
    const { body } = req;
    const newTicket = new Ticket(body);
    
    newTicket.save()
        .then(dbRes => res.status(201).json(dbRes))
        .catch(err => res.status(404).json(err))
})

//    Ticket.find().populate('products')
//READ (ALL)
router.get('/api/tickets',(req,res)=>{
    Ticket.find().populate('products')
        .then(tickets => res.status(200).json(tickets))
        .catch(err => res.status(404).json(err));
    
})
//READ (ONE)
router.get('/api/tickets/:id',(req,res)=>{
    Ticket.findById(req.params.id)
        .populate('products')
        .then(tickets => {
            if(!tickets) res.status(404).json({message: 'product not found'})
            res.status(200).json(tickets)
        })
        .catch(err => res.status(404).json(err));
})

//UPDATE
router.patch('/api/tickets/:id',(req,res)=>{
    Ticket.findById(req.params.id,req.body, {new : true})
        .then(updateTicket => res.status(200).json(updateTicket))
        .catch(err => res.status(404).json(err));
})

//DELETE
router.delete('/api/tickets/:id',(req,res)=>{
    Ticket.findByIdAndDelete(req.params.id)
        .then(updateTicket => res.status(200).json(updateTicket))
        .catch(err => res.status(404).json(err));
})
