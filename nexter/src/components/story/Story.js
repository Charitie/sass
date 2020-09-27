import React from "react";
import "./story.scss";
import storyOne from "../../assets/story-1.jpeg";
import storyTwo from "../../assets/story-2.jpeg";

function Story() {
	return (
		<>
			<div className='story__pictures'>
				<img
					src={storyOne}
					alt='Couple with new house'
					className='story__img--1'
				/>
				<img src={storyTwo} alt='New house' className='story__img--2' />
			</div>
			<div className='story__content'>
				<h3 class='heading-3 mb-sm'>Happy Customers</h3>
				<h2 class='heading-2 heading-2--dark mb-md'>
					&ldquo;The best decision of our lives&rdquo;
				</h2>
				<p class='story__text'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
					distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
					harum volupta!
				</p>
				<button class='btn'>Find your own home</button>{" "}
			</div>
		</>
	);
}

export default Story;
