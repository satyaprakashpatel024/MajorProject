import React from "react";
import arr from "./FoodData";
import { useState } from "react";

const Viewfood = () => {
	const Logo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
	
	const [data,setData] = useState('');
	const [NewD,SetNewD] = useState(arr);

	function fun1(e){
		setData(e.target.value);
	}

	function searchData(e){
		e.preventDefault();
		let NewArr = arr.filter((str)=>{
			return str.text===data;
		})
		SetNewD(NewArr)
	}
	
	return (
		<div>
			<div className="container d-flex justify-content-between align-items-center">
				<img style={{ width: "9rem" }} src={Logo} alt=""/>
				<h1>Search here</h1>
			</div>
			<div>
				<form className="container w-75 d-flex justify-content-center align-items-center m-2">
					<div className="col-lg-4">
						<input type="text" value={data} name="Search" c lassName="form-control" id="inputPassword2" placeholder="search" onChange={fun1} />
					</div>
					<div className="col-auto mx-2">
						<button type="submit" className="btn btn-primary mb-3" onClick={searchData}>
							Search
						</button >
					</div>
				</form>
			</div>
			<div className="container">
				<h1 style={{ fontWeight: 400 }}>Best food in Bhopal</h1>
				<div className="row d-flex justify-content-between align-items-center">
					{
						NewD.map((res) => {
						return (
							<>
								<div className="card mt-4" style={{ width: 350 }}>
									<img src={res.img} className="card-img-top" style={{ height: 200 }} alt=""/>
									<div className="card-body">
										<h5 className="card-title">{res.text}</h5>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Viewfood;