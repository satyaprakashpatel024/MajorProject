import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './ViewFood.css';

const Viewfood = () => {
	let navigate = useNavigate();
	let { id } = useParams();
	const [restaurant, setRestraurant] = useState({});
	const [products, setProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [cart, setCart] = useState([]);

	// console.log(id,'sdfghjk');
	useEffect(() => {
		async function showProduct() {
			const restro = await axios.get(`http://localhost:4001/api/restro/${id}`);
			// console.log(restro, 'rrrrrrrrrrrrr');
			setRestraurant(restro.data);
			const product = await axios.get('http://localhost:4001/api/product');
			// console.log(product, 'pppppppppppppppppp');
			const filteredProduct = product.data.filter((p) => p.restraurant === id);
			setProducts(filteredProduct);
			// console.log(filteredProduct, 'asdfghjkl');
		}
		showProduct();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleplus = (indx) => {
		let updatedPrduct = [...products];
		updatedPrduct[indx].quantity = (updatedPrduct[indx].quantity || 0) + 1;
		setProducts(updatedPrduct);
		// console.log(products,/'pppppppppppppp');
		calculateTotalPrice();
	};

	const handleminus = (indx) => {
		let updatedPrduct = [...products];
		updatedPrduct[indx].quantity = Math.max((updatedPrduct[indx].quantity || 0) - 1, 0);
		setProducts(updatedPrduct);
		// console.log(products, 'mmmmmmmmmmmmmmmmm');
		calculateTotalPrice();
	};

	const calculateTotalPrice = () => {
		const totalPrice = products.reduce((acc, curr) => {
			return acc + (curr.price || 0) * (curr.quantity || 0);
		}, 0);
		setTotalPrice(totalPrice);
	};

	const addProductToCart = (id) => {
		let updatedProduct = [...products];
		console.log(updatedProduct, 'updateProduct');
		updatedProduct[id].quantity = (updatedProduct[id].quantity || 0) + 1;
		setProducts(updatedProduct);

		const productToAdd = { ...products[id] };
		setCart([...cart, productToAdd]);
		console.log(cart, 'cccccccccccccccart');
		calculateTotalPrice();
	};

	const addProduct = () => {
		navigate(`/view/${id}/addproduct`);
	};

	const viewCart = () => {
		console.log(products, 'pppppppppppppp');
		navigate('/viewcart', { state: { cart, totalPrice } });
	};

	return (
		<>
			<div className='d-flex justify-content-around mb-5'>
				<button onClick={addProduct}>add product</button>
				<button onClick={viewCart}>View Cart ({cart.length})</button>
			</div>
			<div>
				<img id='restroImage' className='' src={restaurant.image} alt='restroImg' />
				<h3>{restaurant.name}</h3>
			</div>
			<div className='row'>
				{products.map((data, indx) => {
					return (
						<>
							<div key={indx} id='product' className='col-lg-4'>
								<img id='productImage' src={data.image} alt='productImage' />
								<div id='product_name'>
									<p>Name : {data.name}</p>
									<p>Price : {data.price}</p>
								</div>
								<div id='quanity_button'>
									<p id='quantity'>Quantity: {data.quantity || 0}</p>
									{!data.quantity ? (
										<button onClick={() => addProductToCart(indx)}>Add</button>
									) : (
										<>
											<button onClick={() => handleplus(indx)}>+</button>
											<button onClick={() => handleminus(indx)}>-</button>
										</>
									)}
								</div>
								<p>Total Price: {data.price * (data.quantity || 0)}</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Viewfood;
