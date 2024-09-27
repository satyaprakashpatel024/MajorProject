import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddRestro from './Components/AddRestro';
import ViewRestro from './Components/ViewRestro.jsx';
import Viewfood from './Components/Viewfood.jsx';
import AddProduct from './Components/AddProduct.jsx';
import ViewCart from './Components/ViewCart.jsx';
import Success from './Components/Success.jsx';
import Cancel from './Components/Cancel.jsx';
const App = () => {
	let isLoggedIn = localStorage.getItem('userData');
	console.log(isLoggedIn);
	
	return (
		<div className='head'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/addrestro' element={isLoggedIn ? <AddRestro /> : <Home />} />
				<Route path='/view' element={isLoggedIn ? <ViewRestro /> : <Home />} />
				<Route path='/viewcart' element={<ViewCart />} />
				<Route path='/view/:id/product' element={isLoggedIn ? <Viewfood /> : <Home />} />
				<Route path='/view/:id/addproduct' element={<AddProduct />} />
				<Route path='/sucess' element={<Success />} />
				<Route path='/cancel' element={<Cancel />} />
			</Routes>
		</div>
	);
};

export default App;
