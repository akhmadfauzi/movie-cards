import React from 'react';
import '../styles/navbar.css';

const Navbar = props => {
	return (
		<nav className="navbar navbar-fluid">
			<div className="navbar__content">
				<div className="content__navbar-brand">MovieCards</div>
				<div className="content__navbar-items">
					<div className="menu-toggle">
					 <span><i className="fas fa-bars"></i></span>
					</div>
					<ul>
						<li>Home <span></span></li>
						<li>Category <span></span></li>
						<li>About <span></span></li>
						<li>Contact <span></span></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;