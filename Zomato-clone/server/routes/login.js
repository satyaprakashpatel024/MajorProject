const express = require('express');
const router = express.Router();
const User = require('../models/user');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
	const userInfo = req.body;
    // console.log(userInfo); 
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
			msg: 'login ho gyaa',
		});
	}
});

module.exports = router;
