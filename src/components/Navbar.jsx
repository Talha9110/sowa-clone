import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BarChartIcon from "@mui/icons-material/BarChart";
import "./style.css";

function Navbar() {
	return (
		<>
			<div className="main container-fluid text-white">
				<div className="navb w-100 d-flex justify-content-between align-items-center">
					<div className="left_side d-flex justify-content-start align-items-center">
						<div className="image">
							<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa-Webshop_CA-smb-responsive/en_US/Sowa.png" alt="" />
						</div>
						<div className="tools align-self-end">
							<span className="ms-3">TOOLING YOUR WORLD.</span>
						</div>
					</div>
					<div className="right_side d-flex align-items-center">
						<div className="search">
							<input type="search ms-2" />
							<SearchIcon />
						</div>
						<div className="login d-flex align-items-center">
							<PeopleIcon />
							<span className="ms-2">Login</span>
						</div>
						<div>
							<BarChartIcon />
						</div>
						<div>
							<FavoriteBorderIcon />
						</div>
						<div className="d-flex">
							<LocalMallIcon />
							<div className="ms-2">0</div>
						</div>
						<div>
							<MenuIcon />
						</div>
						<div className="flag">
							<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/-/en_US/img/countrycanada.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="nav2 container-fluid w-100 d-flex justify-content-between align-items-center">
				<div className="product d-flex mt-3">
					<ul>
						<li>Shop All Products</li>
						<li>Shop By Brand</li>
						<li>Download Center</li>
						<li>Contact Us</li>
						<li>About Us</li>
						<li>Careers</li>
						<li>Support</li>
					</ul>
				</div>
				<div className="quick mt-3">
					<p>Quick Order</p>
				</div>
			</div>
		</>
	);
}

export default Navbar;
