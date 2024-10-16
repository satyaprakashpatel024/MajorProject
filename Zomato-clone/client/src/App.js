import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/Signup/SignUp.jsx";
import AddRestro from "./Components/AddRestro/AddRestro.jsx";
import ViewRestro from "./Components/ViewRestro/ViewRestro.jsx";
import Viewfood from "./Components/ViewFood/Viewfood.jsx";
import AddProduct from "./Components/AddProduct/AddProduct.jsx";
import ViewCart from "./Components/ViewCart/ViewCart.jsx";
import Success from "./Components/Success/Success.jsx";
import Cancel from "./Components/Cancel/Cancel.jsx";
const App = () => {
	let isLoggedIn = JSON.parse(localStorage.getItem("userData"));
	// console.log(isLoggedIn?.data?.role);

	return (
		<div className="head">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route
					path="/addrestro"
					element={isLoggedIn ? <AddRestro /> : <Home />}
				/>
				<Route
					path="/view"
					element={isLoggedIn ? <ViewRestro /> : <Home />}
				/>
				<Route path="/viewcart" element={<ViewCart />} />
				<Route
					path="/view/:id/product"
					element={isLoggedIn ? <Viewfood /> : <Home />}
				/>
				<Route path="/view/:id/addproduct" element={<AddProduct />} />
				<Route path="/sucess" element={<Success />} />
				<Route path="/cancel" element={<Cancel />} />
			</Routes>
		</div>
	);
};

export default App;
