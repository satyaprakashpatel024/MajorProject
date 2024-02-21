const express = require('express');
const router = express.Router();
const User = require('../models/user');
let bcrypt = require('bcrypt');

router.post('/users', async (req, res) => {
	const user = req.body;
	const Email = await User.findOne({ email: user.email });
	if (Email) {
		return res.send('user is already register in  our dataBase');
	} else {
		user.passWord = await bcrypt.hash(req.body.passWord, 10);
		const dbUser = new User({
			name: user.name,
			email: user.email.toLowerCase(),
			passWord: user.passWord,
			role: user.role,
		});
		await dbUser.save();
		return res.send({ 
			messge: 'user created successfully',
			success : true
		});
	}
});

module.exports = router;
