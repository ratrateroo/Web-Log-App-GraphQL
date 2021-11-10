import React, { Fragment } from 'react';
import MainNavigation from '../Navigation/MainNavigation';
import AuthProvider from '../../auth/AuthProvider';

const Layout = (props) => {
	return (
		<Fragment>
			<MainNavigation />
			<AuthProvider>{props.children}</AuthProvider>
		</Fragment>
	);
};

export default Layout;
