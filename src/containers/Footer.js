import React from 'react';
import '../styles/footer.css';

const Footer = props => {
	return (
		<footer className="page-footer">
			<div className="page-footer__container">
				<div className="page-footer__header">MovieCards</div>
				<div className="page-footer__content"></div>
				<div className="page-footer__copyright"><span>Crafted with heart <i className="fa fa-heart"></i></span></div>
			</div>
		</footer>
	);
}

export default Footer;