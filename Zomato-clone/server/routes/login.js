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
		res.status(401).send({ msg: 'signUp kiya tune ???' });
        return ;
	}
	const validPassword = await bcrypt.compare(userInfo.passWord,searchData.passWord)
    .catch((err) => {
		console.log(err, 'err while matching passoword');
		res.status(500).send({ msg: 'Internal server err' });
		return ;
	});
	if (!validPassword) {
		res.send({ msg: 'Invalid password' });
		return ;
	} else {
		let data = JSON.stringify(searchData.email);
		let token = jwt.sign(data, 'EFBWUYFBUWBFUWVYFBUWEF');
		res.send({
			token,
			msg: 'login ho gyaa',
		});
		return ;
	}
});

module.exports = router;
