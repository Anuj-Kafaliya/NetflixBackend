require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('./config/mongoDB');

app.get('/',(req,res) => {
    res.send('Hello');
})
app.listen(process.env.PORT,()=>{
    console.log('listening');
})