const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/signup.js');
const loginRoute = require('./routes/login.js');
const MONGODB_URL = process.env.MONGODB_URL //|| "mongodb://localhost:27017/zomato";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGODB_URL)
.then((conn)=>{
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/ping',(req,res)=>{
    res.send('<h1>pong</h1>');
})

app.use('/api',userRoute);
app.use('/api',loginRoute);

const PORT = 4001;
app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
});