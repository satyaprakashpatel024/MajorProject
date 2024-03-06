import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
const Viewfood = () => {
	
	let {id} = useParams();
	// console.log(id,'sdfghjk');
	let navigate = useNavigate();
	const addProduct = ()=>{
		navigate(`/view/${id}/addproduct`);
	}
	return (
		<>
			<button onClick={addProduct}>add product</button>
		</>
	)
};

export default Viewfood;
