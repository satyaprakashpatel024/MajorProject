import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddRestro from './Components/AddRestro';
import ViewRestro from './Components/ViewRestro.jsx';
import Viewfood from './Components/ViewFood.jsx';
import AddProduct from './Components/AddProduct.jsx';

const App = () => {
	return (
		<div className='head'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/addrestro' element={<AddRestro />} />
				<Route path='/view' element={<ViewRestro />} />
				<Route path='/view/:id/product' element={<Viewfood />} />
				<Route path='/view/:id/addproduct' element={<AddProduct />} />
			</Routes>
		</div>
	);
};

export default App;
