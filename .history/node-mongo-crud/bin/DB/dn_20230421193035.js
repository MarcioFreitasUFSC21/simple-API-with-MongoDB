'use strict'
require('./dotenv').config();

//******************************************************* */
const {MongoClient} = require('mongodb.client');

//******************************************************* */
let s
async function connect(){
    const client = new MongoClient();
    await client.connect();
    client.db(process.env.MONGO_DATABSE);

}