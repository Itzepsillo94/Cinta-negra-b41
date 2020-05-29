const mongoose = require('mongoose');
const express = require('express');
const server = express();
const PORT = 4000;
//Cualquier puerto arriba de 3000

//Agregar la URL de conexion de Mongo Atrlas
//Sustituir usuario y contrasena
//mongoose devuelve una promesa

/*
Base de datos relacional --> usa tablas, se puede realacionar con otras tablas 
                        *Lectura mas lenta

Base de datos no relacional --> Guarda los datos de forma distinta
                        *Lectura mas rapida

***NOTA
las bases de datos Document Database, se manejan mediante objetos 
*/

//Conexion a Mongo Atlas
const MONGO_URI = 'mongodb://itzepsillo:12345i@cintanegra-shard-00-00-wygjh.mongodb.net:27017,cintanegra-shard-00-01-wygjh.mongodb.net:27017,cintanegra-shard-00-02-wygjh.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(MONGO_URI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,  
    })
    .then(()=>console.log('Successful Connection to  Atlas'))
    .catch(()=>console.log('Atlas conection error...'));

// Mongoose es un ODM -> Object Document Mapping
// Pets.create Pets.find //Pets es un MODELO
// Crear un modelo requiere de un ESQUEMA
// Esquema son las reglas que contiene el modelo

//Esquema
const petsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: String,
    sex: String,
    weight: Number,
    type: {
        type: String,
        required: true,
    },
    vaccine: [String],
});

//Modelo
const Pets = mongoose.model('Pets',petsSchema)

//Configuracion de middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

// Endpoints

server.get('/',(req,res)=> {
    res.json({message: 'Hello World'})
})

/*
    OBJETIVO: CREAR UN CRUD DE UNA COLECCION BASICA
*/
//CREATE
/*
200 - get
201 - create
204 - contenido no disponible

query  -> filtrar
params ->traer un objeto en particuar
*/

server.post('/api/pets',(req,res) => {
    //Intento crear un nuevo objeto pets
    const { body } = req;
    Pets.create(body)
        .then(pet => res.status(201).json({ pet }))
        .catch(err => res.status(400).json({ err }));

})

//READ (ALL)
server.get('/api/pets',(req,res) => {
    Pets.find()
        .then(pets => res.status(201).json( pets ))
        .catch(err => res.status(400).json( { err }));

})
/*
PUT  -> actualizacion completa
PATH -> actualizacion parcial
*/
//READ (ONE)
server.get('/api/pets/:id',(req,res) => {
    //Utilizo el ID para buscar en la BD
    const{ id } = req.params
    Pets.findById(id)
        .then(pet => res.status(200).json( pet ))
        .catch(err => res.status(404).json({ err }));
})

//UPDATE
server.patch('/api/pets/:id',(req,res) => {
    //Utilizo el ID para actualizar en la BD
    const { id } = req.params;
    const { body } = req;
    Pets.findByIdAndUpdate(id,body, {new: true})
        .then(pet => res.status(200).json( pet ))
        .catch(err => res.status(404).json({ err }));
})

//DELETE
server.delete('/api/pets/:id',(req,res) => {
    //Utilizo el ID para borrar en la BD
    const{ id } = req.params
    Pets.findByIdAndDelete(id)
        .then(pet => res.status(204).send())
        .catch(err => res.status(404).json({ err }));
})

server.listen(PORT,()=>console.log(`Listening on ${PORT}`));

