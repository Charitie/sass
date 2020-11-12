import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.png";
import bbc from "../../assets/logo-bbc.png";
import forbes from "../../assets/logo-forbes.png";
import techcrunch from "../../assets/logo-techcrunch.png";
import bi from "../../assets/logo-bi.png";

function Header() {
	return (
		<div className='header'>
			<img className='header__logo' src={Logo} alt='logo' />
			<h3 className='heading-3'> Your own home:</h3>
			<h1 className='heading-1'>The ultimate personal freedom</h1>
			<button className='btn header__btn'>View our properties</button>
			<div className='header__seenon-text'>Seen on</div>
			<div className='header__seenon-logos'>
				<img src={bbc} alt='' />
				<img src={forbes} alt='' />
				<img src={techcrunch} alt='' />
				<img src={bi} alt='' />
			</div>
		</div>
	);
}

export default Header;
