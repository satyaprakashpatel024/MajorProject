import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	let navigate = useNavigate();
	const [input, setInput] = useState({
		name: "",
		email: "",
		passWord: "",
	});
	
	const fun1 = (e) => {
		let { name, value } = e.target;
		setInput({ ...input, [name]: value });
		// console.log(input);
	};
	
	const handleSubmit = async (e)=>{
		e.preventDefault();
		const response = await axios.post("http://localhost:4001/api/signup", input);
        console.log(response.data);
		if(response){
			navigate('/login');
		}
	}

	return (
		<div id="parent">
			<form onSubmit={handleSubmit}>
				<div id="container1">
					<header id="header">
						<span id="text">SignUp form</span>
					</header>
					<section id="inputs">
						<section id="input">
							<img src={user_icon} alt="img" />
							<input type="text" name="name" value={input.name} onChange={fun1} placeholder="name" />
						</section>
						<section id="input">
							<img src={email_icon} alt="img" />
							<input type="email" name="email" value={input.email} onChange={fun1} placeholder="Email" />
						</section>
						<section id="input">
							<img src={password_icon} alt="img" />
							<input type="passWord" name="passWord" value={input.passWord} onChange={fun1} placeholder="Password" />
						</section>
					</section>
					<div id="submit-container">
						<button id="submit"  type='submit'>Submit</button>
						<Link to={"/login"} id="loginlink">
                            <span id="submit">Login</span>
                        </Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Signup;