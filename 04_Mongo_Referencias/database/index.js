const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://itzepsillo:12345i@cintanegra-shard-00-00-wygjh.mongodb.net:27017,cintanegra-shard-00-01-wygjh.mongodb.net:27017,cintanegra-shard-00-02-wygjh.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(()=> console.log("Database Connected"))
    .catch(()=> console.log("Error connecting to database.."));