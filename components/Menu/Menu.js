import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getLinks } from '../../apis/links';
import './Menu.scss';

const Menu = ({router, scrollPosition, onLinkClick}) => {
	const currentPath = router.asPath;
	const links = getLinks();

	let menuClasses = ['menu'];
	
	if (scrollPosition >= 400) {
		menuClasses = [...menuClasses, 'menu__disabled'];
	}

	return (
		<ul className={menuClasses.join(' ')}>
			{links.map(link => {
				const { id, value, url } = link;
				let linkClasses = ['menu__link'];
				
				if (currentPath === url) {
					linkClasses = [...linkClasses, 'menu__link--active'];
				}

				return (
					<Link href={url} key={id}>
						<li className={linkClasses.join(' ')} onClick={onLinkClick}>
								<a className="menu__link--text">{value}</a>
						</li>
					</Link>
				)
			})}
		</ul>
	);
}

Menu.propTypes = {
	scrollPosition: PropTypes.number.isRequired
};

export default withRouter(Menu);