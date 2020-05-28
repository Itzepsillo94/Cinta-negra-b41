/*
Endpoint es una vista del servidor
Framework   -> modulos, codigo prehecho, ocupar ciertas herramientas para ejecutar una accion
*/
const axios = require('axios');
const express = require('express')
const server = express()
const PORT = 3000

//Para utilizar middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }))

//Request -> lo que viene por parte del cliente
//Res     -> respondemos al cliente

server.get('/', (req, res) => res.status(201).send('Hola Mundo!'))

server.get('/perfil', (req, res) => res.json({
    first_name: "Kevin",
    last_name: "Itzep",     
}));


server.post('/perfil', (req, res) => {
    // request -> petición del cliente
    // response -> respuesta hacia el cliente
    const { body } = req;
    console.log(body.nombre);
    console.log(body.edad);
    // Aqui voy a la base de datos
    // Y le pido que guarde el usuario con nombre y edad
    // provistos por el cliente
    //console.log(req);
    res.send("Hiciste un post");     
});

/*
1.- Agrega un endpoint '/api/' que responda a 
        una petición de tipo GET con un código de estado 200 
        y el siguiente json: 
                    {'mensaje':'hola mundo'}
*/

server.get('/api/',(req,res)=> res.status(200).json(
    {'mensaje':'hola mundo'}

))

/*
2.- Agrega un endpoint '/api/suma' que responda a una 
        petición de tipo GET con la suma de dos números que 
        reciba mediante las querys num1 y num2. El servidor
        debe responder con un código de estado 200 y un json 
        como el siguiente:
                        {'resultado': 7}
*/

/*
http://localhost:3000/api/suma?num1=7&num2=4
*/
//querys para filtros
server.get('/api/suma', (req,res)=> {
    console.log(req.query);
    const {num1,num2} = req.query;
    //const num1 = req.query.num1;
    //const num2 = req.query.num2;
    res.status(200).json({respuesta: (parseInt(num1)+parseInt(num2))});  
})

/*
3.- Agrega un endpoint '/api/usuario/' que responda a
        una petición de tipo GET con el nombre que sea 
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {'usuario': 'Edwin'}
*/

//params si se define en el url
server.get('/api/usuario/:usuario', (req,res) => {
    console.log(req.params);
    //res.json({usuario: 'Kevin'});
    res.json({usuario: req.params.usuario});  
})

server.get('/api/swapi/:id',(req,res)=>{
    const { id } = req.params;
    const swapi = `https://swapi.dev/api/people/${id}/`;
    axios.get(swapi)
        .then(data => {
            //console.log(data.data);  
            const personaje = data.data;
            res.json({ personaje });
        })
        .catch(err => {
            //console.log(err)
            res.status(404).json({err})
        });
    
})


server.listen(PORT, () => console.log(`Escuchando ${PORT}`));