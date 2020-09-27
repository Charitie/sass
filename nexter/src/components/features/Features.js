import React from "react";
import "./features.scss";
import { ReactComponent as Globe } from "../../assets/SVG/world.svg";
import { ReactComponent as Trophy } from "../../assets/SVG/trophy.svg";
import { ReactComponent as Location } from "../../assets/SVG/location-pin.svg";
import { ReactComponent as Key } from "../../assets/SVG/key.svg";
import { ReactComponent as Presentation } from "../../assets/SVG/line-graph.svg";
import { ReactComponent as Lock } from "../../assets/SVG/lock.svg";

function Features() {
	return (
		<div className='features'>
			{/* .feature{feature $}*6 */}
			<div className='feature'>
				<Globe className='feature__icon' />
				<h4 className='heading-4 heading-4--dark'>World's best luxury homes</h4>
				<p className='feature__text'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
					distinctio necessitatibus pariatur voluptatibus.
				</p>
			</div>
			<div className='feature'>
				<Trophy className='feature__icon' />
				<h4 className='heading-4 heading-4--dark'>Only the best properties</h4>
				<p className='feature__text'>
					Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
					rerum sed a eligendi aut quia.{" "}
				</p>
			</div>
			<div className='feature'>
				<Location className='feature__icon' />
				<h4 className='heading-4 heading-4--dark'>All homes in in top locations</h4>
				<p className='feature__text'>
					Tenetur distinctio necessitatibus pariatur voluptatibus quidem
					consequatur harum.{" "}
				</p>
			</div>
			<div className='feature'>
				<Key className='feature__icon' />
				<h4 className='heading-4 heading-4--dark'>New home in one week</h4>
				<p className='feature__text'>
					Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
					amet consectetur adipisicing elit.{" "}
				</p>
			</div>
			<div className='feature'>
				<Presentation className='feature__icon'/>
				<h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
				<p className='feature__text'>
					Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
					necessitatibus pariatur voluptatibus.{" "}
				</p>
			</div>
			<div className='feature'>
				<Lock className='feature__icon'/>
				<h4 className='heading-4 heading-4--dark'>Secure payments on nexter</h4>
				<p className='feature__text'>
					Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
					quae.{" "}
				</p>
			</div>
		</div>
	);
}

export default Features;
