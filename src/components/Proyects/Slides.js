import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Project 1",
    desc: "Devnet",
    link: 'https://devnethubsocial.herokuapp.com/',
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "IronGym",
    link: 'https://irongymsport.herokuapp.com/'
  },
 
];

const slides = slidesInfo.map((slide) => (
  <a target='_blank' href={slide.link} rel='noreferrer' className='slide-container'>
		<img src={slide.src} alt={slide.alt} />
		<div className='slide-desc'>
			<span>{slide.desc}</span>
		</div>
	</a>
));

export default slides;