const express = require('express');
const router = express.Router();
const Order = require('../models/order.js');
let Restrauant = require('../models/restraurant.js');
let Product = require('../models/products.js');
const stripe = require('stripe')(process.env.STRIPE_SECRETKEY);

router.post('/payment', async (req, res) => {
	const { products, restaurant } = req.body;
	// console.log(products, 'productss');
	// console.log(restaurant, 'restaurant');

	const lineItems = products.map((product) => ({
		price_data: {
			currency: 'inr',
			product_data: {
				name: product.name,
				images: [product.image],
			},
			unit_amount: product.price * 100,
		},
		quantity: product.quantity,
	}));

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: lineItems,
		mode: 'payment',
		success_url: 'http://localhost:3000/sucess',
		cancel_url: 'http://localhost:3000/cancel',
	});
	try {
		const orders = products.map(
			(product) =>
				new Order({
					restraurant_id: restaurant._id,
					restaurant_name: restaurant.name,
					restaurant_address: restaurant.address,
					product_id: product._id,
					name: product.name,
					price: product.price,
					quantity: product.quantity,
				})
		);

		await Order.insertMany(orders);

		res.json({ id: session.id });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to store order' });
	}
});

router.get('/past-orders', async (req, res) => {
	try {
		const orders = await Order.find();

		if (!orders) {
			return res.status(404).json({ message: 'No past orders found' });
		}

		const ordersWithDetails = await Promise.all(
			orders.map(async (order) => {
				const restaurant = await Restraurant.findById(order.restraurant_id);
				const products = await Product.find({ _id: { $in: order.product_id } });
				return { order, restaurant, products };
			})
		);

		res.json(ordersWithDetails);
	} catch (error) {
		console.error('Error fetching past orders:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

module.exports = router;

module.exports = router;
