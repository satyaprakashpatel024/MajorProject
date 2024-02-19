const mongoose = require('mongoose');
let ProductSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
	image: {
		type: String,
	},
});

let Product = mongoose.model('product', ProductSchema);

module.exports = Product;
