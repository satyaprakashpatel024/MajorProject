import React from 'react';
import './City.css';
const City = () => {
	return (
		<div>
			<div className='mt-5 container w-75 d-flex justify-content-center align-items-center flex-column'>
				<h1>Popular locations in 😎 India</h1>
				<p className='mt-5' id='textParagraph'>
					From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from
					users just like you, to find your next great meal.
				</p>
			</div>
			<section>
				<div className='container w-75 mt-5'>
					<div className='row'>
						<div className='col-lg-4  temp'>
							<div className='card1'>
								<h1>Bhopal</h1>
							</div>
						</div>
						<div className='col-lg-4  temp'>
							<div className='card1'>
								<h1>Indore</h1>
							</div>
						</div>
						<div className='col-lg-4  temp'>
							<div className='card1'>
								<h1>Jabalpur</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default City;
