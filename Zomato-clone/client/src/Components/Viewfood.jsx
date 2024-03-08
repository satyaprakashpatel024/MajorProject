import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './ViewFood.css';
import add from '../icons/add.png';
import minus from '../icons/minus.png';

const Viewfood = () => {
	const [restaurant, setRestraurant] = useState({});
	const [products, setProducts] = useState([]);
	// const [finalPrice,setFinalPrice] = useState(0);
	let { id } = useParams();
	// console.log(id,'sdfghjk');
	useEffect(() => {
		async function showProduct() {
			const restro = await axios.get(`http://localhost:4001/api/restro/${id}`);
			// console.log(restro);
			setRestraurant(restro.data);
			const product = await axios.get('http://localhost:4001/api/product');
			setProducts(product.data);
			// console.log(products);
		}
		showProduct();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let navigate = useNavigate();
	const addProduct = () => {
		navigate(`/view/${id}/addproduct`);
	};

	const handlePlus = (indx) => {
		let updatedPrduct = [...products];
		updatedPrduct[indx].quantity = (updatedPrduct[indx].quantity || 0) + 1;
		updatedPrduct[indx].totalprice = (updatedPrduct[indx].quantity*updatedPrduct[indx].price);
		setProducts(updatedPrduct);
		console.log(products);
	};

	const handleMinus = (indx) => {
		let updatedPrduct = [...products];
		updatedPrduct[indx].quantity = (updatedPrduct[indx].quantity || 0) - 1;
		updatedPrduct[indx].quantity = updatedPrduct[indx].quantity > 0 ? updatedPrduct[indx].quantity : (updatedPrduct[indx].quantity = 0);
		updatedPrduct[indx].totalprice = (updatedPrduct[indx].quantity*updatedPrduct[indx].price);
		setProducts(updatedPrduct);
		console.log(products);
	};

	return (
		<>
			<div>
				<img id='restroImage' src={restaurant.image} alt='restroImg' />
				<h3>{restaurant.name}</h3>
			</div>
			<div className='row'>
				{products.map((data, indx) => {
					return (
						<>
							<div id='product' className='col-lg-4'>
								<img id='productImage' src={data.image} alt='productImage' />
								<p>Name : {data.name}</p>
								<p>Price : {data.price}</p>
								<p>Description : {data.description}</p>
								<p>Quantity : {data.quantity > 0 ? data.quantity : 0}</p>
								<p>TotalPrice : {data.totalprice  || 0}</p>
								<button onClick={() => handlePlus(indx)}>
									<img id='addIcon' src={add} alt="add" />
								</button>
								<button onClick={() => handleMinus(indx)}>
									<img id='minusIcon' src={minus} alt="minus" />
								</button>
							</div>
						</>
					);
				})}
			</div>
			<div>
				<button onClick={addProduct}>add product</button>
			</div>
		</>
	);
};

export default Viewfood;
