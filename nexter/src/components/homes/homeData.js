import React from "react";
import houseOne from "../../assets/house-1.jpeg";
import houseTwo from "../../assets/house-2.jpeg";
import houseThree from "../../assets/house-3.jpeg";
import houseFour from "../../assets/house-4.jpeg";
import houseFive from "../../assets/house-5.jpeg";
import houseSix from "../../assets/house-6.jpeg";
import { ReactComponent as Heart } from "../../assets/SVG/heart.svg";

export const homeData = [
	{
		image: houseOne,
		heartIcon: <Heart className='home__like' />,
		name: "Beautiful Family House",
		country: "USA",
		rooms: "5 rooms",
		areaSize: "325 m",
		price: "$1,200,000",
		buttonText: "Contact realtor",
	},
	{
		image: houseTwo,
		heartIcon: <Heart className='home__like' />,
		name: "Modern Glass Villa",
		country: "Canada",
		rooms: "6 rooms",
		areaSize: "450 m",
		price: "$2,750,000",
		buttonText: "Contact realtor",
	},
	{
		image: houseThree,
		name: "Cozy Country House",
		country: "UK",
		rooms: "4 rooms",
		areaSize: "250 m",
		price: "$850,000",
		buttonText: "Contact realtor",
	},
	{
		image: houseFour,
		name: "Large Rustical Villa",
		country: "Portugal",
		rooms: "6 rooms",
		areaSize: "480 m",
		price: "$1,950,000",
		buttonText: "Contact realtor",
	},
	{
		image: houseFive,
		name: "Majestic Palce House",
		country: "Germany",
		rooms: "14 rooms",
		areaSize: "4230 m",
		price: "$9,500,000",
		buttonText: "Contact realtor",
	},
	{
		image: houseSix,
		name: "Modern Family House",
		country: "Italy",
		rooms: "3 rooms",
		areaSize: "170 m",
		price: "$600,000",
		buttonText: "Contact realtor",
	},
];
