import React from "react";
import "./Home.scss";
import { houseOne } from '../../assets/house-1.jpeg';


const Home = () => {
	return (
		<div className='homes'>
			<div class='home'>
				<div class='home'>
					<img src={houseOne} alt='House 1' class='home__img' />{" "}
				</div>{" "}
      </div>
      
			<div class='home'>Home 2</div>
			<div class='home'>Home 3</div>
			<div class='home'>Home 4</div>
			<div class='home'>Home 5</div>
			<div class='home'>Home 6</div>
		</div>
	);
};

export default Home;
