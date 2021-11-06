import React from 'react';

import UserNavLinks from './UserNavLinks';
import './UserNavigation.css';

const UserNavigation = (props) => {
	return (
		<div className="c-user-navigation">
			<UserNavLinks />
		</div>
	);
};

export default UserNavigation;
