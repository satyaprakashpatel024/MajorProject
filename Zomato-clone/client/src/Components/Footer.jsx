import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Footer = () => {
	const Logo = 'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png';
	return (
		<div>
			<div className='container w-75'>
				<div className='d-flex mt-5 justify-content-between align-items-center'>
					<img style={{ width: '9rem' }} src={Logo} alt='' />
					<div>
						<select name='' id=''>
							<option value='India'>India</option>
							<option value='UAE'>UAE</option>
						</select>
						<select name='' id=''>
							<option value='English'>English</option>
							<option value='Turkce'>Turkce</option>
							<option value='Hindi'>Hindi</option>
							<option value='Italian'>Italian</option>
						</select>
					</div>
				</div>
				<div className='d-flex mt-5 justify-content-between align-items-center'>
					<div className='d-flex flex-column '>
						<h5>ABOUT ZOMATO</h5>
						<p>Who We Are</p>
						<p>Blog</p>
						<p>Work With Us</p>
						<p>Investor Relations</p>
						<p>Report Fraud</p>
						<p>Press Kit</p>
						<p>Contact Us</p>
					</div>
					<div className=''>
						<h5>ZOMAVERSE</h5>
						<p>Zomato</p>
						<p>Blinkit</p>
						<p>Feeding India</p>
						<p>Hyperpure</p>
						<p>Zomaland</p>
					</div>
					<div className=''>
						<div>
							<h5>FOR RESTAURANTS</h5>
							<p>Partner With Us</p>
							<p>Apps For You</p>
						</div>
						<div>
							<h5>FOR ENTERPRISES</h5>
							<p>Zomato For Enterprise</p>
						</div>
					</div>
					<div className=''>
						<h5>LEARN MORE</h5>
						<p>Privacy</p>
						<p>Security</p>
						<p>Terms</p>
						<p>Sitemap</p>
					</div>
					<div className=''>
						<h5>SOCIAL LINKS</h5>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
