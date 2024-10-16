import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import conf from "../EnvironmentVariables/environmentVariables";
import './ViewCart.css';

const BillDetailsCard = ({ totalPrice, discount, gstRate, platformChargeRate }) => {
	const gstAmount = (totalPrice * gstRate) / 100;
	const platformCharge = (totalPrice * platformChargeRate) / 100;
	const totalAmount = totalPrice - (totalPrice * discount) / 100 + gstAmount + platformCharge;
	return (
		<div className='bill-details-card'>
			<h3>Bill Details</h3>
			<p>Total Price: {totalPrice}</p>
			<p>Discount: {discount}%</p>
			<p>
				GST ({gstRate}%): {gstAmount}
			</p>
			<p>
				Platform Charge ({platformChargeRate}%): {platformCharge}
			</p>
			<p>Total Amount: {totalAmount}</p>
		</div>
	);
};
const ViewCart = () => {
	const location = useLocation();
	const { cart, totalPrice: initialTotalPrice ,restaurant} = location.state;
	const [coupon, setCoupon] = useState('');
	const [discount, setDiscount] = useState(0);
	const [savedAmount, setSavedAmount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
	const [cartItems, setCartItems] = useState(cart);

	const handleApplyCoupon = () => {
		switch (coupon) {
			case 'MAIGAREEBHU':
				setDiscount(90);
				setSavedAmount((totalPrice * 90) / 100);
				break;
			case 'COUPON1':
				setDiscount(50); // Example discount
				setSavedAmount((totalPrice * 50) / 100); // Example saved amount calculation
				break;
			case 'COUPON2':
				setDiscount(25); // Example discount
				setSavedAmount((totalPrice * 25) / 100); // Example saved amount calculation
				break;
			default:
				alert('Invalid coupon code');
		}
	};

	const handleCouponChange = (e) => {
		setCoupon(e.target.value);
	};

	let STRIPE_PUBLICKEY = conf.REACT_APP_STRIPE_PUBLICKEY;
	// console.log(STRIPE_PUBLICKEY,'rrrrrrrrrrrr');
	const handlePayment = async () => {
		// Implement payment logic here
		
		const stripe = await loadStripe(STRIPE_PUBLICKEY);

		const body = {
			products: cartItems,
			restaurant: restaurant,
		};
		console.log(body,'asdfghjkl');
		const headers = {
			'Content-Type': 'application/json',
		};
		const response = await fetch('http://localhost:4001/api/payment', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(body),
		});

		const session = await response.json();
		console.log(response,'asdfghjkl');

		const result = stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			console.log(result.error, 'errrrr');
		}
	};

	const handlePlus = (index) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems[index].quantity++;
		setCartItems(updatedCartItems);
		updateTotalPrice(updatedCartItems);
	};

	const handleMinus = (index) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems[index].quantity = Math.max(updatedCartItems[index].quantity - 1, 0);
		setCartItems(updatedCartItems);
		updateTotalPrice(updatedCartItems);
	};

	const updateTotalPrice = (items) => {
		const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
		setTotalPrice(totalPrice);
	};

	return (
		<div className='container w-75 '>
			<h1>Cart</h1>
			{cartItems.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<div>
					<ul>
						{cartItems.map((item, index) => (
							<li key={index}>
								<span>Product: {item.name}</span>
								<span>Quantity: {item.quantity}</span>
								<span>Price: {item.price * item.quantity}</span>
								<button onClick={() => handlePlus(index)}>+</button>
								<button onClick={() => handleMinus(index)}>-</button>
							</li>
						))}
					</ul>
					<p>Total Price: {totalPrice}</p>
					{discount > 0 && <p>Discount: {discount}%</p>}
					{savedAmount > 0 && <p>You saved: {savedAmount}</p>}
					<p>Total Price after Discount: {totalPrice - (totalPrice * discount) / 100}</p>
					<div>
						<select value={coupon} onChange={handleCouponChange}>
							<option value=''>Select Coupon</option>
							<option value='MAIGAREEBHU'>MAIGAREEBHU - 90% off</option>
							<option value='COUPON1'>COUPON1 - 50% off</option>
							<option value='COUPON2'>COUPON2 - 25% off</option>
						</select>
						<button onClick={handleApplyCoupon}>Apply Coupon</button>
					</div>
					<button onClick={handlePayment}>Pay Now</button>
					<BillDetailsCard totalPrice={totalPrice} discount={discount} gstRate={12} platformChargeRate={1} />
				</div>
			)}
		</div>
	);
};

export default ViewCart;
