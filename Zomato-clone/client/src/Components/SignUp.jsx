// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// const SignUp = () => {
// 	return (
// 		<div className="container">
// 			<form>
// 				<div className="form-row">
// 					<div className="col-md-4 mb-3">
// 						<label for="validationDefault01">First name</label>
// 						<input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Mark" required />
// 					</div>
// 					<div className="col-md-4 mb-3">
// 						<label for="validationDefault02">Last name</label>
// 						<input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required />
// 					</div>
// 					<div className="col-md-4 mb-3">
// 						<label for="validationDefaultUsername">Username</label>
// 						<div className="input-group">
// 							<div className="input-group-prepend">
// 								<span className="input-group-text" id="inputGroupPrepend2">
// 									@
// 								</span>
// 							</div>
// 							<input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
// 						</div>
// 					</div>
// 				</div>
// 				<div className="form-row">
// 					<div className="col-md-4 mb-3">
// 						<label for="validationDefault03">City</label>
// 						<input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
// 					</div>
// 					<div className="col-md-3 mb-3">
// 						<label for="validationDefault04">State</label>
// 						<input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
// 					</div>
// 					<div className="col-md-3 mb-3">
// 						<label for="validationDefault05">Zip</label>
// 						<input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
// 					</div>
// 				</div>
// 				<div className="form-group">
// 					<div className="form-check">
// 						<input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
// 						<label className="form-check-label" for="invalidCheck2">
// 							Agree to terms and conditions
// 						</label>
// 					</div>
// 				</div>
// 				<button className="btn btn-primary" type="submit">
// 					Submit form
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// export default SignUp;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import "./SignUp.css";
import axios from "axios";

const Signup = () => {
	const [input, setInput] = useState({
		name: "",
		email: "",
		passWord: "",
	});

	const fun1 = (e) => {
		let { name, value } = e.target;
		setInput({ ...input, [name]: value });
		console.log(input);
	};

	// fetch('http://localhost:4000/signup')
	// .then(function (response) {
	// 	return response.json();
	// });

	const handleSubmit = async (e)=>{
		e.preventDefault();
		const response = await axios.post("http://localhost:4000/signup", input);
        console.log(response.data);
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