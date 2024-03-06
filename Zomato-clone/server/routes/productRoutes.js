const express = require('express');
const router = express.Router();
let Product = require('../models/products.js');
let Restrauant = require('../models/restraurant.js');
//  create api to add product in particular restraurant
router.post('/product', async (req, res) => {
	// try {
	// 	let product = new Product(req.body);
	// 	if(!product){
	// 		return res.status(400).json({
	// 			message: 'failed to add product'
	// 		});
	// 	}
	// 	await product.save();
	// 	return res.status(201).send(product);
	// } catch (err) {
	// 	return res.status(402).send({err});
	// }
	try {
		const {name,description,price,image,restroId} = req.body;
		if(!name||!description||!price||!image||!restroId){
			return res.status(400).json({
                message: 'all fields are required'
            });
		}
		console.log(req.body);
		const restraurant = await Restrauant.findById(restroId);
		console.log(restraurant,'restraurant');
        if (!restraurant) {
			return res.status(404).json({
				message: 'Restaurant not found'
			})
		}
		try {
			const product = new Product({
				name,
				description,
				price,
				image,
				restraurant:restroId,
			})
			const result = await product.save();
			if(!result){
				return res.status(400).json({
                    message: 'failed to add product'
                });
			}
			return res.status(201).json({
				message:true,
				result
			})
		} catch (error) {
			return res.status(400).json({
				error:error
			})
		}
	} catch (error) {
		return  res.status(500).json({
			message:false,
			error:error
		})
	}
});

//   get all Product
router.get('/product', async (req, res) => {
	try {
		let product = await Product.find();
		if (!product) {
			return res.send('restraurant not foundddd');
		} else {
			return res.send(product);
		}
	} catch {
        return res.send('err while fetching restraurant');
    }
});

// get product by id
router.get('/product/:id', async (req, res) => {
	try {
		let product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(404).send('not founddddd');
		} else {
			return res.send(product);
		}
	} catch {
		return res.send('err while fetching restraurant');
	}
});

// update product details link 
router.patch('/product/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!product) {
			return res.status(404).send('not found');
		} else {
			return res.status(200).send('updated successfully');
		}
	} catch (error) {
		return res.send({
			error: error.message,
		});
	}
});

// delete product details
router.delete('/product/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id, { new: true });
		if (!product) {
			return res.status(404).send('not found');
		} else {
			return res.status(200).send('updated successfully');
		}
	} catch (error) {
		return res.send({
			error: error.message,
		});
	}
});

module.exports = router;
