const request = require('request');

request.get('https://ghibliapi.herokuapp.com/films', (err,res,body)=>{

    return new Promise((resolve,reject)=>{
        res.statusCode === 200
            ?   resolve(JSON.parse(body))
            :   reject(`Error ${res.statusCode}`)
    })

    .then(res => console.log(res))          //Funcion flecha optimizada
    .catch((err) => {return console.log(err);})      //Funcion flecha sin optimizar 
    
})