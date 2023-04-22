'use strict'
require('./dotenv').config();

//******************************************************* */
const {MongoClient} = require('mongodb.client');

//******************************************************* */
let singleton;
async function connect(){
    const client = new MongoClient();
    await client.connect();
   singleton =  client.db(process.env.MONGO_DATABSE);

}