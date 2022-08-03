import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

function Slider() {
	return (
		<div className="slider">
			<Carousel variant="dark">
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/New-Catalogue.jpg" alt="First slide" />
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Were-Hiring.jpg" alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/NEW-STM-Holders.jpg" alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Slider;
