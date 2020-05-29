const mongoose = require('mongoose');

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

const MONGO_URI = 'mongodb://itzepsillo:12345i@cintanegra-shard-00-00-wygjh.mongodb.net:27017,cintanegra-shard-00-01-wygjh.mongodb.net:27017,cintanegra-shard-00-02-wygjh.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(MONGO_URI)
    .then(()=>console.log('Conexion Exitosa'))
    .catch(()=>console.log('Error en la URI de conexion'));

//POST /api/mascota -> cree una mascota en la bd

/*
    OBJETIVO: CREAR UN CRUD DE UNA COLECCION BASICA
*/

