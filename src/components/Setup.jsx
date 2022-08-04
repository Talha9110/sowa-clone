import React from "react";
import "./style.css";

function Setup() {
	return (
		<>
			<div className="setup container-fluid d-flex w-100 mx-auto mt-5">
				<div className="item1">
					<img className="pic" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Website-Launch-Post.jpg" alt="" />
					<div className="mt-3">
						<a href="/" className="link">
							Welcome to the New SowaTool.com!
						</a>
						<p>Before you can get online there are a couple of steps you need to take.</p>
						<p>Click on the link below to setup your account now.</p>
						<a href="/" className="btn">
							Setup Account
						</a>
					</div>
				</div>
				<div className="item2">
					<img className="pic w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6QIJA9qPseSCj3yDZccVr8seIABjEXbyMw&usqp=CAU" alt="" />
					<div className="mt-3">
						<a href="/" className="link">
							Sowa To GS Tooling Endmill Rebrand
						</a>
						<p>Our premium carbide end mills will now be sold under the GS Tooling brand. But rest assured, these are still the same product you know and love.</p>
						<p>For more information you can read more at the link below.</p>
						<a href="/" className="btn">
							Learn More
						</a>
					</div>
				</div>
			</div>
			<div className="my_dist container-fluid my-4">
				<h2>Authorized Distributors</h2>
				<div className="images">
					<img className="distrubutors" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/mitutoyo-BW.png" alt="" />
					<img className="distrubutors" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/Starrett-BW.png" alt="" />
					<img className="distrubutors" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/Seco_web300-BW.png" alt="" />
					<img className="distrubutors" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/GuehringDLogo_1_2-BW.png" alt="" />
					<img className="distrubutors" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Authorized%20Distributors/Gray_Tools-BW.png" alt="" />
				</div>
			</div>
		</>
	);
}

export default Setup;
