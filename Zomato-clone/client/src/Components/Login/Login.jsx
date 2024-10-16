import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";
import "./Login.css";
import axios from "axios";

const Login = () => {
	let navigate = useNavigate();
	const [input, setInput] = useState({
		email: "",
		passWord: "",
	});

	const fun1 = (e) => {
		let { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	const handleLogin = async (e)=>{
		e.preventDefault();
		const response = await axios.post("http://localhost:4001/api/login", input);     
        console.log(response.data);
		if(response.data){
			localStorage.setItem('userData', JSON.stringify(response.data));
			navigate('/');
		}
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
