import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import './Layout.scss';

const Layout = () => {
	return (
		<div className='layout'>
			<Header />
			<div className='layout__content'>
				<Sidebar />
				<Content />
			</div>
		</div>
	);
};

export default Layout;
