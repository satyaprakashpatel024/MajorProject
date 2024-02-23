const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin:process.env.CLIENT_URL,credential:true}));
const userRoute = require('./routes/userRoutes.js');
const restraurantRoute = require('./routes/restraurantRoutes.js');
const productRoute = require('./routes/productRoutes.js');
const menuRoute = require('./routes/menuRoutes.js');
const MONGODB_URL = "mongodb+srv://ZomatoUser:vWw6EJa8R4JpwRCq@zomatoclone.dood9jq.mongodb.net/zomato" // || "mongodb://localhost:27017/zomato";
mongoose.connect(MONGODB_URL)
.then((conn)=>{
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    return res.send('Hello World');
})

app.get('/ping',(req,res)=>{
    return res.send('<h1>pong</h1>');
})

app.use('/api',userRoute);
app.use('/api',restraurantRoute);
app.use('/api',productRoute);
app.use('/api',menuRoute);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}`);
});