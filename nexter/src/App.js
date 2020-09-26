import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Realtors from "./components/realtors/Realtors";
import Features from "./components/features/Features";
import Story from "./components/story/Story";
import Home from "./components/homes/Home";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";

function App() {
	return (
		<div className='container'>
			<Sidebar />
			<Header />
			<Realtors />
			<Features />
			<Story />
			<Home />
			<Gallery />
			<Footer />
		</div>
	);
}

export default App;
