import React from "react";
import { ReactComponent as Globe } from "../../assets/SVG/world.svg";
import { ReactComponent as Trophy } from "../../assets/SVG/trophy.svg";
import { ReactComponent as Location } from "../../assets/SVG/map.svg";
import { ReactComponent as Key } from "../../assets/SVG/key.svg";
import { ReactComponent as Presentation } from "../../assets/SVG/presentation.svg";
import { ReactComponent as Lock } from "../../assets/SVG/lock.svg";

export const features = [
	{
		image: <Globe className='feature__icon'/>,
		title: `World's best luxury homes`,
		paragraph: `	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
    distinctio necessitatibus pariatur voluptatibus.`,
  },
  {
		image: <Trophy className='feature__icon' />,
		title: `Only the best properties`,
		
		paragraph: `Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
		rerum sed a eligendi aut quia.`,
  },
  {
		image: <Location className='feature__icon' />,
		title: `All homes in in top locations`,
		paragraph: `Tenetur distinctio necessitatibus pariatur voluptatibus quidem
		consequatur harum.`,
  },
  {
		image: <Key className='feature__icon' />,
		title: `New home in one week`,
		paragraph: `Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
		amet consectetur adipisicing elit.`,
  },
  {
		image:<Presentation className='feature__icon'/>,
		title: `Top 1% realtors`,
		paragraph: `Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
		necessitatibus pariatur voluptatibus.`,
  },
  {
		image: <Lock className='feature__icon'/>,
		title: `Secure payments on nexter`,
		paragraph: `Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
		quae.`,
	},
];
