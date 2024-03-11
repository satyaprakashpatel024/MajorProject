let mongoose = require('mongoose');

let paymentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

let Payment = mongoose.model('payment', paymentSchema);
module .exports = Payment;