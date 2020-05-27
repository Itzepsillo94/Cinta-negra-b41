const request = require('request');

const api_key = '928e430df20b3bc18749f5c9308b843f';
request.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${api_key}&artist=Cher&album=Believe&format=json`, 
(err,res,body)=>{

    return new Promise((resolve,reject)=>{
        res.statusCode === 200
            ?   resolve(JSON.parse(body))
            :   reject(`Error ${res.statusCode}`)
    })

    .then(res => console.log(res))          //Funcion flecha optimizada
    .catch((err) => {return console.log(err);})      //Funcion flecha sin optimizar 
    
})