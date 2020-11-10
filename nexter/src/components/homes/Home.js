import React from "react";
import "./Home.scss";
import houseOne from "../../assets/house-1.jpeg";
import { ReactComponent as Heart } from "../../assets/SVG/heart.svg";
import { ReactComponent as Location } from "../../assets/SVG/map-pin.svg";
import { ReactComponent as Key } from "../../assets/SVG/key.svg";
import { ReactComponent as Expand } from "../../assets/SVG/expand.svg";
import { ReactComponent as User } from "../../assets/SVG/profile-male.svg";
import { homeData } from "./homeData";

const Home = () => {
	return (
		<div className='homes'>
			{homeData.map((home, index) => {
				return (
					<div key={index} className='home'>
						<img src={home.image} alt='House 3' className='home__img' />
						<Heart className='home__like' />
						<h5 className='home__name'>{home.name}</h5>
						<div className='home__location'>
							<Location className='svg' />
							<p>{home.country}</p>
						</div>
						<div className='home__rooms'>
							<User className='svg' />
							<p>{home.rooms}</p>
						</div>
						<div className='home__area'>
							<Expand className='svg' />
							<p>
								{home.areaSize}
								<sup>2</sup>
							</p>
						</div>
						<div className='home__price'>
							<Key className='svg' />
							<p>{home.price}</p>
						</div>
						<button className='btn home__btn'>Contact realtor</button>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
