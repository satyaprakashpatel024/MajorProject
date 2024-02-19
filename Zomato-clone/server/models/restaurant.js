const mongoose = require('mongoose');
let RestrauantSchema = new mongoose.Schema({
	name: {
		type: String,
        required : true
	},
	address: {
		type: String,
        required : true
	},
	description: {
		type: String,
	},
	image: {
		type: String,
        required : true
	},
	contact_no: {
		type: String,
        required : true
	},
	opening_time: {
		type: Date,
	},
});

let Restrauant = mongoose.model('product', RestrauantSchema);

module.exports = Restrauant;
