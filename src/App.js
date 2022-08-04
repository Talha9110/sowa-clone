import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Setup from "./components/Setup";
import Slider from "./components/Slider";
import Top from "./components/Top";

function App() {
	return (
		<>
			<Navbar />
			<Slider />
			<Top />
			<Setup />
			<Footer />
		</>
	);
}

export default App;
