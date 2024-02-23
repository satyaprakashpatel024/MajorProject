const express = require('express');
const router = express.Router();

const Menu = require('../models/menu.js');

router.post('/menu', async (req, res) => {
	try {
		const data = new Menu(req.body);
		if (!data) {
			return res.status(400).json({
				message: 'failed to add menu',
			});
		} else {
			await data.save();
			return res.status(201).send(data);
		}
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		});
	}
});

router.patch('/menu/:id', async (req, res) => {
	try {
		const data = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!data) {
			return res.status(400).json({
				message: 'failed to update menu',
			});
		} else {
			await data.save();
			return res.status(200).send(data);
		}
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		});
	}
});

router.get('/menu', async (req, res) => {
	try {
		const data = await Menu.find();
		if (!data) {
			return res.status(400).json({
				message: 'failed to get menu',
			});
		} else {
			return res.status(200).send(data);
		}
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		});
	}
});

router.delete('/menu/:id', async (req, res) => {
	try {
		const data = await Menu.findByIdAndDelete(req.params.id, { new: true });
		if (!data) {
			return res.status(400).json({
				message: 'failed to delete menu',
			});
		} else {
			return res.status(200).send({
				data,
				message: 'deleted successfully',
			});
		}
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		});
	}
});

module.exports = router;
