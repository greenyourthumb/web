//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
//const uri = 'mongodb://localhost:27017/gyt_db' 
//const uri = 'mongodb+srv://gyt_dba:IoPuWdNK4SWFiwGE@cluster0-ogvmg.gcp.mongodb.net/gyt_db?retryWrites=true&w=majority'
const uri = 'mongodb+srv://gyt_db:GYT123!@cluster0.bivge.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection