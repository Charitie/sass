import React from "react";
import "./Gallery.scss";
import { galleryData } from "./galleryData";

const Gallery = () => {
	return (
		<div className='gallery'>
			{galleryData.map((gallery) => {
				return (
					<figure className={`gallery__item gallery__item--${gallery.class}`}>
						<img
							src={gallery.image}
							alt='Gallery'
							className='gallery__img'
						/>
					</figure>
				);
			})}
		</div>
	);
};

export default Gallery;
