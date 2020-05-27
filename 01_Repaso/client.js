const request = require('request');


/*
    Callback -> es una funcion que se pasa como parametro, ademas no son asincronos por naturaleza

*/

//REQUEST
request.get('https://rickandmortyapi.com/api/character', (err,res,body)=>{

    return new Promise((resolve,reject)=>{
        res.statusCode === 200
            ?   resolve(JSON.parse(body).results)
            :   reject(`Error ${res.statusCode}`)
    })

    .then(res => console.log(res))          //Funcion flecha optimizada
    .catch((err) => {return console.log(err);})      //Funcion flecha sin optimizar 
    
})


/*
fetch('https://rickandmortyapi.com/api/character')
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/

/*
if(res.statusCode === 200){ 
            const characters = JSON.parse(body).results;
            //console.log(characters);
            characters.map(character => {
                console.log(character.name);
            })
            
           resolve(characters)
            
        }else{
            
            console.log("Error en la peticion", res.statusCode);
        }
*/