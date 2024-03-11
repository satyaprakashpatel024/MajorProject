const express = require('express');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRETKEY);

router.post('/payment', async (req, res) => {
	const { products } = req.body;
	console.log(products, 'productsss');
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
	res.json({ id: session.id });
});
module.exports = router;
