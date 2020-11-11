import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className='footer'>
			<ul className='nav'>
				<li href='#' className='nav__item nav__link'>Find your dream home</li>
				<li href='#' className='nav__item nav__link'>Request proposal</li>
				<li href='#' className='nav__item nav__link'>Download home planner</li>
				<li href='#' className='nav__item nav__link'>Contact us</li>
				<li href='#' className='nav__item nav__link'>Submit your property</li>
				<li href='#' className='nav__item nav__link'>Find your dream home</li>
      </ul>
      <p className='copyright'>
        &copy; Copyright 2020 by Charity Tarus. 
      </p>
		</div>
	);
};

export default Footer;
