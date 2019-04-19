import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { getLinks } from '../../apis/links';
import './Sidebar.scss';

const Sidebar = ({router, isOpen, onSidebarClick}) => {
	const currentPath = router.asPath;
    const links = getLinks();
    let sidebarClasses = ['sidebar'];
    
    if (isOpen) {
        sidebarClasses = [...sidebarClasses, 'sidebar--open'];
    }

	return (
		<div className={sidebarClasses.join(' ')}>
			{links.map(link => {
				const { id, value, url } = link;
				let linkClasses = ['sidebar__link'];
				
				if (currentPath === url) {
					linkClasses = [...linkClasses, 'sidebar__link--active'];
				}

				return (
					<Link href={url} key={id}>
						<li className={linkClasses.join(' ')} onClick={onSidebarClick}>
							<a className="sidebar__link--text">{value}</a>
						</li>
					</Link>
				)
			})}
		</div>
	);
}

Sidebar.propTypes = {
	onSidebarClick: PropTypes.func,
	isOpen: PropTypes.bool
};

Sidebar.defaultProps = {
	onSidebarClick: () => {},
	isOpen: false
};

export default withRouter(Sidebar);