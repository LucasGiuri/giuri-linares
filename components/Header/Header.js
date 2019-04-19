import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import dots from '../../assets/images/dots.svg';
import logo from '../../assets/images/marfeel_logo_rgb.svg';

const Header = ({scrollPosition, onShowSidebar, isSidebarOpen}) => {
	let logoClasses = ['header__logo'];
	let burgerClasses = ['header__burger'];
	
	if (scrollPosition >= 800) {
		logoClasses = [...logoClasses, 'header__logo--disabled'];
	}
	
	if (isSidebarOpen) {
		burgerClasses = [...burgerClasses, 'header__burger--sidebar-open'];
	}

	return (
		<div className="header">
			<img className={burgerClasses.join(' ')} src={dots} onClick={() => onShowSidebar(!isSidebarOpen)}/>
			<img className={logoClasses.join(' ')} src={logo} alt="" />
		</div>
	);
}

Header.propTypes = {
	scrollPosition: PropTypes.number.isRequired,
	onShowSidebar: PropTypes.func,
	isSidebarOpen: PropTypes.bool
};

Header.defaultProps = {
	onShowSidebar: () => {},
	isSidebarOpen: false
};

export default Header;