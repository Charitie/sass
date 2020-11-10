import React from "react";
import "./features.scss";

import { features } from "../features/FeatureData";

function Features() {
	console.log(features);
	return (
		<div className='features'>
			{/* .feature{feature $}*6 */}
			{features.map((feature, index) => {
				return (
					<div key={index} className='feature'>
						{feature.image}
						<h4 className='heading-4 heading-4--dark'>{feature.title}</h4>
						<p className='feature__text'>{feature.paragraph} </p>
					</div>
				);
			})}
		</div>
	);
}

export default Features;
