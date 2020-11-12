import React from "react";
import "./realtors.scss";
import realtorOne from "../../assets/realtor-1.jpeg";
import realtorTwo from "../../assets/realtor-2.jpeg";
import realtorThree from "../../assets/realtor-3.jpeg";

function Realtors() {
	return (
		<div className='realtors'>
			<h3 className='heading-3'>Top 3 Realtors</h3>
			<div className='realtors__list'>
				<img src={realtorOne} alt='Realtor 1' className='realtors__img' />
				<div className='realtors__details'>
					<h4 className='heading-4 heading-4--light'>Erick Smith</h4>
					<p className='realtors__sold'>245 houses sold</p>
        </div>
        <img src={realtorTwo} alt='Realtor 1' className='realtors__img' />
				<div className='realtors__details'>
					<h4 className='heading-4 heading-4--light'>May Brown</h4>
					<p className='realtors__sold'>212 houses sold</p>
        </div>
        <img src={realtorThree} alt='Realtor 1' className='realtors__img' />
				<div className='realtors__details'>
					<h4 className='heading-4 heading-4--light'>Tony Blair</h4>
					<p className='realtors__sold'>198 houses sold</p>
				</div>
			</div>
		</div>
	);
}

export default Realtors;
