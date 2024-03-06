import React, { useState } from 'react';
import './AddProduct.css'; // Import the CSS file
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oxndvhwlazbwmnrzblia.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bmR2aHdsYXpid21ucnpibGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMDI0MDQsImV4cCI6MjAyNDg3ODQwNH0.rXvWMF3kJ6SNPqV4DFJnAlrKWPmJPOGrRFsW1mmqRPI';
const supabase = createClient(supabaseUrl, supabaseKey);

const AddProduct = () => {
	let { id } = useParams();
	// console.log(useParams(), 'heheh');
	const [foodData, setfoodData] = useState({
		name: '',
		description: '',
		price: '',
		image: '',
	});

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setfoodData({ ...foodData, image: file });
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setfoodData({ ...foodData, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Upload image to Supabase
			const { data, error } = await supabase.storage.from('zomato').upload('product_images/' + foodData.image.name, foodData.image);
			console.log(data);
			if (error) {
				throw error;
			}

			// Get the URL of the uploaded image
			const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/product_images/${foodData.image.name}`;

			// Save restaurant data to MongoDB with image URL
			const response = await axios.post('http://localhost:4001/api/product', { ...foodData, image: imageUrl, restroId: id });
			if (response.status === 201) {
				alert('Product added successfully');
				// Reset form field
			} else {
				alert('Failed to add Product');
			}
		} catch (error) {
			console.error('Error adding restaurant:', error);
			alert('Failed to add restaurant');
		}
	};

	return (
		<div>
			<h2>Add Product</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Name:</label>
					<input type='text' name='name' value={foodData.name} onChange={handleChange} required />
				</div>
				<div className='form-group'>
					<label>Description:</label>
					<input type='text' name='description' value={foodData.description} onChange={handleChange} required />
				</div>
				<div className='form-group'>
					<label>Price:</label>
					<input type='number' name='price' value={foodData.price} onChange={handleChange} required />
				</div>
				<div className='form-group'>
					<label>Image:</label>
					<input type='file' onChange={handleImageChange} accept='image/*' required />
				</div>
				<button type='submit'>Add Product</button>
			</form>
		</div>
	);
};

export default AddProduct;
