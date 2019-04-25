import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleClickHandler } from '../actions/ui';



class Navbar extends React.Component {


	toggleClickHandler() {
		this.props.toggleClickHandler();
		const toggled = this.props.toggle;
		const menuWrapper = document.querySelector('.collapse');
		const menu = document.querySelector('.collapse>ul');
		menuWrapper.className = 'collapse toggle-open';
		if (!toggled) {
			setTimeout(() => {
				menu.className = 'collapse toggle-open slide-in';
			}, 300);
		}
	}

	render() {
		return (
			<nav className="navbar">
				<div className="navbar__content">
					<div className="navbar-brand">MovieCards</div>
					<div className="menu-toggle" onClick={this.toggleClickHandler.bind(this)}>
						<span><i className="fas fa-bars"></i></span>
					</div>
				</div>
				<div className="collapse">
					<ul>
						<li><Link to="/">Home</Link> <span></span></li>
						<li><Link to="/category/">Category</Link> <span></span></li>
						<li><Link to="/about/">About</Link> <span></span></li>
						<li><Link to="/contact/">Contact</Link> <span></span></li>
					</ul>
				</div>
			</nav>
		);
	}

}
const mapStateToProps = (state) => {

	return { toggle: state.ui.navbar.toggle }
}
export default connect(mapStateToProps, { toggleClickHandler })(Navbar);