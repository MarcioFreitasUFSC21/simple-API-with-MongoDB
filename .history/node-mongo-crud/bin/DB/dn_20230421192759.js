'use strict'
require('./dotenv').config();
const {MongoClient} = require('mongodb.client');
async function connect(){
    const client = new MongoClient();
    await client.connect();
    client.db(process.env)

}