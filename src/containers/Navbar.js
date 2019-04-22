import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

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
						<li><Link to="/">Home</Link> <span></span></li>
						<li><Link to="/category/">Category</Link> <span></span></li>
						<li><Link to="/about/">About</Link> <span></span></li>
						<li><Link to="/contact/">Contact</Link> <span></span></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;