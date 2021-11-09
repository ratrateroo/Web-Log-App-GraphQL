import React, { Fragment } from 'react';
import MainNavigation from '../Navigation/MainNavigation';

const Layout = (props) => {
	return (
		<Fragment>
			<MainNavigation />
			{props.children}
		</Fragment>
	);
};

export default Layout;
