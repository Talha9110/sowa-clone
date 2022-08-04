import React from "react";
import "./style.css";

function Footer() {
	return (
		<>
			<div className="footer container-fluid text-white">
				<div className="navft w-100 d-flex justify-content-between align-items-center">
					<div className="left_side d-flex justify-content-start align-items-center">
						<div className="texti">1-800-265-8221</div>
						<div className="tools">
							<span>Monday - Friday, 8:00 am - 6:00 pm EST</span>
						</div>
					</div>
					<div className="right_side d-flex justify-content-center align-items-center pb-3">
						<button className="d-flex align-self-center">UP</button>
					</div>
				</div>
			</div>
			<div className="page-bottom container-fluid  py-5">
				<footer className="container-xl page-bottom  text-dark py-1 d-flex justify-content-between">
					<div className="div1">
						<p>ACCOUNTS</p>
						<ul>
							<li>Customer Login</li>
							<li>Order History</li>
							<li>Returns</li>
							<li>Order, Shipping & Payments</li>
							<li>Help & Support</li>
						</ul>
					</div>
					<div className="div1">
						<p>DOWNLOADS</p>
						<ul>
							<li>Catalogues & Brochures</li>
							<li>GS Tooling Package Forms</li>
							<li>RGA</li>
							<li>Quote Request Forms</li>
						</ul>
					</div>
					<div className="div1">
						<p>COMPANY</p>
						<ul>
							<li>About Us</li>
							<li>Careers</li>
							<li>Customer Support</li>
							<li>Privacy Policy</li>
							<li>Request Information</li>
						</ul>
					</div>
					<div className="div4">
						<h5>Find A Distributor</h5>
					</div>
					<div className="div5">
						<h3>WE'RE SOCIAL</h3>
						<div className="icons d-flex">
							<a href="/" className="me-3">
								<i class="fa-brands fa-facebook"></i>
							</a>

							<a href="/" className="me-3">
								<i class="fa-brands fa-instagram"></i>
							</a>

							<a href="/" className="me-3">
								<i class="fa-brands fa-twitter"></i>
							</a>

							<a href="/">
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Footer;
