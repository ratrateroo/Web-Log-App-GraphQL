import React, { Fragment } from 'react';
import MainNavigation from '../Navigation/MainNavigation';
import AuthProvider from '../../auth/AuthProvider';

const Layout = (props) => {
	return (
		<AuthProvider>
			<Fragment>
				<MainNavigation />
				{props.children}
			</Fragment>
		</AuthProvider>
	);
};

export default Layout;
