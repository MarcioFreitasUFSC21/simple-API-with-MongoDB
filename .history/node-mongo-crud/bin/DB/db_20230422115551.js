'use strict'
require('./dotenv').config();

//******************************************************* */
const {MongoClient} = require('mongodb.client');

//******************************************************* */
let singleton;
async function connect(){
    if(singleton){
        return singleton;
    }

    const client = new MongoClient();
    await client.connect();
   singleton =  client.db(process.env.MONGO_DATABSE);
    return singleton;
}
async function insert(customer){

    
}