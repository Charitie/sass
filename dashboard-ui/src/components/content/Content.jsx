import React from "react";
import "./Content.scss";
import Jobs from "./jobs/Jobs";
import { BsPersonFill, BsFillPlusCircleFill } from "react-icons/bs";

function Content() {
	return (
		<div className='content'>
			<div className='content__header'>
				<h2>View United Rentals : Miptas CA</h2>
				<button>Back</button>
			</div>
			<div className='content__customer-details'>
				<h3>Customer Details</h3>
				<div className='group-inputs'>
					<input type='text' className='input-1' placeholder='input-1' />
					<input type='text' className='input-2' placeholder='input-2' />
					<input type='text' className='input-3' placeholder='input-3' />
					<input type='text' className='input-4' placeholder='input-4' />
					<input type='text' className='input-5' placeholder='input-5' />
					<input type='text' className='input-6' placeholder='input-6' />
					<input type='text' className='input-7' placeholder='input-7' />
					<input type='text' className='input-8' placeholder='input-8' />
					<input type='text' className='input-9' placeholder='input-9' />
				</div>
			</div>
			<Jobs />
			<div className='content__bill'>
				<h3>Bill To</h3>
				<div className='group-inputs'>
					<input type='text' className='input-1' placeholder='input-1' />
					<input type='text' className='input-2' placeholder='input-2' />
					<input type='text' className='input-3' placeholder='input-3' />
					<input type='text' className='input-4' placeholder='input-4' />
					<input type='text' className='input-5' placeholder='input-5' />
					<input type='text' className='input-6' placeholder='input-6' />
					<input type='text' className='input-7' placeholder='input-7' />
					<input type='text' className='input-8' placeholder='input-8' />
					<input type='text' className='input-9' placeholder='input-9' />
				</div>
			</div>
			<div className='content__additional-info'>
				<h3>Additional Information</h3>
				<div className='person-info'>
					<input type='text' placeholder='select person' />
					<BsFillPlusCircleFill className='plus-icon'/>
					<BsPersonFill className='user-icon' />
					<span className='user-name'>Susan</span>
				</div>
				<div className='buttons'>
					<button className='btn btn--cancel' >Cancel</button>
					<button className='btn btn--save' >Save</button>
				</div>
			</div>
		</div>
	);
}

export default Content;
