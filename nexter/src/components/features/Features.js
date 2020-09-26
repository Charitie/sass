import React from "react";
import "./features.scss";
import { ReactComponent as Globe } from "../../assets/SVG/world.svg";

function Features() {
	return (
		<div className='features'>
			{/* .feature{feature $}*6 */}
			<div class='feature'>
        <Globe />
        <h4 class="heading-4">World's best luxury homes</h4>
      </div>
			<div class='feature'>FEATURES 2</div>
			<div class='feature'>FEATURES 3</div>
			<div class='feature'>FEATURES 4</div>
			<div class='feature'>FEATURES 5</div>
			<div class='feature'>FEATURES 6</div>
		</div>
	);
}

export default Features;
