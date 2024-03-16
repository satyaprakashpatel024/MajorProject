/* import React from 'react';

const Card = () => {
	return (
		<div className='container row  mx-auto mt-5'>
			<div className='col-lg-4'>
				<img
					style={{ width: 300 }}
					src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt=''
				/>
				<h1 id='h1'> Order food</h1>
				<p> stay home </p>
			</div>
			<div className='col-lg-4 m-0'>
				<img
					style={{ width: 300 }}
					src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt=''
				/>
				<h1 id='h1'> Order food</h1>
				<p> stay home </p>
			</div>
			<div className='col-lg-4'>
				<img
					style={{ width: 300 }}
					src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt=''
				/>
				<h1 id='h1'> Order food</h1>
				<p> stay home </p>
			</div>
		</div>
	);
};

export default Card;*/

import React from 'react';
import './Card.css';
const Card = () => {
	return (
		<div className='container w-75 mt-5'>
			<div className='row'>
				<div className='col-lg-4'>
					<div className='img-card'>
						<img
							style={{ width: '100%' }}
							src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
						/>

						<h1 id='h1'> Order food</h1>
						<p> stay home </p>
					</div>
				</div>
				<div className='col-lg-4'>
					<div className='img-card'>
						<img
							style={{ width: '100%' }}
							src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
						/>

						<h1 id='h1'> Order food</h1>
						<p> stay home </p>
					</div>
				</div>
				<div className='col-lg-4'>
					<div className='img-card'>
						<img
							style={{ width: '100%' }}
							src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
						/>

						<h1 id='h1'> Order food</h1>
						<p> stay home </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
