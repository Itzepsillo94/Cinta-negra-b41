const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    1) Crear una base de datos para un supermercado que pueda 
    almacenar lo siguiente:
    - Artículo
        -Nombre (string)
        -Precio (number)
        -Existencias (number)
    - Ticket
        -subtotal (number)
        -IVA (number)
        -total (number)
        -articulos (articulo)

*/

const ticketsSchema = new Schema({
    subtotal:{
        type: Number,
        default: 0
    },
    tax: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    }],
})

const Ticket = mongoose.model('Ticket',ticketsSchema);

module.exports = Ticket;