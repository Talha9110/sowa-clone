import React from "react";
import "./style.css";

function Top() {
	return (
		<div className="top_products">
			<h2 className="text-center mt-1 mb-3">Top Product Categories</h2>
			<div className="product_item">
				<div className="items">
					<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Drilling-L1.jpg" alt="" />
					<h3>Drilling and Holemaking</h3>
				</div>
				<div className="items">
					<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Indexable-L1.jpg" alt="" />
					<h3>Indexable Cutting Tools</h3>
				</div>
				<div className="items">
					<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Measuring-L1.jpg" alt="" />
					<h3>Measuring & Inspecting</h3>
				</div>
				<div className="items">
					<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Milling-L1.jpg" alt="" />
					<h3>Milling</h3>
				</div>
				<div className="items">
					<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Threading-L1.jpg" alt="" />
					<h3>Threading & Tapping</h3>
				</div>
				<div className="items">
					<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/ToolHolding-L1.jpg" alt="" />
					<h3>Tool Holding</h3>
				</div>
				<div className="items">
					<img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Workholding-L1.jpg" alt="" />
					<h3>Workholding, Clamping & Fixturing</h3>
				</div>
			</div>
		</div>
	);
}

export default Top;
