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
	contactNo: {
		type: Number,
        required : true
	},
	openingTime: {
		type: Date,
	},
});

let Restrauant = mongoose.model('restraurant', RestrauantSchema);

module.exports = Restrauant;
