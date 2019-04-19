import React, { useEffect, useState, useRef } from 'react';
import Menu from '../../components/Menu/Menu';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './Layout.scss';

const Layout = ({children}) => {
	const menuRef = useRef(null);
	const [showSidebar, onShowSidebar] = useState(null);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [translateY, setTranslateY] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const newScrollPosition = window.pageYOffset < 0 ? 0: window.pageYOffset;
			const menuHeight = menuRef.current ? menuRef.current.clientHeight : 0;
			const scrollDiff = scrollPosition - newScrollPosition;

			let newTranslateY = translateY + scrollDiff;

			if (newTranslateY > 0) {
				newTranslateY = 0;
			}

			if (newTranslateY < -menuHeight) {
				newTranslateY = -menuHeight;
			}

			setScrollPosition(newScrollPosition);

			if (translateY === newTranslateY) {
				return;
			}

			setTranslateY(newTranslateY);
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	}, [translateY, scrollPosition])
	
	let navigationClasses = ['layout__navigation'];
	
	if (scrollPosition >= 800) {
		navigationClasses = [...navigationClasses, 'layout__navigation--without-background'];
	}
	return (
		<div className="layout" ref={menuRef}>
			<Sidebar onSidebarClick={() => onShowSidebar(false)} isOpen={showSidebar}/>
			<div className={navigationClasses.join(' ')}>
				<Header scrollPosition={scrollPosition} onShowSidebar={onShowSidebar} isSidebarOpen={showSidebar}/>
				<Menu scrollPosition={scrollPosition} onLinkClick={() => onShowSidebar(false)}/>
			</div>
			<div className="layout__content">
				{children}
			</div>
		</div>
	);
}

export default Layout;