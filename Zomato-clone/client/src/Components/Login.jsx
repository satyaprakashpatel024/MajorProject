/*
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Login = () => {
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" for="exampleCheck1">
                    Agree to terms and conditions
					</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;

*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import "./Login.css";
import axios from "axios";

const Login = () => {
	const [input, setInput] = useState({
		email: "",
		passWord: "",
	});

	const fun1 = (e) => {
		let { name, value } = e.target;
		setInput({ ...input, [name]: value });
		console.log(input);
	};

	// fetch('http://localhost:4000/login')
	// .then(function (response) {
	// 	return response.json();
	// });

	const handleLogin = async (e)=>{
		e.preventDefault();
		const response = await axios.post("http://localhost:4001/login", input);     
        console.log(response.data);
	}

	return (
		<div className="parent1">
			<form onSubmit={handleLogin}>
				<div className="container2">
					<header className="header1">
						<span className="text1">Login form</span>
					</header>
					<section className="inputs1">
						<section className="input1">
							<img src={email_icon} alt="img" />
							<input type="text" name="email" value={input.email} onChange={fun1} placeholder="User email" />
						</section>
						<section className="input1">
							<img src={password_icon} alt="img" />
							<input type="passWord" name="passWord" value={input.passWord} onChange={fun1} placeholder="Password" />
						</section>
					</section>
					<section className="submit-container1">
						<button className="submit1">Submit</button>
						<Link to={"/signup"} className="signuplink1">
							<span className="submit1">Sign Up</span>
						</Link>
					</section>
				</div>
			</form>
		</div>
	);
};

export default Login;
