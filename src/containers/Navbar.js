import React from 'react';
import '../styles/scss/navbar.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleClickHandler } from '../actions/ui';



class Navbar extends React.Component {


	toggleClickHandler() {
		this.props.toggleClickHandler();
		const toggled = this.props.toggle;
		console.log(toggled);
		const menuWrapper = document.querySelector('.collapse');
		
		menuWrapper.className = 'collapse toggle-open';
		if (!toggled) {
			setTimeout(() => {
				menuWrapper.className = 'collapse toggle-open slide-in';
			}, 300);
		}else{
			menuWrapper.className = 'collapse';
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
					<div className="collapse">
						<ul>
							<li><Link to="/">Home</Link> <span></span></li>
							{/* <li><Link to="/category/">Category</Link> <span></span></li>
							<li><Link to="/about/">About</Link> <span></span></li>
							<li><Link to="/contact/">Contact</Link> <span></span></li> */}
						</ul>
					</div>
				</div>

			</nav>
		);
	}

}
const mapStateToProps = (state) => {

	return { toggle: state.ui.navbar.toggle }
}
export default connect(mapStateToProps, { toggleClickHandler })(Navbar);