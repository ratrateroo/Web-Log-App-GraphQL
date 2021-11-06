import React from 'react';

import DefaultNavLinks from './DefaultNavLinks';
import './DefaultNavigation.css';

const DefaultNavigation = (props) => {
	return (
		<div className="c-default-navigation">
			<DefaultNavLinks />
		</div>
	);
};

export default DefaultNavigation;
