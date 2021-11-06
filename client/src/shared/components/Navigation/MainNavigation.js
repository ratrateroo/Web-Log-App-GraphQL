import React from 'react';

import MainHeader from './MainHeader';
import DefaultNavigation from './DefaultNavigation';
import UserNavigation from './UserNavigation';
import './MainNavigation.css';

const MainNavigation = (props) => {
	return (
		<MainHeader>
			<nav className="c-navigation">
				<DefaultNavigation />
				<UserNavigation />
			</nav>
		</MainHeader>
	);
};

export default MainNavigation;
