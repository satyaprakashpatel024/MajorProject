const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const emailValidator = require('email-validator');

router.post('/signup', async (req, res) => {
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

router.post('/login', async (req, res) => {
	const userInfo = req.body;
    let searchData;
	try {
		searchData = await User.findOne({ email: userInfo.email });
	} catch (err) {
		console.log(err, 'err');
	}
	if (!searchData) {
		return res.status(401).send({ msg: 'signUp kiya tune ???' });
	}
	const validPassword = await bcrypt.compare(userInfo.passWord,searchData.passWord)
    .catch((err) => {
		return res.status(500).send({ msg: 'Internal server err' });
	});
	if (!validPassword) {
		return res.send({ msg: 'Invalid password' });
	} else {
		let data = JSON.stringify(searchData.email);
		let token = jwt.sign(data, 'EFBWUYFBUWBFUWVYFBUWEF');
		return res.send({
			token,
			data: searchData
		});
	}
});

module.exports = router;
